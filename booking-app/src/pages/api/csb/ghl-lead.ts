import type { APIRoute } from "astro";
import { clientIp, jsonResponse, errorResponse } from "../../../lib/csb/http";

export const prerender = false;

const GHL_BASE = "https://services.leadconnectorhq.com";

// Rate limit: 10 attempts / 10 min / IP
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 10;
const hits = new Map<string, number[]>();

function rateLimited(ip: string | null): boolean {
	const key = ip || "__unknown__";
	const now = Date.now();
	const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
	recent.push(now);
	hits.set(key, recent);
	if (hits.size > 5000) {
		for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
	}
	return recent.length > MAX_PER_WINDOW;
}

const FIELD = {
	gclid: "s3ZCC2LPZvzRXhAU1u4s",
	fbclid: "BCYYjPSCGTbaE5tOwrrG",
	revenueTier: "2YxfHRSvcpcWRpxi7E9H",
	adManagement: "i0GLSNsbkFsVPwIACkuV",
	websiteUrl: "sJC2QR9zDZO9W5Wk99bg",
	industry: "ggI4eGEFCPLELB70CC1d",
	contactSource: "hGxdzIMVBBWzzu4YXmiV",
	referredTo: "BMj2Ojl2VqWNfQbZHfTa",
	qualificationStatus: "xhUUMIBvVwCxsa1QLJl9",
	practiceType: "smPYLLroB0Jc93cQhN0W",
	servicesInterestedIn: "z3nl3LICChritVPVmvdE",
	biggestChallenge: "K3yzGXYS4prEDYQeCJwj",
	decisionMaker: "YVOE5D7V6RpjK1FCRlsu",
	usesCrm: "tmxxbdooxNWoDLgfJE1c",
	utmSource: "arHD6CEDVUcc49EH2G3s",
	utmMedium: "uZ25qk7BzAjHMKagWM1V",
	utmCampaign: "zh3UaWthUTi60O2Ri7Kb",
	utmContent: "rMVj669BH2EF1Vjw7WU4",
	utmTerm: "NSaf4c3Xnlh9nkOjxmcx",
	// Reverse mortgage funnel (2026-10-14)
	nmlsId: "6Mv5Mpscx9PtGnSKw03j",
	licensedRmLo: "wCdgoLBngDQGiUJNss9Y",
	monthlyRmDeals: "9Bb8EYBUn8f3cRg7M9An",
	hasTeam: "AmPXeyyT3wW3OKNycTeu",
	marketingBudget: "2Y8J1EjdI3SFpvi2lReX",
} as const;

const REVENUE_MAP: Record<string, string> = {
	// Dental funnel tiers
	"under50k": "Under $50K",
	"50k-100k": "$50K - $100K",
	"100k-250k": "$100K - $250K",
	"250k-500k": "$250K - $500K",
	"500k+": "$500K+",
	// Site funnel tiers
	"pre-revenue": "Pre-Revenue",
	"under-40k": "Under $40K",
	"40k-100k": "$40K - $100K",
	"100k-500k": "$100K - $500K",
};

const AD_SPEND_MAP: Record<string, string> = {
	// Site funnel tiers
	"under-3k": "Under $3K/mo",
	"3k-5k": "$3K - $5K/mo",
	"5k-15k": "$5K - $15K/mo",
	"15k+": "$15K+/mo",
	// Dental expert form tiers (2026-09-03)
	"none": "Not Spending On Ads Yet",
	"under-10k": "Under $10K/mo",
	"10k-30k": "$10K - $30K/mo",
	"30k-100k": "$30K - $100K/mo",
	"100k+": "$100K+/mo",
};

const BUSINESS_TYPE_MAP: Record<string, string> = {
	"ecommerce": "E-commerce",
	"local-service": "Local / Service Business",
	"b2b": "B2B / Lead Gen",
};

const AD_MGMT_MAP: Record<string, string> = {
	"agency": "Agency",
	"in-house": "In-House",
	"freelancer": "Freelancer",
	"want-to-start": "Want to Start",
	"not-sure": "Not Sure",
};

const PRACTICE_TYPE_MAP: Record<string, string> = {
	// Legacy dental form values
	"yes-both": "Cosmetic + General Dentistry",
	"yes-cosmetic": "Cosmetic Only",
	"general": "Primarily General Dentistry",
	// 2026-09-03 form: "Do you own a dental practice?" yes/no
	"yes": "Yes - Practice Owner",
	"no": "No",
};

