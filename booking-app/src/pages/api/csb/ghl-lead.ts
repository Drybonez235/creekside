import type { APIRoute } from "astro";
import { clientIp, jsonResponse, errorResponse } from "../../../lib/csb/http";

export const prerender = false;

const GHL_BASE = "https://services.leadconnectorhq.com";

// Dental Pipeline in GHL
const DENTAL_PIPELINE_ID = "cUkfvJHXo34WTtAPMWIP";
const DENTAL_STAGES = {
	newLead: "4f189c75-99a3-4c83-81df-399c0631b92c",
	referred: "211e19ab-0615-40ff-a04a-d966250831c5",
} as const;

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
	utmSource: "arHD6CEDVUcc49EH2G3s",
	utmMedium: "uZ25qk7BzAjHMKagWM1V",
	utmCampaign: "zh3UaWthUTi60O2Ri7Kb",
	utmContent: "rMVj669BH2EF1Vjw7WU4",
	utmTerm: "NSaf4c3Xnlh9nkOjxmcx",
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
	"under-3k": "Under $3K/mo",
	"3k-5k": "$3K - $5K/mo",
	"5k-15k": "$5K - $15K/mo",
	"15k+": "$15K+/mo",
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
	"yes-both": "Cosmetic + General Dentistry",
	"yes-cosmetic": "Cosmetic Only",
	"general": "Primarily General Dentistry",
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

	// funnel: "site" for the general /start/ funnel; absent/anything else = dental (original behavior)
	const isSite = p.funnel === "site";
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

	const isQualified = route !== "keith";
	const qualStatus = isQualified ? "Qualified" : "Under Threshold";

	const funnelTag = isSite ? "site" : "dental";
	const tags = [`${funnelTag}-funnel`];
	if (isQualified) {
		tags.push(`${funnelTag}-qualified`, "cade-direct");
	} else {
		tags.push(`${funnelTag}-under-threshold`, "keith-referral");
	}

	const customFields: { id: string; value: string }[] = [];
	const addField = (id: string, val: string) => {
		if (val) customFields.push({ id, value: val });
	};

	addField(FIELD.gclid, gclid);
	addField(FIELD.fbclid, fbclid);
	addField(FIELD.revenueTier, REVENUE_MAP[revenue] || revenue);
	addField(FIELD.adManagement, AD_MGMT_MAP[adMgmt] || adMgmt);
	addField(FIELD.websiteUrl, website);
	addField(FIELD.industry, isSite ? (BUSINESS_TYPE_MAP[businessType] || businessType || "General") : "Dental");
	addField(FIELD.contactSource, contactSource);
	addField(FIELD.referredTo, isQualified ? "Cade" : "Keith");
	addField(FIELD.qualificationStatus, qualStatus);
	addField(FIELD.practiceType, PRACTICE_TYPE_MAP[practiceType] || practiceType);
	addField(FIELD.servicesInterestedIn, SERVICES_MAP[services] || services);
	addField(FIELD.biggestChallenge, CHALLENGE_MAP[challenge] || challenge);
	addField(FIELD.decisionMaker, DECISION_MAKER_MAP[decisionMaker] || decisionMaker);
	addField(FIELD.utmSource, utmSource);
	addField(FIELD.utmMedium, utmMedium);
	addField(FIELD.utmCampaign, utmCampaign);
	addField(FIELD.utmContent, utmContent);
	addField(FIELD.utmTerm, utmTerm);

	// Site funnel fields that don't have dedicated custom fields go into notes
	const noteLines: string[] = [];
	if (isSite) {
		if (businessType) noteLines.push(`Business Type: ${BUSINESS_TYPE_MAP[businessType] || businessType}`);
		if (adSpend) noteLines.push(`Ad Budget: ${AD_SPEND_MAP[adSpend] || adSpend}`);
	}
	const notes = noteLines.length ? `[Website Funnel]\n${noteLines.join("\n")}` : "";

	// GHL contacts API does NOT accept "notes" on the create payload (returns 422).
	// Notes must be added via a separate POST /contacts/{id}/notes call after creation.
	const contactBody: Record<string, unknown> = { locationId, firstName, lastName, email, phone, tags, customFields };

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
			// GHL returns 400 for duplicate email+phone -- look up existing contact
			await res.json().catch(() => ({}));
			try {
				const lookupRes = await fetch(
					`${GHL_BASE}/contacts/search/duplicate?locationId=${locationId}&email=${encodeURIComponent(email)}`,
					{ method: "GET", headers: ghlHeaders },
				);
				if (lookupRes.ok) {
					const lookupData = await lookupRes.json();
					contactId = lookupData.contact?.id || null;
				}
			} catch {
				// Lookup failed -- continue without contactId
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

		// 2. Create opportunity in Dental Pipeline (only for dental funnel)
		//    Always starts as "New Lead" -- gets updated to "Call Booked" by book.ts if they book
		//    Skip if this contact already has an opportunity in the pipeline (prevents duplicates)
		if (contactId && !isSite) {
			try {
				// Check for existing opportunity
				const existingRes = await fetch(
					`${GHL_BASE}/opportunities/search?location_id=${locationId}&pipeline_id=${DENTAL_PIPELINE_ID}&contact_id=${contactId}`,
					{ method: "GET", headers: ghlHeaders },
				);
				const existingData = existingRes.ok ? await existingRes.json() : { opportunities: [] };
				const hasExisting = existingData.opportunities?.length > 0;

				if (!hasExisting) {
					// Build comprehensive opportunity notes with all questionnaire answers
					const oppNoteLines: string[] = [
						`[Dental Funnel Submission]`,
						`Name: ${name}`,
						`Email: ${email}`,
						`Phone: ${phone}`,
					];
					if (website) oppNoteLines.push(`Website: ${website}`);
					if (practiceType) oppNoteLines.push(`Practice Type: ${PRACTICE_TYPE_MAP[practiceType] || practiceType}`);
					if (services) oppNoteLines.push(`Services: ${SERVICES_MAP[services] || services}`);
					if (revenue) oppNoteLines.push(`Monthly Revenue: ${REVENUE_MAP[revenue] || revenue}`);
					if (challenge) oppNoteLines.push(`Challenge: ${CHALLENGE_MAP[challenge] || challenge}`);
					if (decisionMaker) oppNoteLines.push(`Decision Maker: ${DECISION_MAKER_MAP[decisionMaker] || decisionMaker}`);
					if (adMgmt) oppNoteLines.push(`Ad Management: ${AD_MGMT_MAP[adMgmt] || adMgmt}`);
					oppNoteLines.push(`Qualification: ${qualStatus}`);
					oppNoteLines.push(`Source: ${contactSource}`);
					if (isQualified) {
						oppNoteLines.push(`Routed to: Cade (direct)`);
					} else {
						oppNoteLines.push(`Routed to: Keith (partner referral)`);
					}

					// GHL opportunities API rejects "notes" in the create payload (same as contacts).
					// Create the opportunity first, then add notes separately.
					const oppRes = await fetch(`${GHL_BASE}/opportunities/`, {
						method: "POST",
						headers: ghlHeaders,
						body: JSON.stringify({
							pipelineId: DENTAL_PIPELINE_ID,
							locationId,
							name: `${name} - Dental Lead`,
							stageId: DENTAL_STAGES.newLead,
							contactId,
							status: "open",
							source: contactSource,
						}),
					});

					if (!oppRes.ok) {
						const errBody = await oppRes.text().catch(() => "");
						console.error(`[ghl-lead] Opportunity creation error ${oppRes.status}:`, errBody);
					}

					// Add questionnaire answers as a note on the contact (GHL has no opportunity notes endpoint)
					if (oppNoteLines.length) {
						try {
							await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
								method: "POST",
								headers: ghlHeaders,
								body: JSON.stringify({ body: oppNoteLines.join("\n") }),
							});
						} catch (noteErr) {
							console.error("[ghl-lead] Opportunity notes failed:", noteErr);
						}
					}
				}
			} catch (oppErr) {
				// Log but don't fail the whole request -- contact was already created
				console.error("[ghl-lead] Opportunity creation failed:", oppErr);
			}
		}

		return jsonResponse({ ok: true, contactId });
	} catch (err) {
		console.error("[ghl-lead] Network error:", err);
		return errorResponse("ghl_network_error", "CRM sync failed", 500);
	}
};
