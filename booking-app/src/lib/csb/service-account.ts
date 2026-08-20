/**
 * Google service-account auth with Workspace domain-wide delegation (DWD), keyless.
 *
 * No private key exists anywhere in this deployment. The app authenticates as the service
 * account through Application Default Credentials -- in production, Workload Identity
 * Federation from the EC2 instance's IAM role -- and then asks Google's IAM Credentials API
 * to sign the delegation assertion with the service account's *Google-managed* private key,
 * which never leaves Google.
 *
 * Why keyless rather than a downloaded JSON key: the org enforces
 * `iam.disableServiceAccountKeyCreation`, so key creation is blocked outright. That
 * constraint points at the better design anyway -- Google's own guidance is that DWD does
 * not require a key and that signJwt should be used instead. A key on Jonathan's box would
 * be a long-lived credential capable of impersonating any user in the domain; this way the
 * only thing on disk is a non-secret federation config, and every credential in play is
 * short-lived.
 *
 * The flow, per delegated request:
 *   1. ADC -> access token for the service account (or for a principal allowed to sign as it)
 *   2. iamcredentials signJwt -> assertion with `sub` set to the provider being impersonated
 *   3. oauth2 token endpoint (jwt-bearer grant) -> short-lived access token acting as them
 * Step 3's result is cached per user for its lifetime; steps 1-2 repeat only on a cache miss.
 *
 * Hard requirement: every impersonated address must be a real user in the Workspace domain.
 * A service account cannot impersonate a consumer Gmail account.
 */

import { GoogleAuth } from "google-auth-library";
import { CsbApiError } from "./http";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const IAM_CREDENTIALS_BASE = "https://iamcredentials.googleapis.com/v1";

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

function env(name: string): string | undefined {
	return (import.meta.env as any)?.[name] ?? process.env[name];
}

/** The service account being impersonated as, e.g. creekside-booking@<project>.iam.gserviceaccount.com */
export function serviceAccountEmail(): string {
	const email = env("CSB_SA_EMAIL");
	if (!email) {
		throw new CsbApiError(
			"CSB_SA_EMAIL is not set — the app needs to know which service account to sign as.",
		);
	}
	return email;
}

/**
 * The service account's numeric unique ID, which is the value a Workspace super admin
 * enters when creating the domain-wide delegation entry. Display-only, so a missing value
 * is reported rather than thrown -- the admin page shows it to whoever is doing that setup.
 */
export function delegationClientId(): string {
	return env("CSB_SA_CLIENT_ID") || "(set CSB_SA_CLIENT_ID to display — see the service account's Unique ID in Google Cloud)";
}

/**
 * ADC client, scoped for the IAM Credentials API (not for Calendar -- this token's only job
 * is to authorize the signJwt call). Created once: the library caches and refreshes the
 * underlying federated credential itself.
 */
let authClient: GoogleAuth | null = null;
function auth(): GoogleAuth {
	if (!authClient) {
		authClient = new GoogleAuth({
			scopes: ["https://www.googleapis.com/auth/cloud-platform"],
		});
	}
	return authClient;
}

/**
 * Asks IAM to sign a DWD assertion with the service account's Google-managed key.
 *
 * Requires the ADC principal to hold `roles/iam.serviceAccountTokenCreator` on the service
 * account. In production that principal is the federated AWS role; locally it's whoever ran
 * `gcloud auth application-default login`.
 */
async function signedAssertion(subject: string): Promise<string> {
	const saEmail = serviceAccountEmail();
	const now = Math.floor(Date.now() / 1000);

	// iat is backdated 30s deliberately. Google rejects an assertion whose iat is in the
	// future ("JWT issued at future"), which this deployment has already hit once from clock
	// drift on the host (2026-08-13). Backdating absorbs modest skew; it is not a substitute
	// for NTP being correct on the box.
	const claims = {
		iss: saEmail,
		sub: subject,
		scope: SA_SCOPES,
		aud: TOKEN_URL,
		iat: now - 30,
		exp: now + 3600,
	};

	let client;
	try {
		client = await auth().getClient();
	} catch (err) {
		throw new CsbApiError(
			`Could not obtain Application Default Credentials — check GOOGLE_APPLICATION_CREDENTIALS points at the Workload Identity Federation config (${err instanceof Error ? err.message : String(err)})`,
		);
	}

	const url = `${IAM_CREDENTIALS_BASE}/projects/-/serviceAccounts/${encodeURIComponent(saEmail)}:signJwt`;
	let res: any;
	try {
		res = await client.request({
			url,
			method: "POST",
			// signJwt takes the payload as a JSON *string*, not an object.
			data: { payload: JSON.stringify(claims) },
		});
	} catch (err: any) {
		const status = err?.response?.status;
		const detail = err?.response?.data?.error?.message || err?.message || String(err);
		const hint =
			status === 403
				? ` — the ADC principal needs roles/iam.serviceAccountTokenCreator on ${saEmail}`
				: status === 404
					? ` — service account ${saEmail} not found, check CSB_SA_EMAIL`
					: "";
		throw new CsbApiError(`signJwt failed${status ? ` (HTTP ${status})` : ""}: ${detail}${hint}`);
	}

	const signed = res?.data?.signedJwt;
	if (!signed) throw new CsbApiError("signJwt returned no signedJwt");
	return signed;
}

/** Delegated access tokens are cached per impersonated user; Google issues them with a 1h life. */
const tokenCache = new Map<string, { token: string; expiresAt: number }>();

/**
 * Returns an access token that acts as `userEmail`.
 *
 * There is no per-account stored credential and so no "reconnect needed" state to track: a
 * failure here is a configuration or directory problem, not one account going stale.
 */
export async function accessTokenFor(userEmail: string): Promise<string> {
	const cached = tokenCache.get(userEmail);
	if (cached && cached.expiresAt > Date.now()) return cached.token;

	const assertion = await signedAssertion(userEmail);

	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
			assertion,
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
		// These two errors cover essentially every real misconfiguration, and Google's own
		// descriptions are too terse to act on, so name the fix in the message.
		const err = body?.error || `HTTP ${res.status}`;
		const hint =
			err === "unauthorized_client"
				? " — the Admin console delegation entry is missing, uses the wrong client ID, or its scope list does not exactly match SA_SCOPES"
				: err === "invalid_grant"
					? ` — "${userEmail}" is probably not a real user in the Workspace domain (or the host clock is skewed)`
					: body?.error_description
						? ` — ${body.error_description}`
						: "";
		throw new CsbApiError(`Delegated token request failed (${err})${hint}`);
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
