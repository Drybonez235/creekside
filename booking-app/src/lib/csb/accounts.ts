// Pure account logic ported from class-csb-accounts.php. Storage lives behind CsbStore;
// this module never touches SQL.

import crypto from "node:crypto";
import { store } from "./store";
import type { WeeklyHours } from "./store";

export function keyForEmail(email: string): string {
	const swapped = email.toLowerCase().replace(/[@.]/g, "_");
	return swapped.replace(/[^a-z0-9_-]/g, "");
}

export function defaultHours(): WeeklyHours {
	return {
		mon: ["09:00", "17:00"],
		tue: ["09:00", "17:00"],
		wed: ["09:00", "17:00"],
		thu: ["09:00", "17:00"],
		fri: ["09:00", "17:00"],
		sat: [],
		sun: [],
	};
}

/* ---- refresh token encryption (AES-256-CBC keyed off CSB_ENCRYPTION_KEY) ---- */

function cryptKey(): Buffer {
	const secret = import.meta.env.CSB_ENCRYPTION_KEY || process.env.CSB_ENCRYPTION_KEY;
	if (!secret) {
		throw new Error(
			"CSB_ENCRYPTION_KEY is not set — refusing to encrypt/decrypt refresh tokens.",
		);
	}
	return crypto.createHash("sha256").update(secret).digest();
}

export function encrypt(plain: string): string {
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv("aes-256-cbc", cryptKey(), iv);
	const ct = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
	return Buffer.concat([iv, ct]).toString("base64");
}

export function decrypt(stored: string): string {
	try {
		const raw = Buffer.from(stored, "base64");
		if (raw.length < 17) return "";
		const iv = raw.subarray(0, 16);
		const ct = raw.subarray(16);
		const decipher = crypto.createDecipheriv("aes-256-cbc", cryptKey(), iv);
		return Buffer.concat([decipher.update(ct), decipher.final()]).toString("utf8");
	} catch {
		return "";
	}
}

/** Display-safe provider list for the widget. Never exposes emails or tokens. */
export async function publicProviders() {
	const accounts = await store.getAccounts(true);
	return accounts.map((a) => ({
		key: a.key,
		label: a.label,
		slot_minutes: a.slotMinutes,
	}));
}
