// Pure account logic ported from class-csb-accounts.php. Storage lives behind CsbStore;
// this module never touches SQL.

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

/** Display-safe provider list for the widget. Never exposes emails or tokens. */
export async function publicProviders() {
	const accounts = await store.getAccounts(true);
	return accounts.map((a) => ({
		key: a.key,
		label: a.label,
		slot_minutes: a.slotMinutes,
	}));
}