const CRM_MAP: Record<string, string> = {
	"yes": "Yes",
	"no": "No",
};

const SERVICES_MAP: Record<string, string> = {
	"veneers": "Veneers & Smile Makeovers",
	"implants": "Dental Implants & All-on-4",
	"invisalign": "Invisalign / Clear Aligners",
	"whitening": "Teeth Whitening",
	"multiple": "Multiple / All of the Above",
};

const CHALLENGE_MAP: Record<string, string> = {
	"not-enough-patients": "Not Enough New Patients",
	"high-cpl": "Ad Costs Too High",
	"low-conversion": "Leads Don't Convert to Appointments",
	"no-visibility": "No Online Visibility",
	"wrong-patients": "Attracting Wrong Type of Patients",
	"scale": "Ready to Scale",
};

const DECISION_MAKER_MAP: Record<string, string> = {
	"owner": "Practice Owner",
	"marketing-director": "Marketing Director",
	"no": "Someone Else",
};

// Reverse mortgage funnel maps (2026-10-14)
const RM_DEALS_MAP: Record<string, string> = {
	"0": "None yet",
	"1-2": "1-2 per month",
	"3-5": "3-5 per month",
	"6+": "6+ per month",
};

const RM_BUDGET_MAP: Record<string, string> = {
	"under-1500": "Under $1,500/mo",
	"1500-3k": "$1,500 - $3,000/mo",
	"3k-5k": "$3,000 - $5,000/mo",
	"5k-10k": "$5,000 - $10,000/mo",
	"10k+": "$10,000+/mo",
};

const YES_NO_MAP: Record<string, string> = {
	"yes": "Yes",
	"no": "No",
};

