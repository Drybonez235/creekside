// Thin Google Calendar API v3 client.
//
// Auth is a Google service account with Workspace domain-wide delegation: there is no
// consent screen, no per-account refresh token, and no stored credential to encrypt or
// expire. Every request acts as a real Workspace user via impersonation -- see
// lib/csb/service-account.ts for the mechanism and the Admin console setup it requires.
//
// This replaced a per-provider OAuth authorization-code flow. That flow forced a Google
// app-verification review to use the scopes needed for Meet links, and force-expired every
// provider's refresh token weekly while the app sat in Testing. Both problems are
// structural to end-user consent and neither exists under delegation.

import crypto from "node:crypto";
import { type CsbAccount } from "./store";
import { CSB_TZ } from "./constants";
import { accessTokenFor, invalidateToken } from "./service-account";
import { CsbApiError } from "./http";

const API_BASE = "https://www.googleapis.com/calendar/v3";

// Re-exported so existing importers (book.ts, diagnostics.ts) keep their import path.
// The class itself lives in ./http to keep the auth layer free of a circular dependency.
export { CsbApiError };

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
	const token = await accessTokenFor(account.email);

	const res = await fetch(`${API_BASE}${path}`, {
		method,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: body !== null ? JSON.stringify(body) : undefined,
	});

	if (res.status === 401 && !retrying) {
		invalidateToken(account.email);
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

// ensureBookingCalendar() lived here. It created a secondary "Creekside Bookings" calendar,
// which only existed because the old non-sensitive scope set (calendar.app.created) could
// not write to a provider's real calendar. Under delegation the app writes to the provider's
// primary calendar directly, so the secondary calendar has no reason to exist. Existing rows
// still carry a stale calendar_id; it is ignored, and availability no longer queries it.

/** events.insert on the provider's primary calendar; customer as attendee, native invite email (FR-30). */
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
	// The provider's own calendar. Delegation impersonates a real Workspace user, so
	// "primary" resolves to that person's calendar and conferenceData yields a Meet link
	// tied to their identity. (Under the previous OAuth scope set this same line 404'd,
	// because a calendar.app.created token cannot address a calendar it did not create.)
	const calendarId = "primary";

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
		conferenceData: {
			createRequest: {
				requestId: eventId,
				conferenceSolutionKey: { type: "hangoutsMeet" },
			},
		},
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
		return await apiRequest(account, "POST", `${eventsPath}?sendUpdates=all&conferenceDataVersion=1`, event);
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

