/**
 * Google service-account auth with Workspace domain-wide delegation (DWD).
 *
 * Replaces the per-provider OAuth refresh-token flow. Instead of each team member
 * granting consent through a consent screen, a single service account is authorized
 * once by a Workspace super admin (Admin console → Security → Access and data control →
 * API controls → Domain-wide delegation) against this app's numeric client ID and an
 * explicit scope list. The app then mints short-lived access tokens that act *as* a
 * given user via the `sub` claim.
 *
 * Why this exists (see HANDOVER.md §1):
 *  - No OAuth consent screen, so no app publication and no verification review. DWD
 *    scopes are authorized by the domain admin, not by end-user consent, so sensitive
 *    scopes like calendar.events carry no review requirement here.
 *  - No refresh tokens, so nothing to encrypt at rest and nothing to expire. The old
 *    flow's tokens force-expired every 7 days while the OAuth app sat in Testing.
 *  - Impersonation is a real Workspace identity, so conferenceData/Meet-link creation
 *    and the provider's own primary calendar are both reachable.
 *
 * Hard requirement: every impersonated address must be a real user in the Workspace
 * domain. A service account cannot impersonate a consumer Gmail account.
 */

import crypto from "node:crypto";
import { CsbApiError } from "./http";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const JWT_AUD = "https://oauth2.googleapis.com/token";

/**
 * Scopes authorized for the service account in the Admin console. This string must match
 * the delegation entry EXACTLY -- Google compares the requested scope set against the
 * admin-authorized set and rejects the whole assertion on any extra scope, with an
 * `unauthorized_client` error that names nothing useful. After editing this list, re-enter
 * it in the Admin console delegation entry or every token request starts failing.
 *
 *  - calendar.events   : create/update/cancel bookings and generate Meet conference links
 *  - calendar.freebusy : read busy/free for availability
 */
export const SA_SCOPES = [
	"https://www.googleapis.com/auth/calendar.events",
	"https://www.googleapis.com/auth/calendar.freebusy",
].join(" ");

interface ServiceAccountKey {
	client_email: string;
	private_key: string;
	client_id?: string;
}

let cachedKey: ServiceAccountKey | null = null;

/**
 * Loads the service-account key from either an inline JSON env var or a file path.
 * The file form is preferred in production: a multi-line PEM private key inside a
 * dotenv value has to be \n-escaped, and a single missed escape yields an opaque
 * "error:1E08010C:DECODER routines::unsupported" at signing time.
 */
function serviceAccountKey(): ServiceAccountKey {
	if (cachedKey) return cachedKey;

	const env = (k: string) => (import.meta.env as any)[k] || process.env[k];
	const inline = env("CSB_SA_KEY_JSON");
	const path = env("CSB_SA_KEY_FILE");

	let raw: string;
	if (inline) {
		raw = inline;
	} else if (path) {
		// Imported lazily so the module still loads in environments without fs access.
		raw = require("node:fs").readFileSync(path, "utf8");
	} else {
		throw new CsbApiError(
			"No service-account key configured — set CSB_SA_KEY_FILE (path to the JSON key) or CSB_SA_KEY_JSON.",
		);
	}

	let parsed: ServiceAccountKey;
	try {
		parsed = JSON.parse(raw);
	} catch {
		throw new CsbApiError("Service-account key is not valid JSON.");
	}
	if (!parsed.client_email || !parsed.private_key) {
		throw new CsbApiError("Service-account key is missing client_email or private_key.");
	}
	// Tolerate keys pasted into an env var with literal \n sequences.
	parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");

	cachedKey = parsed;
	return parsed;
}

/** The service account's numeric client ID -- the value the admin enters when delegating. */
export function delegationClientId(): string {
	return serviceAccountKey().client_id || "(client_id not present in key file)";
}

export function serviceAccountEmail(): string {
	return serviceAccountKey().client_email;
}

function base64Url(input: Buffer | string): string {
	return Buffer.from(input)
		.toString("base64")
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
}

/** Builds and signs the RS256 assertion that requests an access token as `subject`. */
function signedAssertion(subject: string): string {
	const key = serviceAccountKey();
	const now = Math.floor(Date.now() / 1000);

	// iat is backdated 30s deliberately. Google rejects an assertion whose iat is in the
	// future ("JWT issued at future"), which this deployment has already hit once from
	// clock drift on the host (2026-08-13). Backdating absorbs modest skew; it does not
	// substitute for NTP being correct on the box.
	const claims = {
		iss: key.client_email,
		sub: subject,
		scope: SA_SCOPES,
		aud: JWT_AUD,
		iat: now - 30,
		exp: now + 3600,
	};

	const signingInput =
		base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" })) +
		"." +
		base64Url(JSON.stringify(claims));

	const signature = crypto.createSign("RSA-SHA256").update(signingInput).sign(key.private_key);
	return `${signingInput}.${base64Url(signature)}`;
}

/** Access tokens are cached per impersonated user; Google issues them with a 1h life. */
const tokenCache = new Map<string, { token: string; expiresAt: number }>();

/**
 * Returns an access token that acts as `userEmail`.
 *
 * Unlike the OAuth flow this replaces, there is no per-account stored credential and so
 * no "reconnect needed" state to track: a failure here is a configuration or directory
 * problem affecting every provider at once, not one account going stale.
 */
export async function accessTokenFor(userEmail: string): Promise<string> {
	const cached = tokenCache.get(userEmail);
	if (cached && cached.expiresAt > Date.now()) return cached.token;

	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
			assertion: signedAssertion(userEmail),
		}),
	});

	const text = await res.text();
	let body: any;
	try {
		body = JSON.parse(text);
	} catch {
		body = null;
	}

	if (!body?.access_token) {
		// These three errors cover essentially every real misconfiguration, and Google's
		// own descriptions are too terse to act on, so name the fix in the message.
		const err = body?.error || `HTTP ${res.status}`;
		const hint =
			err === "unauthorized_client"
				? " — the Admin console delegation entry is missing, uses the wrong client ID, or its scope list does not exactly match SA_SCOPES"
				: err === "invalid_grant"
					? ` — "${userEmail}" is probably not a real user in the Workspace domain (or the host clock is skewed)`
					: body?.error_description
						? ` — ${body.error_description}`
						: "";
		throw new CsbApiError(`Service-account token request failed (${err})${hint}`);
	}

	const lifetimeMs = Math.max(60, Number(body.expires_in) || 3600) * 1000;
	tokenCache.set(userEmail, {
		token: body.access_token,
		// Refresh a little early so a token never expires mid-request.
		expiresAt: Date.now() + lifetimeMs - 5 * 60 * 1000,
	});
	return body.access_token;
}

/** Drops a cached token, used after a 401 so the retry re-mints rather than replaying it. */
export function invalidateToken(userEmail: string): void {
	tokenCache.delete(userEmail);
}