function splitName(full: string): { firstName: string; lastName: string } {
	const parts = full.trim().split(/\s+/);
	if (parts.length === 1) return { firstName: parts[0], lastName: "" };
	return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

export const POST: APIRoute = async ({ request }) => {
	const ip = clientIp(request);
	if (rateLimited(ip)) return errorResponse("ghl_rate", "Too many attempts", 429);

	const apiKey = import.meta.env.GHL_API_KEY;
	const locationId = import.meta.env.GHL_LOCATION_ID;
	if (!apiKey || !locationId) {
		console.error("[ghl-lead] GHL_API_KEY or GHL_LOCATION_ID not configured");
		return errorResponse("ghl_not_configured", "CRM integration not configured", 500);
	}

	let p: Record<string, unknown>;
	try {
		p = await request.json();
	} catch {
		return errorResponse("ghl_bad_request", "Invalid JSON", 400);
	}

	const name = typeof p.name === "string" ? p.name.trim() : "";
	const email = typeof p.email === "string" ? p.email.trim() : "";
	const phone = typeof p.phone === "string" ? p.phone.trim() : "";

	if (!name || !email) {
		return errorResponse("ghl_missing_fields", "Name and email required", 400);
	}

	const { firstName, lastName } = splitName(name);

	// funnel: "site" for the general /start/ funnel, "reverse-mortgage" for the
	// RM loan officer funnel; absent/anything else = dental (original behavior)
	const isSite = p.funnel === "site";
	const isRm = p.funnel === "reverse-mortgage";
	const route = typeof p.route === "string" ? p.route : "";
	const revenue = typeof p.monthly_revenue === "string" ? p.monthly_revenue : "";
	const businessType = typeof p.business_type === "string" ? p.business_type : "";
	const adSpend = typeof p.ad_spend === "string" ? p.ad_spend : "";
	const adMgmt = typeof p.running_ads === "string" ? p.running_ads : "";
	const website = typeof p.website === "string" ? p.website.trim() : "";
	const practiceType = typeof p.practice_type === "string" ? p.practice_type : "";
	const services = typeof p.services === "string" ? p.services : "";
	const challenge = typeof p.challenge === "string" ? p.challenge : "";
	const decisionMaker = typeof p.decision_maker === "string" ? p.decision_maker : "";
	const crm = typeof p.crm === "string" ? p.crm : "";
	// Reverse mortgage funnel fields
	const licensedLo = typeof p.licensed_lo === "string" ? p.licensed_lo : "";
	const monthlyDeals = typeof p.monthly_deals === "string" ? p.monthly_deals : "";
	const hasTeam = typeof p.has_team === "string" ? p.has_team : "";
	const marketingBudget = typeof p.marketing_budget === "string" ? p.marketing_budget : "";
	const nmlsId = typeof p.nmls_id === "string" ? p.nmls_id.trim() : "";
	const company = typeof p.company === "string" ? p.company.trim() : "";
	const variant = typeof p.variant === "string" ? p.variant : "";
	// stage: "booked" = calendar-first funnel lead that booked a call but has
	// not answered the qualifying questions yet. Anything else (including
	// absent) = fully qualified submission (original behavior).
	const stage = typeof p.stage === "string" ? p.stage : "";
	const isBookedStage = stage === "booked";
	const gclid = typeof p.gclid === "string" ? p.gclid : "";
	const fbclid = typeof p.fbclid === "string" ? p.fbclid : "";
	const utmSource = typeof p.utm_source === "string" ? p.utm_source : "";
	const utmMedium = typeof p.utm_medium === "string" ? p.utm_medium : "";
	const utmCampaign = typeof p.utm_campaign === "string" ? p.utm_campaign : "";
	const utmContent = typeof p.utm_content === "string" ? p.utm_content : "";
	const utmTerm = typeof p.utm_term === "string" ? p.utm_term : "";

	// Determine contact source from click IDs
	let contactSource = "Organic Website Traffic";
	if (fbclid) contactSource = "Facebook Ads";
	else if (gclid) contactSource = "Google Ads";

	// RM funnel: qualified = licensed reverse mortgage LO. Others: original route logic.
	const isQualified = isRm ? licensedLo !== "no" : route !== "keith";
	const qualStatus = isBookedStage ? "Pending" : isQualified ? "Qualified" : "Under Threshold";

	const funnelTag = isRm ? "rm" : isSite ? "site" : "dental";
	const directTag = isRm ? "peterson-direct" : "cade-direct";
	const tags = [`${funnelTag}-funnel`];
	if (isBookedStage) {
		// Calendar-first funnel: call is booked but qualifying questions are
		// not answered yet. Tag for Cyndi/Cade review; the qualified/under-
		// threshold tags get applied by the follow-up stage="qualified" call.
		tags.push(`${funnelTag}-needs-qualification`, directTag);
	} else if (isQualified) {
		tags.push(`${funnelTag}-qualified`, directTag);
	} else {
		// Keith partner routing removed 2026-08-27 -- under-threshold leads
		// keep the tier tag for context but book like everyone else.
		tags.push(`${funnelTag}-under-threshold`, directTag);
	}
	// Form-variant tag (additive -- the base funnel tags above still drive
	// the GHL workflow / opportunity creation)
	if (variant === "expert") tags.push("dental-expert-form");
	if (variant === "call") tags.push("dental-call-form");

	const customFields: { id: string; value: string }[] = [];
	const addField = (id: string, val: string) => {
		if (val) customFields.push({ id, value: val });
	};

	addField(FIELD.gclid, gclid);
	addField(FIELD.fbclid, fbclid);
	addField(FIELD.revenueTier, REVENUE_MAP[revenue] || revenue);
	addField(FIELD.adManagement, AD_MGMT_MAP[adMgmt] || adMgmt);
	addField(FIELD.websiteUrl, website);
	addField(FIELD.industry, isRm ? "Reverse Mortgage" : isSite ? (BUSINESS_TYPE_MAP[businessType] || businessType || "General") : "Dental");
	addField(FIELD.contactSource, contactSource);
	addField(FIELD.referredTo, isRm ? "Peterson" : isQualified ? "Cade" : "Brady");
	addField(FIELD.qualificationStatus, qualStatus);
	addField(FIELD.practiceType, PRACTICE_TYPE_MAP[practiceType] || practiceType);
	addField(FIELD.servicesInterestedIn, SERVICES_MAP[services] || services);
	addField(FIELD.biggestChallenge, CHALLENGE_MAP[challenge] || challenge);
	addField(FIELD.decisionMaker, DECISION_MAKER_MAP[decisionMaker] || decisionMaker);
	addField(FIELD.usesCrm, CRM_MAP[crm] || crm);
	addField(FIELD.nmlsId, nmlsId);
	addField(FIELD.licensedRmLo, YES_NO_MAP[licensedLo] || licensedLo);
	addField(FIELD.monthlyRmDeals, RM_DEALS_MAP[monthlyDeals] || monthlyDeals);
	addField(FIELD.hasTeam, YES_NO_MAP[hasTeam] || hasTeam);
	addField(FIELD.marketingBudget, RM_BUDGET_MAP[marketingBudget] || marketingBudget);
	addField(FIELD.utmSource, utmSource);
	addField(FIELD.utmMedium, utmMedium);
	addField(FIELD.utmCampaign, utmCampaign);
	addField(FIELD.utmContent, utmContent);
	addField(FIELD.utmTerm, utmTerm);

	// Fields that don't have dedicated custom fields go into notes
	const noteLines: string[] = [];
	if (isSite && businessType) noteLines.push(`Business Type: ${BUSINESS_TYPE_MAP[businessType] || businessType}`);
	if (adSpend) noteLines.push(`Ad Budget: ${AD_SPEND_MAP[adSpend] || adSpend}`);
	const funnelLabel = isRm ? "Reverse Mortgage Funnel" : isSite ? "Website Funnel" : "Dental Funnel";
	const notes = noteLines.length ? `[${funnelLabel}]\n${noteLines.join("\n")}` : "";

	// GHL contacts API does NOT accept "notes" on the create payload (returns 422).
	// Notes must be added via a separate POST /contacts/{id}/notes call after creation.
	const contactBody: Record<string, unknown> = { locationId, firstName, lastName, email, phone, tags, customFields };
	if (company) contactBody.companyName = company;

	const ghlHeaders = {
		"Authorization": `Bearer ${apiKey}`,
		"Version": "2021-07-28",
		"Content-Type": "application/json",
	};

	try {
		// 1. Create or merge contact
		const res = await fetch(`${GHL_BASE}/contacts/`, {
			method: "POST",
			headers: ghlHeaders,
			body: JSON.stringify(contactBody),
		});

		let contactId: string | null = null;

		if (res.ok) {
			const data = await res.json();
			contactId = data.contact?.id || null;
		} else if (res.status === 400) {
			// GHL returns 400 when the EMAIL OR PHONE matches an existing contact.
			// Resolve the existing contact and apply the new tags + custom fields
			// to it -- otherwise returning contacts never get the funnel tags,
			// the GHL workflow doesn't fire, and the orchestrator can't see them.

			// GHL's duplicate error usually includes the matching contact ID
			const dupBody = (await res.json().catch(() => ({}))) as {
				meta?: { contactId?: string };
			};
			contactId = dupBody?.meta?.contactId || null;

			// Fallback: duplicate search by email, then by phone (GHL matches
			// duplicates on either field, so an email-only lookup misses
			// phone-matched duplicates and drops the lead)
			if (!contactId) {
				const lookupParams = [`email=${encodeURIComponent(email)}`];
				if (phone) lookupParams.push(`number=${encodeURIComponent(phone)}`);
				for (const param of lookupParams) {
					try {
						const lookupRes = await fetch(
							`${GHL_BASE}/contacts/search/duplicate?locationId=${locationId}&${param}`,
							{ method: "GET", headers: ghlHeaders },
						);
						if (lookupRes.ok) {
							const lookupData = await lookupRes.json();
							if (lookupData.contact?.id) {
								contactId = lookupData.contact.id;
								break;
							}
						}
					} catch {
						// Lookup failed -- try next param
					}
				}
			}

			if (contactId) {
				// Update the existing contact with the funnel tags + custom
				// fields. PUT replaces the whole tag set, so merge with the
				// contact's current tags. Only tags + custom fields are
				// written -- never overwrite the existing contact's
				// name/email/phone with form input.
				try {
					let mergedTags = tags;
					const getRes = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
						method: "GET",
						headers: ghlHeaders,
					});
					if (getRes.ok) {
						const existing = (await getRes.json())?.contact;
						if (Array.isArray(existing?.tags)) {
							mergedTags = [...new Set([...existing.tags, ...tags])];
						}
					}
					// Once the qualifying questions come in, clear the pending
					// needs-qualification tag left by the stage="booked" call.
					if (!isBookedStage) {
						mergedTags = mergedTags.filter((t) => t !== `${funnelTag}-needs-qualification`);
					}
					const updateRes = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
						method: "PUT",
						headers: ghlHeaders,
						body: JSON.stringify({ tags: mergedTags, customFields }),
					});
					if (!updateRes.ok) {
						const errText = await updateRes.text().catch(() => "");
						console.error(`[ghl-lead] Duplicate-contact update failed ${updateRes.status}:`, errText);
					}
				} catch (updateErr) {
					console.error("[ghl-lead] Duplicate-contact update error:", updateErr);
				}
			} else {
				console.error(`[ghl-lead] Duplicate 400 but no existing contact found for email/phone -- lead dropped (email: ${email})`);
			}
		} else {
			const errText = await res.text().catch(() => "");
			console.error(`[ghl-lead] GHL API error ${res.status}:`, errText);
			return errorResponse("ghl_api_error", "CRM sync failed", 500);
		}

		// 1b. Add notes to contact via separate endpoint (if any)
		if (contactId && notes) {
			try {
				await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
					method: "POST",
					headers: ghlHeaders,
					body: JSON.stringify({ body: notes }),
				});
			} catch (noteErr) {
				console.error("[ghl-lead] Contact notes call failed:", noteErr);
			}
		}

		// Opportunity creation is handled by GHL workflow (triggers on dental-funnel tag)

		// 2. Create ClickUp lead (fire-and-forget -- don't block the response)
		createClickUpLead({
			name,
			phone,
			email,
			website,
			funnel: funnelTag,
			qualificationStatus: qualStatus,
			contactSource,
			route,
			revenue: REVENUE_MAP[revenue] || revenue,
			adSpend: AD_SPEND_MAP[adSpend] || adSpend,
			challenge: CHALLENGE_MAP[challenge] || challenge,
			businessType: BUSINESS_TYPE_MAP[businessType] || businessType,
			decisionMaker: DECISION_MAKER_MAP[decisionMaker] || decisionMaker,
			adMgmt: AD_MGMT_MAP[adMgmt] || adMgmt,
			practiceType: PRACTICE_TYPE_MAP[practiceType] || practiceType,
			licensedLo: YES_NO_MAP[licensedLo] || licensedLo,
			monthlyDeals: RM_DEALS_MAP[monthlyDeals] || monthlyDeals,
			marketingBudget: RM_BUDGET_MAP[marketingBudget] || marketingBudget,
			utmSource,
			utmCampaign,
		}).catch((err) => {
			console.error("[ghl-lead] ClickUp lead creation failed:", err);
		});

		// 3. Form submission alert (fire-and-forget -- don't block the response)
		sendFormAlert({
			name,
			phone,
			email,
			funnel: funnelTag,
			qualificationStatus: qualStatus,
			revenue: REVENUE_MAP[revenue] || revenue,
			challenge: CHALLENGE_MAP[challenge] || challenge,
			source: contactSource,
			campaign: utmCampaign,
		}).catch((err) => {
			console.error("[ghl-lead] form alert webhook failed:", err);
		});

		return jsonResponse({ ok: true, contactId });
	} catch (err) {
		console.error("[ghl-lead] Network error:", err);
		return errorResponse("ghl_network_error", "CRM sync failed", 500);
	}
};

