import type { APIRoute } from "astro";
import { store } from "../../../lib/csb/store";
import { slotsForMonth } from "../../../lib/csb/availability";
import { errorResponse, jsonResponse } from "../../../lib/csb/http";

export const GET: APIRoute = async ({ url }) => {
	const providerKey = (url.searchParams.get("provider") || "").trim();
	const year = Number(url.searchParams.get("year"));
	const month = Number(url.searchParams.get("month"));

	const account = await store.getAccount(providerKey);
	if (!account || !account.enabled || year < 2026 || month < 1 || month > 12) {
		return errorResponse("csb_bad_request", "Invalid provider or month", 400);
	}

	try {
		const slots = await slotsForMonth(account, year, month);
		return jsonResponse({ slots, slot_minutes: account.slotMinutes });
	} catch {
		return errorResponse("csb_unavailable", "Calendar unavailable", 503); // NFR-5
	}
};
