// Live diagnostic ported from CSB_Admin::test_connection(): refresh the token, hit
// freebusy, confirm the booking calendar exists, compute this month's slots.

import type { CsbAccount } from "./store";
import { accessToken, ensureBookingCalendar, freebusy, CsbApiError } from "./google-client";
import { slotsForMonth } from "./availability";
import { toRfc3339, currentYearMonthInTz } from "./datetime";

export type DiagnosticStep = [label: string, pass: boolean, detail: string];
export interface DiagnosticResult {
	email: string;
	steps: DiagnosticStep[];
}

function msg(err: unknown): string {
	return err instanceof CsbApiError ? err.message : String(err);
}

export async function testConnection(account: CsbAccount): Promise<DiagnosticResult> {
	const steps: DiagnosticStep[] = [];

	try {
		await accessToken(account);
		steps.push(["Token refresh", true, "ok"]);
	} catch (err) {
		steps.push(["Token refresh", false, msg(err)]);
		return { email: account.email, steps };
	}

	let calendarId: string;
	try {
		calendarId = await ensureBookingCalendar(account);
		steps.push(["Booking calendar", true, calendarId]);
	} catch (err) {
		steps.push(["Booking calendar", false, msg(err)]);
		return { email: account.email, steps };
	}

	const now = new Date();
	const weekOut = new Date(now.getTime() + 7 * 86_400_000);
	try {
		const fb = await freebusy(account, toRfc3339(now), toRfc3339(weekOut), [
			"primary",
			calendarId,
		]);
		let count = 0;
		for (const cal of Object.values(fb?.calendars ?? {}) as any[]) {
			count += cal?.busy?.length ?? 0;
		}
		steps.push(["Free/busy read", true, `${count} busy block(s) in next 7 days`]);
	} catch (err) {
		steps.push(["Free/busy read", false, msg(err)]);
	}

	try {
		const { year, month } = currentYearMonthInTz();
		const slots = await slotsForMonth(account, year, month);
		const total = Object.values(slots).reduce((sum, day) => sum + day.length, 0);
		steps.push([
			"Slot computation",
			true,
			`${total} open slot(s) across ${Object.keys(slots).length} day(s) this month`,
		]);
	} catch (err) {
		steps.push(["Slot computation", false, msg(err)]);
	}

	return { email: account.email, steps };
}
