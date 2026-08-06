// Postgres (Supabase) implementation of CsbStore. Schema: ../../../../supabase-schema.sql
// (run once against the Supabase project before setting CSB_DB_DRIVER=postgres).
//
// Uses the secret (service-role-equivalent) key via plain supabase-js, not @supabase/server's
// withSupabase/createSupabaseContext wrapper -- those are for authenticating inbound HTTP
// requests per-caller (CORS, JWT extraction, scoped vs admin client). This module is trusted
// server-side code talking to its own tables, not a public API, so a single admin client
// (RLS bypassed by the secret key, same as a service-role key) is the right shape here.
import { createClient } from "@supabase/supabase-js";
import type {
	CsbAccount,
	CsbBookingRow,
	CsbStore,
	NewCsbBooking,
	WeeklyHours,
} from "./types";

function env(name: string): string | undefined {
	return (import.meta.env as Record<string, string | undefined>)[name] ?? process.env[name];
}

// Lazily constructed (not at module top-level): importing this module must stay side-effect
// free so store/index.ts can statically import it without demanding Supabase env vars from
// sqlite-only dev sessions. The client is only actually built the first time a store method
// runs, which only happens when CSB_DB_DRIVER=postgres is selected.
// No generated Database type (would need the Supabase CLI linked to this project) --
// typed loosely here deliberately. Real type safety is enforced at the CsbStore boundary via
// CsbAccount/CsbBookingRow and the rowToAccount/rowToBooking mappers below, not by supabase-js.
let _sb: ReturnType<typeof createClient<any, any, any>> | null = null;
function sb() {
	if (_sb) return _sb;
	const url = env("SUPABASE_URL");
	const key = env("SUPABASE_SECRET_KEY");
	if (!url || !key) {
		throw new Error("SUPABASE_URL and SUPABASE_SECRET_KEY must be set for CSB_DB_DRIVER=postgres.");
	}
	_sb = createClient<any, any, any>(url, key, { auth: { persistSession: false } });
	return _sb;
}

// Two helpers rather than one: void-result calls (save/update/set) only ever check for an
// error, and legitimately pass no data. Data-returning calls need both the error check and a
// null guard, since Postgrest's types allow `data: null` even though it can't actually happen
// alongside `error: null` for a successful select/insert.
function checkError(error: { message: string } | null): void {
	if (error) throw new Error(`Supabase store error: ${error.message}`);
}

function checkData<T>(result: { data: T | null; error: { message: string } | null }): T {
	checkError(result.error);
	if (result.data === null) throw new Error("Supabase store error: no data and no error returned");
	return result.data;
}

function rowToAccount(r: any): CsbAccount {
	return {
		key: r.key,
		email: r.email,
		label: r.label,
		refreshTokenEncrypted: r.refresh_token_encrypted,
		calendarId: r.calendar_id,
		enabled: !!r.enabled,
		slotMinutes: r.slot_minutes,
		hours: JSON.parse(r.hours_json) as WeeklyHours,
		authErrorAt: r.auth_error_at,
	};
}

function rowToBooking(r: any): CsbBookingRow {
	return {
		id: r.id,
		createdAt: r.created_at,
		customerName: r.customer_name,
		phone: r.phone,
		email: r.email,
		service: r.service,
		company: r.company,
		budget: r.budget,
		providerKey: r.provider_key,
		providerEmail: r.provider_email,
		startAt: r.start_at,
		endAt: r.end_at,
		eventId: r.event_id,
		icalUid: r.ical_uid,
		calendarId: r.calendar_id,
		gclid: r.gclid,
		fbclid: r.fbclid,
		source: r.source,
		status: r.status,
		errorDetail: r.error_detail,
	};
}

const BOOKING_COLUMN_MAP: Record<string, string> = {
	status: "status",
	eventId: "event_id",
	icalUid: "ical_uid",
	calendarId: "calendar_id",
	errorDetail: "error_detail",
};

export const postgresStore: CsbStore = {
	async getAccounts(enabledOnly = false) {
		let q = sb().from("csb_accounts").select("*");
		if (enabledOnly) q = q.eq("enabled", true);
		const { data, error } = await q;
		return checkData({ data, error }).map(rowToAccount);
	},

	async getAccount(key) {
		const { data, error } = await sb().from("csb_accounts").select("*").eq("key", key).maybeSingle();
		checkError(error);
		return data ? rowToAccount(data) : null;
	},

	async saveAccount(account) {
		const { error } = await sb().from("csb_accounts").upsert(
			{
				key: account.key,
				email: account.email,
				label: account.label,
				refresh_token_encrypted: account.refreshTokenEncrypted,
				calendar_id: account.calendarId,
				enabled: account.enabled,
				slot_minutes: account.slotMinutes,
				hours_json: JSON.stringify(account.hours),
				auth_error_at: account.authErrorAt ?? null,
			},
			{ onConflict: "key" },
		);
		checkError(error);
	},

	async insertBooking(row: NewCsbBooking) {
		const { data, error } = await sb()
			.from("csb_bookings")
			.insert({
				created_at: new Date().toISOString(),
				customer_name: row.customerName,
				phone: row.phone,
				email: row.email,
				service: row.service,
				company: row.company,
				budget: row.budget,
				provider_key: row.providerKey,
				provider_email: row.providerEmail,
				start_at: row.startAt,
				end_at: row.endAt,
				gclid: row.gclid,
				fbclid: row.fbclid,
				status: "pending",
			})
			.select("id")
			.single();
		return checkData({ data, error }).id as number;
	},

	async updateBooking(id, patch) {
		const update: Record<string, unknown> = {};
		for (const [k, v] of Object.entries(patch)) {
			const col = BOOKING_COLUMN_MAP[k];
			if (!col) continue;
			update[col] = v;
		}
		if (!Object.keys(update).length) return;
		const { error } = await sb().from("csb_bookings").update(update).eq("id", id);
		checkError(error);
	},

	async findDuplicateBooking(email, providerKey, startAt) {
		const { data, error } = await sb()
			.from("csb_bookings")
			.select("id")
			.eq("email", email)
			.eq("provider_key", providerKey)
			.eq("start_at", startAt)
			.eq("status", "created")
			.limit(1);
		return checkData({ data, error }).length > 0;
	},

	async listBookings(limit) {
		const { data, error } = await sb()
			.from("csb_bookings")
			.select("*")
			.order("id", { ascending: false })
			.limit(limit);
		return checkData({ data, error }).map(rowToBooking);
	},

	async getSetting(key, defaultValue) {
		const { data, error } = await sb().from("csb_settings").select("value").eq("key", key).maybeSingle();
		checkError(error);
		return data ? (data as { value: string }).value : defaultValue;
	},

	async setSetting(key, value) {
		const { error } = await sb().from("csb_settings").upsert({ key, value }, { onConflict: "key" });
		checkError(error);
	},
};