/** Notify the team of a new form submission via the booking-alert edge function.
 * Same endpoint as booking alerts but with alertType: "form_submission" so the
 * message format is different (no appointment details, "call them now" nudge). */
async function sendFormAlert(payload: {
	name: string;
	phone: string;
	email: string;
	funnel: string;
	qualificationStatus: string;
	revenue: string;
	challenge: string;
	source: string;
	campaign: string;
}): Promise<void> {
	const url = import.meta.env.CSB_ALERT_WEBHOOK_URL;
	const secret = import.meta.env.CSB_ALERT_WEBHOOK_SECRET;
	if (!url || !secret) {
		console.error("[ghl-lead] CSB_ALERT_WEBHOOK_URL / CSB_ALERT_WEBHOOK_SECRET not set; skipping form alert");
		return;
	}
	const res = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json", "x-alert-secret": secret },
		body: JSON.stringify({ ...payload, alertType: "form_submission" }),
	});
	if (!res.ok) {
		const body = await res.text().catch(() => "");
		console.error(`[ghl-lead] form alert webhook returned ${res.status}:`, body);
	}
}

// ClickUp custom field IDs for the Other Leads list (901705085023)
const CU_FIELD = {
	email: "b6b78d97-9d3c-4b6f-bd27-5bbd9ad49abd",
	phone: "9a43ef06-f4e2-4b8d-8cb9-113c32ee518c",
	website: "7cff88ca-9ad4-4d58-ad4b-a5632b4282ea",
	salesman: "8c28eefa-45ea-4f84-ae3d-7b0243865f9a",
	howFoundUs: "50425a6f-2b38-49b4-a5e7-2f1b3472ac65",
	leadFunnelTracker: "90605a8b-26ef-4c58-83ec-9eb4cac4289e",
	dateLastContacted: "c7f4e851-33aa-491c-8b8d-a29b9f0d3e93",
	notes: "b8917fed-14a7-47a5-85c1-bee96c086de7",
} as const;

