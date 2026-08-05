// OAuth redirect target. Only completes when the state nonce matches one issued by
// /api/csb/admin/connect (i.e. an admin who just initiated the flow).

import type { APIRoute } from "astro";
import { store } from "../../../../lib/csb/store";
import { consumeState } from "../../../../lib/csb/oauth-state";
import { exchangeCode, ensureBookingCalendar, CsbApiError } from "../../../../lib/csb/google-client";
import { keyForEmail, encrypt, defaultHours } from "../../../../lib/csb/accounts";

export const prerender = false;

function capitalize(s: string): string {
	return s ? s[0].toUpperCase() + s.slice(1) : s;
}

export const GET: APIRoute = async ({ url, redirect }) => {
	const state = url.searchParams.get("state");
	const code = url.searchParams.get("code");

	if (!code || !consumeState(state)) {
		return new Response(
			"Creekside Booking: invalid OAuth state. Start again from the admin page.",
			{ status: 400 },
		);
	}

	let tokens: { email: string; refreshToken: string };
	try {
		tokens = await exchangeCode(code);
	} catch (err) {
		const msg = err instanceof CsbApiError ? err.message : String(err);
		return new Response(`OAuth failed: ${msg}`, { status: 400 });
	}

	const key = keyForEmail(tokens.email);
	const existing = await store.getAccount(key);
	const account = {
		key,
		email: tokens.email,
		label: existing?.label ?? capitalize(tokens.email.split("@")[0]),
		refreshTokenEncrypted: encrypt(tokens.refreshToken),
		calendarId: existing?.calendarId ?? "",
		enabled: existing?.enabled ?? true,
		slotMinutes: existing?.slotMinutes ?? 30,
		hours: existing?.hours ?? defaultHours(),
		authErrorAt: null,
	};
	await store.saveAccount(account);

	// Create the dedicated booking calendar right away (D-4).
	try {
		await ensureBookingCalendar(account);
	} catch {
		// Non-fatal here — the admin "Test connection" surfaces this if it keeps failing.
	}

	return redirect(`/admin/booking/?connected=${encodeURIComponent(tokens.email)}`);
};
