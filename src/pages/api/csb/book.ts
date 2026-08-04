// Linear and defensive, matching class-csb-rest.php::book() and the architecture note in
// creekside-scheduler-requirements-v1.md §4: rate-limit → honeypot → validate → duplicate
// guard → freebusy re-check → events.insert → reconciliation row → response.

import type { APIRoute } from "astro";
import crypto from "node:crypto";
import { store } from "../../../lib/csb/store";
import { slotIsFree } from "../../../lib/csb/availability";
import { createEvent, CsbApiError } from "../../../lib/csb/google-client";
import { wallClockToInstant, toRfc3339, formatWallClockDateTime } from "../../../lib/csb/datetime";
import { clientIp, errorResponse, jsonResponse } from "../../../lib/csb/http";
import { withSlotLock } from "../../../lib/csb/slot-lock";

// 1. Rate limit (NFR-9): 5 attempts / 10 min / IP. In-memory — fine for a single standalone
// Node process, same pattern as src/lib/antibot.ts's rateLimited().
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string | null): boolean {
	if (!ip) return false;
	const now = Date.now();
	const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
	recent.push(now);
	hits.set(ip, recent);
	if (hits.size > 5000) {
		for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
	}
	return recent.length > MAX_PER_WINDOW;
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^\d{2}:\d{2}$/;
const isEmail = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

export const POST: APIRoute = async ({ request }) => {
	const ip = clientIp(request);
	if (rateLimited(ip)) return errorResponse("csb_rate", "Too many attempts", 429);

	let p: Record<string, unknown>;
	try {
		p = await request.json();
	} catch {
		return errorResponse("csb_bad_request", "Invalid JSON", 400);
	}

	// 2. Honeypot: hidden "website" field must be empty.
	if (typeof p.website === "string" && p.website.trim() !== "") {
		return jsonResponse({ ok: true }); // silently absorb bots
	}

	// 3. Validate.
	const name = String(p.name ?? "").trim().slice(0, 190);
	const phone = String(p.phone ?? "").trim().slice(0, 64);
	const email = String(p.email ?? "").trim().toLowerCase();
	const date = String(p.date ?? "").trim();
	const time = String(p.time ?? "").trim();
	const providerKey = String(p.provider ?? "").trim();
	const service = String(p.service ?? "").trim().slice(0, 190);
	const company = String(p.company ?? "").trim().slice(0, 190);
	const budget = String(p.budget ?? "").trim().slice(0, 64);
	const gclid = String(p.gclid ?? "").slice(0, 255);
	const fbclid = String(p.fbclid ?? "").slice(0, 255);

	const account = await store.getAccount(providerKey);
	if (
		!name ||
		!phone ||
		!isEmail(email) ||
		!account ||
		!account.enabled ||
		!DATE_RE.test(date) ||
		!TIME_RE.test(time)
	) {
		return errorResponse("csb_bad_request", "Missing or invalid fields", 400);
	}

	const start = wallClockToInstant(date, time);
	const end = new Date(start.getTime() + Math.max(5, account.slotMinutes) * 60_000);
	if (start < new Date()) {
		return errorResponse("csb_bad_request", "Slot is in the past", 400);
	}

	const startAtCol = `${date} ${time}:00`;

	// Steps 4-6 run under a per-(provider, slot) lock: the duplicate guard, the FR-14
	// freebusy re-check, and the reconciliation-row + events.insert all need to happen as
	// one atomic unit relative to any other request for this exact slot, or two concurrent
	// requests can both pass the re-check before either has created its event (see
	// lib/csb/slot-lock.ts).
	return withSlotLock(`${account.key}|${startAtCol}`, async () => {
		// 4. Duplicate guard: same email + same slot already created.
		if (await store.findDuplicateBooking(email, account.key, startAtCol)) {
			return errorResponse("csb_duplicate", "duplicate", 409);
		}

		// 5. FR-14: immediate slot re-check against Google.
		let free: boolean;
		try {
			free = await slotIsFree(account, start, end);
		} catch {
			return errorResponse("csb_unavailable", "Calendar unavailable", 503);
		}
		if (!free) return errorResponse("csb_slot_taken", "slot_taken", 409);

		// 6. Reconciliation row first (status pending), then events.insert.
		const bookingId = await store.insertBooking({
			customerName: name,
			phone,
			email,
			service,
			company,
			budget,
			providerKey: account.key,
			providerEmail: account.email,
			startAt: startAtCol,
			endAt: formatWallClockDateTime(end),
			gclid,
			fbclid,
		});

		let event: any;
		try {
			event = await createEvent(account, {
				customerName: name,
				phone,
				email,
				service,
				company,
				budget,
				startRfc3339: toRfc3339(start),
				endRfc3339: toRfc3339(end),
				bookingId,
				gclid,
			});
		} catch (err) {
			const detail = err instanceof CsbApiError ? err.message : String(err);
			await store.updateBooking(bookingId, { status: "error", errorDetail: detail });
			return errorResponse("csb_unavailable", "Booking failed", 503); // NFR-5, no partial booking
		}

		if (!event?.id) {
			await store.updateBooking(bookingId, { status: "error", errorDetail: "no event id" });
			return errorResponse("csb_unavailable", "Booking failed", 503);
		}

		await store.updateBooking(bookingId, {
			status: "created",
			eventId: event.id,
			icalUid: event.iCalUID || "",
			calendarId: account.calendarId,
		});

		// FR-25: hashed identifiers for enhanced conversions; event id is the dedup key.
		return jsonResponse({
			ok: true,
			transaction_id: event.id,
			provider: account.label,
			service,
			date,
			time,
			em: crypto.createHash("sha256").update(email).digest("hex"),
			ph: crypto.createHash("sha256").update(phone.replace(/[^0-9+]/g, "")).digest("hex"),
		});
	});
};