// Salesman dropdown option IDs
const CU_SALESMAN = {
	cade: "ab6f4c71-dd65-4da6-90e7-3d7dbbb1fa57",
	peterson: "3e7a65fc-2395-4f6b-a755-7970750ac156",
	lindsey: "afe66574-e56c-4cfc-8207-187d50b77f46",
} as const;

// Lead funnel tracker "New Lead" option ID
const CU_FUNNEL_NEW_LEAD = "a6022b25-e35c-45bc-bfb3-e070fff2c198";

const CLICKUP_LIST_ID = "901705085023";

/** Create a lead task in ClickUp's Other Leads list. Fire-and-forget. */
async function createClickUpLead(payload: {
	name: string;
	phone: string;
	email: string;
	website: string;
	funnel: string;
	qualificationStatus: string;
	contactSource: string;
	route: string;
	revenue: string;
	adSpend: string;
	challenge: string;
	businessType: string;
	decisionMaker: string;
	adMgmt: string;
	practiceType: string;
	licensedLo: string;
	monthlyDeals: string;
	marketingBudget: string;
	utmSource: string;
	utmCampaign: string;
}): Promise<void> {
	const token = import.meta.env.CLICKUP_API_TOKEN;
	if (!token) {
		console.error("[ghl-lead] CLICKUP_API_TOKEN not configured; skipping ClickUp lead creation");
		return;
	}

	// Determine salesman from funnel type
	const salesmanId = payload.funnel === "rm" ? CU_SALESMAN.peterson : CU_SALESMAN.cade;

	// Build description from form answers
	const descLines: string[] = [];
	descLines.push(`**Source:** ${payload.contactSource}`);
	descLines.push(`**Funnel:** ${payload.funnel}`);
	descLines.push(`**Qualification:** ${payload.qualificationStatus}`);
	if (payload.revenue) descLines.push(`**Revenue:** ${payload.revenue}`);
	if (payload.adSpend) descLines.push(`**Ad Spend:** ${payload.adSpend}`);
	if (payload.challenge) descLines.push(`**Challenge:** ${payload.challenge}`);
	if (payload.businessType) descLines.push(`**Business Type:** ${payload.businessType}`);
	if (payload.decisionMaker) descLines.push(`**Decision Maker:** ${payload.decisionMaker}`);
	if (payload.adMgmt) descLines.push(`**Current Ad Management:** ${payload.adMgmt}`);
	if (payload.practiceType) descLines.push(`**Practice Type:** ${payload.practiceType}`);
	if (payload.licensedLo) descLines.push(`**Licensed RM LO:** ${payload.licensedLo}`);
	if (payload.monthlyDeals) descLines.push(`**Monthly Deals:** ${payload.monthlyDeals}`);
	if (payload.marketingBudget) descLines.push(`**Marketing Budget:** ${payload.marketingBudget}`);
	if (payload.utmSource) descLines.push(`**UTM Source:** ${payload.utmSource}`);
	if (payload.utmCampaign) descLines.push(`**UTM Campaign:** ${payload.utmCampaign}`);

	const customFields = [
		{ id: CU_FIELD.email, value: payload.email },
		{ id: CU_FIELD.phone, value: payload.phone },
		{ id: CU_FIELD.website, value: payload.website || "https://unknown" },
		{ id: CU_FIELD.salesman, value: salesmanId },
		{ id: CU_FIELD.howFoundUs, value: `${payload.contactSource} - ${payload.funnel} funnel` },
		{ id: CU_FIELD.leadFunnelTracker, value: CU_FUNNEL_NEW_LEAD },
		{ id: CU_FIELD.dateLastContacted, value: Date.now().toString() },
		{ id: CU_FIELD.notes, value: descLines.join("\n") },
	];

	const body = {
		name: payload.name,
		status: "new lead",
		description: descLines.join("\n"),
		custom_fields: customFields,
	};

	const res = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
		method: "POST",
		headers: {
			"Authorization": token,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	if (!res.ok) {
		const errText = await res.text().catch(() => "");
		console.error(`[ghl-lead] ClickUp task creation failed ${res.status}:`, errText);
	} else {
		const data = await res.json().catch(() => ({})) as { id?: string };
		console.log(`[ghl-lead] ClickUp lead created: ${data.id || "unknown"}`);
	}
}
