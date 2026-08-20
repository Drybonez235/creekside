// Live diagnostic for the admin page: mint a delegated token, read free/busy, and compute
// this month's slots. Under service-account auth the first step is the one that matters --
// it proves the Admin console delegation actually covers this user and these scopes, which
// is where every realistic misconfiguration shows up.

import type { CsbAccount } from "./store";
import { freebusy, CsbApiError } from "./google-client";
import { accessTokenFor } from "./service-account";
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
		await accessTokenFor(account.email);
		steps.push(["Delegated token", true, `impersonating ${account.email}`]);
	} catch (err) {
		// No point continuing: every later step needs this token, and the error text from
		// service-account.ts already names the likely fix.
		steps.push(["Delegated token", false, msg(err)]);
		return { email: account.email, steps };
	}

	const now = new Date();
	const weekOut = new Date(now.getTime() + 7 * 86_400_000);
	try {
		const fb = await freebusy(account, toRfc3339(now), toRfc3339(weekOut), ["primary"]);
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
