import type { APIRoute } from "astro";
import { store, type CsbBookingRow } from "../../../../lib/csb/store";

export const prerender = false;

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

// CSV/formula injection (CWE-1236): several of these columns (customerName, company,
// service, etc.) are customer-controlled free text from the public booking form. If a value
// starts with =, +, -, or @, Excel/Sheets treats it as a formula when the export is opened --
// a malicious booking could embed something like `=HYPERLINK(...)` that runs when Peterson
// or Cade opens the CSV. Prefixing with a bare quote is the standard defense: it forces
// spreadsheet apps to treat the cell as text, and is itself stripped by the app on display.
function csvCell(value: unknown): string {
	let s = value === null || value === undefined ? "" : String(value);
	if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
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
