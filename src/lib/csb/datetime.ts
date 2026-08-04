// DST-safe datetime helpers for CSB_TZ (America/Chicago). Deliberately avoids any Date
// getter that depends on the *system* clock's timezone (getHours/getDay/etc. on a
// date-fns-tz "zoned" Date) — those are the naive-local-vs-UTC bugs the spec calls out
// (D-6/D-7). Everything here is either a pure calendar computation (independent of any
// timezone) or an explicit fromZonedTime/formatInTimeZone conversion.

import { fromZonedTime, formatInTimeZone } from "date-fns-tz";
import { CSB_TZ } from "./constants";

const DOW = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;
export type DowKey = (typeof DOW)[number];

export function pad2(n: number): string {
	return String(n).padStart(2, "0");
}

/** Wall-clock 'YYYY-MM-DD' + 'HH:MM' in CSB_TZ -> the real UTC instant. */
export function wallClockToInstant(dateStr: string, timeStr: string): Date {
	return fromZonedTime(`${dateStr} ${timeStr}:00`, CSB_TZ);
}

/** RFC3339 for the Calendar API (Google accepts the 'Z' UTC suffix as a valid offset). */
export function toRfc3339(instant: Date): string {
	return instant.toISOString();
}

/** Number of days in a calendar month (month is 1-12) — pure calendar math, no tz. */
export function daysInMonth(year: number, month: number): number {
	return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/** Day-of-week for a calendar date — pure calendar math, independent of any timezone. */
export function weekdayKey(year: number, month: number, day: number): DowKey {
	return DOW[new Date(Date.UTC(year, month - 1, day)).getUTCDay()];
}

/** 'YYYY-MM-DD' for the given calendar date. */
export function dateStr(year: number, month: number, day: number): string {
	return `${year}-${pad2(month)}-${pad2(day)}`;
}

/** Wall-clock 'HH:MM' in CSB_TZ for a real instant (for display / cache-key purposes only). */
export function formatWallClockHM(instant: Date): string {
	return formatInTimeZone(instant, CSB_TZ, "HH:mm");
}

/** Wall-clock 'YYYY-MM-DD HH:mm:ss' in CSB_TZ for a real instant — the format stored in
 * csb_bookings.start_at/end_at. */
export function formatWallClockDateTime(instant: Date): string {
	return formatInTimeZone(instant, CSB_TZ, "yyyy-MM-dd HH:mm:ss");
}
