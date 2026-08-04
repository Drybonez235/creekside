// Slot computation: working hours minus Google free/busy blocks (FR-11), stepped by the
// provider's slot duration. 60s in-memory cache (NFR-8). Ported from
// class-csb-availability.php — see lib/csb/datetime.ts for why the DST-safe conversions
// are structured the way they are.

import { store, type CsbAccount } from "./store";
import { freebusy } from "./google-client";
import {
	daysInMonth,
	dateStr,
	pad2,
	wallClockToInstant,
	weekdayKey,
	toRfc3339,
} from "./datetime";

type BusyRange = [Date, Date];

function hmToMinutes(hm: string): number {
	const [h, m] = hm.split(":").map(Number);
	return h * 60 + m;
}

function minutesToHm(mins: number): string {
	return `${pad2(Math.floor(mins / 60))}:${pad2(mins % 60)}`;
}

function overlaps(s: Date, e: Date, busy: BusyRange[]): boolean {
	return busy.some(([bs, be]) => s < be && e > bs);
}

function calendarIdsFor(account: CsbAccount): string[] {
	return ["primary", account.calendarId].filter((id): id is string => !!id);
}

/** ['2026-08-03' => ['09:00','09:30',...], ...] */
type MonthSlots = Record<string, string[]>;

const monthCache = new Map<string, { data: MonthSlots; expiresAt: number }>();
const CACHE_TTL_MS = 60_000;

export async function slotsForMonth(
	account: CsbAccount,
	year: number,
	month: number,
): Promise<MonthSlots> {
	const cacheKey = `${account.key}_${year}_${pad2(month)}`;
	const cached = monthCache.get(cacheKey);
	if (cached && cached.expiresAt > Date.now()) return cached.data;

	const now = new Date();
	const numDays = daysInMonth(year, month);
	const firstInstant = wallClockToInstant(dateStr(year, month, 1), "00:00");
	const lastInstant = wallClockToInstant(dateStr(year, month, numDays), "23:59");
	if (lastInstant < now) return {};

	// Busy blocks across the account's primary + booking calendar.
	const calIds = calendarIdsFor(account);
	const fb = await freebusy(account, toRfc3339(firstInstant), toRfc3339(lastInstant), calIds);

	const busy: BusyRange[] = [];
	for (const cal of Object.values(fb?.calendars ?? {}) as any[]) {
		for (const b of cal?.busy ?? []) {
			busy.push([new Date(b.start), new Date(b.end)]);
		}
	}

	const slotMin = Math.max(5, account.slotMinutes);
	const leadMinutes = Number(await store.getSetting("lead_minutes", "60"));
	const windowDays = Number(await store.getSetting("window_days", "42"));
	const earliestInstant = new Date(now.getTime() + leadMinutes * 60_000);
	const horizonInstant = new Date(now.getTime() + windowDays * 86_400_000);

	const out: MonthSlots = {};

	for (let day = 1; day <= numDays; day++) {
		const dStr = dateStr(year, month, day);
		const dow = weekdayKey(year, month, day);
		const [open, close] = account.hours[dow] ?? [];
		if (!open || !close) continue;

		const dayStartInstant = wallClockToInstant(dStr, "00:00");
		if (dayStartInstant > horizonInstant) continue;

		const openMin = hmToMinutes(open);
		const closeMin = hmToMinutes(close);
		const slots: string[] = [];

		for (let s = openMin; s + slotMin <= closeMin; s += slotMin) {
			const startHm = minutesToHm(s);
			const endHm = minutesToHm(s + slotMin);
			const startInstant = wallClockToInstant(dStr, startHm);
			const endInstant = wallClockToInstant(dStr, endHm);
			if (startInstant < earliestInstant) continue;
			if (!overlaps(startInstant, endInstant, busy)) slots.push(startHm);
		}
		if (slots.length) out[dStr] = slots;
	}

	monthCache.set(cacheKey, { data: out, expiresAt: Date.now() + CACHE_TTL_MS });
	return out;
}

/** FR-14 pre-create re-check: fresh freebusy for exactly this slot. Never cached
 * (invariant #6 — this is the only real double-booking defense). */
export async function slotIsFree(
	account: CsbAccount,
	start: Date,
	end: Date,
): Promise<boolean> {
	const calIds = calendarIdsFor(account);
	const fb = await freebusy(account, toRfc3339(start), toRfc3339(end), calIds);
	for (const cal of Object.values(fb?.calendars ?? {}) as any[]) {
		if (cal?.busy?.length) return false;
	}
	return true;
}
