import type { APIRoute } from "astro";
import { store, type CsbBookingRow } from "../../../../lib/csb/store";

const COLUMNS: (keyof CsbBookingRow)[] = [
	"id",
	"createdAt",
	"customerName",
	"phone",
	"email",
	"service",
	"company",
	"budget",
	"providerKey",
	"providerEmail",
	"startAt",
	"endAt",
	"eventId",
	"icalUid",
	"calendarId",
	"gclid",
	"fbclid",
	"source",
	"status",
	"errorDetail",
];

function csvCell(value: unknown): string {
	const s = value === null || value === undefined ? "" : String(value);
	return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export const GET: APIRoute = async () => {
	const rows = await store.listBookings(1_000_000);
	const lines = [COLUMNS.join(",")];
	for (const r of rows) lines.push(COLUMNS.map((c) => csvCell(r[c])).join(","));

	return new Response(lines.join("\n"), {
		status: 200,
		headers: {
			"Content-Type": "text/csv",
			"Content-Disposition": "attachment; filename=creekside-bookings.csv",
		},
	});
};
