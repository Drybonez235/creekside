// Thin Google Calendar API v3 client, ported from class-csb-google-client.php.
//
// Credentials come from CSB_GOOGLE_CLIENT_ID / CSB_GOOGLE_CLIENT_SECRET (.env — never the
// DB, never the browser). OAuth: authorization-code flow with offline access. One refresh
// token per connected account, stored encrypted (lib/csb/accounts.ts). Access tokens cached
// in-memory (~55 min; Google issues 60-min tokens) — mirrors the in-memory rate-limit
// pattern already used elsewhere in this repo (src/lib/antibot.ts).

import crypto from "node:crypto";
import { store, type CsbAccount } from "./store";
import { baseUrl, CSB_TZ, googleClientId, googleClientSecret } from "./constants";
import { decrypt } from "./accounts";

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const API_BASE = "https://www.googleapis.com/calendar/v3";

/**
 * Granular, non-sensitive scopes only (avoids Google's sensitive-scope verification when
 * the OAuth app is published). Do NOT add `calendar`, `calendar.events`, or
 * `calendar.readonly` — see CLAUDE.md invariant #2.
 *  - calendar.app.created : create the "Creekside Bookings" secondary calendar and manage
 *    events on calendars this app created
 *  - calendar.freebusy    : read free/busy of the account's calendars (primary included)
 *    for availability
 */
const SCOPES =
	"openid email https://www.googleapis.com/auth/calendar.app.created https://www.googleapis.com/auth/calendar.freebusy";

export function redirectUri(): string {
	// Trailing slash required — this site's astro.config.mjs sets trailingSlash: 'always',
	// and (unlike the .csv export route) this extensionless path 404s without it.
	return `${baseUrl()}/api/csb/oauth/callback/`;
}

export function authUrl(state: string): string {
	const params = new URLSearchParams({
		client_id: googleClientId() || "",
		redirect_uri: redirectUri(),
		response_type: "code",
		scope: SCOPES,
		access_type: "offline",
		prompt: "consent", // guarantees a refresh token on reconnect
		state,
		include_granted_scopes: "true",
	});
	return `${AUTH_URL}?${params.toString()}`;
}

export class CsbApiError extends Error {
	constructor(
		message: string,
		public response?: unknown,
		/** HTTP status, when the failure came from an API response rather than a throw. */
		public status?: number,
	) {
		super(message);
		this.name = "CsbApiError";
	}
}

/** Exchange auth code; returns { email, refreshToken } or throws CsbApiError. */
export async function exchangeCode(
	code: string,
): Promise<{ email: string; refreshToken: string }> {
	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			code,
			client_id: googleClientId() || "",
			client_secret: googleClientSecret() || "",
			redirect_uri: redirectUri(),
			grant_type: "authorization_code",
		}),
	});
	const bodyText = await res.text();
	const body = safeJson(bodyText);
	if (!body?.refresh_token || !body?.id_token) {
		throw new CsbApiError(`Token exchange failed: ${bodyText}`);
	}
	// Email from the id_token payload (no extra API call).
	const parts = String(body.id_token).split(".");
	const claims = safeJson(base64UrlDecode(parts[1] || ""));
	if (!claims?.email) throw new CsbApiError("No email in id_token");
	return { email: claims.email, refreshToken: body.refresh_token };
}

/* ---- access token cache (in-memory, ~55 min TTL) ---- */
const tokenCache = new Map<string, { token: string; expiresAt: number }>();

export async function accessToken(account: CsbAccount): Promise<string> {
	const cached = tokenCache.get(account.key);
	if (cached && cached.expiresAt > Date.now()) return cached.token;

	const res = await fetch(TOKEN_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			client_id: googleClientId() || "",
			client_secret: googleClientSecret() || "",
			refresh_token: decrypt(account.refreshTokenEncrypted),
			grant_type: "refresh_token",
		}),
	});
	const body = safeJson(await res.text());
	if (!body?.access_token) {
		// Only flag the account as needing a reconnect when Google actually says the grant is
		// dead. `invalid_grant` is the specific signal for a revoked/expired refresh token
		// (NFR-3); a 5xx or a network blip from the token endpoint is transient and must NOT
		// raise the same alarm, or one bad minute leaves a permanent "Reconnect needed" badge
		// on a perfectly healthy account and sends someone re-doing OAuth for nothing.
		if (body?.error === "invalid_grant") {
			await store.saveAccount({ ...account, authErrorAt: new Date().toISOString() });
		}
		throw new CsbApiError(
			`Access token refresh failed for ${account.key}${body?.error ? ` (${body.error})` : ""}`,
		);
	}
	// Recovery clears the flag. Nothing else does -- previously authErrorAt was only ever
	// reset by a full reconnect through the OAuth callback, so a single transient failure
	// left the admin page claiming a reconnect was needed indefinitely, even once the account
	// was demonstrably working again.
	if (account.authErrorAt) {
		account.authErrorAt = null;
		await store.saveAccount(account);
	}
	tokenCache.set(account.key, {
		token: body.access_token,
		expiresAt: Date.now() + 55 * 60 * 1000,
	});
	return body.access_token;
}

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Request with one retry on 401 (stale token) and backoff on 403/429/5xx (FR-23). */
export async function apiRequest(
	account: CsbAccount,
	method: string,
	path: string,
	body: unknown = null,
	retrying = false,
): Promise<any> {
	const token = await accessToken(account);

	const res = await fetch(`${API_BASE}${path}`, {
		method,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: body !== null ? JSON.stringify(body) : undefined,
	});

	if (res.status === 401 && !retrying) {
		tokenCache.delete(account.key);
		return apiRequest(account, method, path, body, true);
	}
	if ([403, 429, 500, 503].includes(res.status) && !retrying) {
		await sleep(750);
		return apiRequest(account, method, path, body, true);
	}

	const text = await res.text();
	const data = safeJson(text);
	if (res.status >= 400) {
		throw new CsbApiError(`Calendar API ${res.status} on ${path}`, data ?? text, res.status);
	}
	return data;
}

