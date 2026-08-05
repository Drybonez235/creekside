import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import type {
	CsbAccount,
	CsbBookingRow,
	CsbStore,
	NewCsbBooking,
	WeeklyHours,
} from "./types";

const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "creekside-booking.db");

fs.mkdirSync(DB_DIR, { recursive: true });
const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS csb_accounts (
  key TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  label TEXT NOT NULL DEFAULT '',
  refresh_token_encrypted TEXT NOT NULL DEFAULT '',
  calendar_id TEXT NOT NULL DEFAULT '',
  enabled INTEGER NOT NULL DEFAULT 1,
  slot_minutes INTEGER NOT NULL DEFAULT 30,
  hours_json TEXT NOT NULL DEFAULT '{}',
  auth_error_at TEXT
);

CREATE TABLE IF NOT EXISTS csb_bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  customer_name TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  service TEXT NOT NULL DEFAULT '',
  company TEXT NOT NULL DEFAULT '',
  budget TEXT NOT NULL DEFAULT '',
  provider_key TEXT NOT NULL DEFAULT '',
  provider_email TEXT NOT NULL DEFAULT '',
  start_at TEXT NOT NULL,
  end_at TEXT NOT NULL,
  event_id TEXT NOT NULL DEFAULT '',
  ical_uid TEXT NOT NULL DEFAULT '',
  calendar_id TEXT NOT NULL DEFAULT '',
  gclid TEXT NOT NULL DEFAULT '',
  fbclid TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT 'website',
  status TEXT NOT NULL DEFAULT 'created',
  error_detail TEXT
);
CREATE INDEX IF NOT EXISTS idx_csb_bookings_provider_slot ON csb_bookings(provider_key, start_at);
CREATE INDEX IF NOT EXISTS idx_csb_bookings_email_slot ON csb_bookings(email, start_at);

CREATE TABLE IF NOT EXISTS csb_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
`);

// Lightweight migration for DB files created before service/company/budget existed.
// SQLite has no "ADD COLUMN IF NOT EXISTS" -- ALTER then swallow the "duplicate column" error.
for (const col of ["service", "company", "budget"]) {
	try {
		db.exec(`ALTER TABLE csb_bookings ADD COLUMN ${col} TEXT NOT NULL DEFAULT ''`);
	} catch (err) {
		if (!(err instanceof Error) || !err.message.includes("duplicate column")) throw err;
	}
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

export const sqliteStore: CsbStore = {
	async getAccounts(enabledOnly = false) {
		const rows = enabledOnly
			? db.prepare("SELECT * FROM csb_accounts WHERE enabled = 1").all()
			: db.prepare("SELECT * FROM csb_accounts").all();
		return rows.map(rowToAccount);
	},

	async getAccount(key) {
		const row = db.prepare("SELECT * FROM csb_accounts WHERE key = ?").get(key);
		return row ? rowToAccount(row) : null;
	},

	async saveAccount(account) {
		db.prepare(
			`INSERT INTO csb_accounts (key, email, label, refresh_token_encrypted, calendar_id, enabled, slot_minutes, hours_json, auth_error_at)
       VALUES (@key, @email, @label, @refreshTokenEncrypted, @calendarId, @enabled, @slotMinutes, @hoursJson, @authErrorAt)
       ON CONFLICT(key) DO UPDATE SET
         email = excluded.email,
         label = excluded.label,
         refresh_token_encrypted = excluded.refresh_token_encrypted,
         calendar_id = excluded.calendar_id,
         enabled = excluded.enabled,
         slot_minutes = excluded.slot_minutes,
         hours_json = excluded.hours_json,
         auth_error_at = excluded.auth_error_at`,
		).run({
			key: account.key,
			email: account.email,
			label: account.label,
			refreshTokenEncrypted: account.refreshTokenEncrypted,
			calendarId: account.calendarId,
			enabled: account.enabled ? 1 : 0,
			slotMinutes: account.slotMinutes,
			hoursJson: JSON.stringify(account.hours),
			authErrorAt: account.authErrorAt ?? null,
		});
	},

	async insertBooking(row: NewCsbBooking) {
		const info = db
			.prepare(
				`INSERT INTO csb_bookings (created_at, customer_name, phone, email, service, company, budget, provider_key, provider_email, start_at, end_at, gclid, fbclid, status)
         VALUES (@createdAt, @customerName, @phone, @email, @service, @company, @budget, @providerKey, @providerEmail, @startAt, @endAt, @gclid, @fbclid, 'pending')`,
			)
			.run({ ...row, createdAt: new Date().toISOString() });
		return Number(info.lastInsertRowid);
	},

	async updateBooking(id, patch) {
		const sets: string[] = [];
		const params: Record<string, unknown> = { id };
		for (const [k, v] of Object.entries(patch)) {
			const col = BOOKING_COLUMN_MAP[k];
			if (!col) continue;
			sets.push(`${col} = @${k}`);
			params[k] = v;
		}
		if (!sets.length) return;
		db.prepare(`UPDATE csb_bookings SET ${sets.join(", ")} WHERE id = @id`).run(params);
	},

	async findDuplicateBooking(email, providerKey, startAt) {
		const row = db
			.prepare(
				`SELECT id FROM csb_bookings WHERE email = ? AND provider_key = ? AND start_at = ? AND status = 'created'`,
			)
			.get(email, providerKey, startAt);
		return !!row;
	},

	async listBookings(limit) {
		const rows = db
			.prepare("SELECT * FROM csb_bookings ORDER BY id DESC LIMIT ?")
			.all(limit);
		return rows.map(rowToBooking);
	},

	async getSetting(key, defaultValue) {
		const row = db.prepare("SELECT value FROM csb_settings WHERE key = ?").get(key) as
			| { value: string }
			| undefined;
		return row ? row.value : defaultValue;
	},

	async setSetting(key, value) {
		db.prepare(
			`INSERT INTO csb_settings (key, value) VALUES (?, ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
		).run(key, value);
	},
};