/* ---------------- Calendar API helpers ---------------- */

/** freebusy.query across the account's calendars. RFC3339 in/out. */
export async function freebusy(
	account: CsbAccount,
	timeMin: string,
	timeMax: string,
	calendarIds: string[],
) {
	return apiRequest(account, "POST", "/freeBusy", {
		timeMin,
		timeMax,
		timeZone: CSB_TZ,
		items: calendarIds.map((id) => ({ id })),
	});
}

/** Create the dedicated booking calendar if this account doesn't have one yet. */
export async function ensureBookingCalendar(account: CsbAccount): Promise<string> {
	if (account.calendarId) return account.calendarId;
	const cal = await apiRequest(account, "POST", "/calendars", {
		summary: "Creekside Bookings",
		timeZone: CSB_TZ,
	});
	if (!cal?.id) throw new CsbApiError("calendars.insert returned no id");
	account.calendarId = cal.id;
	await store.saveAccount(account);
	return cal.id;
}

/** events.insert on the booking calendar; customer as attendee, native invite email (FR-30). */
export async function createEvent(
	account: CsbAccount,
	args: {
		customerName: string;
		phone: string;
		email: string;
		service: string;
		company: string;
		budget: string;
		startRfc3339: string;
		endRfc3339: string;
		bookingId: number;
		gclid: string;
	},
) {
	const calendarId = await ensureBookingCalendar(account);

	const descriptionLines = [
		"Booked online via creekside website",
		`Name: ${args.customerName}`,
		`Phone: ${args.phone}`,
		`Email: ${args.email}`,
	];
	if (args.service) descriptionLines.push(`Service: ${args.service}`);
	if (args.company) descriptionLines.push(`Company: ${args.company}`);
	if (args.budget) descriptionLines.push(`Monthly ad spend: ${args.budget}`);

	// Client-generated id, which is what makes this insert idempotent and therefore safe to
	// retry. apiRequest() retries 5xx/429, and events.insert is NOT naturally idempotent: if
	// the first attempt actually created the event but its response was lost (the classic
	// "succeeded but you didn't hear about it" case), a blind retry creates a SECOND calendar
	// event -- a real duplicate booking on both the provider's and the customer's calendar,
	// with only one of them recorded in the reconciliation log. Sending an explicit id means
	// the retry collides with the first write and Google rejects it as a duplicate instead.
	//
	// Google requires ids in the base32hex alphabet (lowercase a-v plus 0-9), 5-1024 chars;
	// a hex string is a strict subset of that, and "csb" is likewise all within a-v.
	const eventId = `csb${crypto.randomBytes(16).toString("hex")}`;

	const event = {
		id: eventId,
		summary: `Booking: ${args.customerName}${args.service ? " — " + args.service : ""}`,
		description: descriptionLines.join("\n"),
		start: { dateTime: args.startRfc3339, timeZone: CSB_TZ },
		end: { dateTime: args.endRfc3339, timeZone: CSB_TZ },
		attendees: [{ email: args.email, responseStatus: "accepted" }],
		extendedProperties: {
			private: {
				csb: "1",
				source: "website",
				booking_id: String(args.bookingId),
				has_gclid: args.gclid ? "1" : "0",
			},
		},
	};

	const eventsPath = `/calendars/${encodeURIComponent(calendarId)}/events`;
	try {
		return await apiRequest(account, "POST", `${eventsPath}?sendUpdates=all`, event);
	} catch (err) {
		// 409 here means this exact id already exists — i.e. an earlier attempt in this same
		// call DID succeed and we're seeing the retry collide with it. That's success, not
		// failure: read the event back so the caller still gets its id/iCalUID for the
		// reconciliation row and the conversion event.
		if (err instanceof CsbApiError && err.status === 409) {
			return await apiRequest(account, "GET", `${eventsPath}/${encodeURIComponent(eventId)}`);
		}
		throw err;
	}
}

function safeJson(text: string): any {
	try {
		return JSON.parse(text);
	} catch {
		return null;
	}
}

function base64UrlDecode(input: string): string {
	const padded = input.replace(/-/g, "+").replace(/_/g, "/");
	return Buffer.from(padded, "base64").toString("utf8");
}
