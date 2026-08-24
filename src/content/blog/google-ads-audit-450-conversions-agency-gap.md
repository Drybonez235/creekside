---
title: "The Google Ads Audit That Revealed Why One Agency Got 450 Conversions and the Next Got Zero"
description: "A real Google Ads audit walkthrough: 7 findings that explain a 22x CPC gap, broken conversion tracking, and how to recover a struggling inherited account."
date: "2026-08-07"
image: "article-images/creekside-marketing-pros-digital-marketing-strategy.avif"
category: "Google Ads"
tags: ["Google Ads", "Performance Max", "Google Ads Audit", "Quality Score", "Conversion Tracking"]
---

> **TL;DR:** One Google Ads account. Two agencies. One got 450 conversions at $0.80 CPCs; the next got near-zero at $18 CPCs. A structured audit found 7 causes: Performance Max spam domains, form submits counted as conversions, geographic targets at 2x-3x the national CPA, a below-average landing page, pinned headlines, broad match negatives, and a target CPA set 8x too high from day one.

| Metric | Value |
|--------|-------|
| Previous agency CPC | $0.80 |
| New agency CPC | $18 |
| CPC gap | 22x |
| Previous agency conversions (primary search campaign) | 450 |
| New agency conversions in 32 days | ~1 |
| Massachusetts CPA vs. national average | $23 vs. $7 |
| Connecticut CPA vs. national average | $13 vs. $7 |
| Rhode Island CPA vs. national average | $12 vs. $7 |
| Previous agency starting target CPA | $5 |
| New agency starting target CPA | $40 |
| Quality score gap | 10/10 (previous) vs. below average (new) |

# The Google Ads Audit That Revealed Why One Agency Got 450 Conversions and the Next Got Zero

When a new agency inherits a Google Ads account that was producing results, the instinct is to start fresh. New campaign structure, tighter geographic targeting, more refined bidding. All of it feels like an upgrade.

Then the conversions stop.

Not a gradual decline. A near-complete stop. The previous agency was producing $0.80 CPCs and 450 conversions from a single search campaign. The new agency landed at roughly one conversion in 32 days and $18 CPCs from the same account and same client.

This post is based on a real Google Ads audit Peterson published on the Creekside Marketing YouTube channel: [This Google Ads Audit Saved An Agency $100,000+ in ARR!](https://www.youtube.com/watch?v=nd49kmGQYEI). Seven specific findings explain the gap, all drawn directly from the live account audit.

![Agency transition CPC and conversion gap: $0.80 vs $18 CPCs, 450 vs near-zero conversions](/article-images/google-ads-audit-450-conversions-zero-cpc-gap.svg)

---

## Finding 1: Performance Max Was Serving Ads to the Wrong Audience

Performance Max campaigns distribute budget across every Google surface by default, including parked domains, mobile game apps, and users outside the targeted geography. Without specific exclusions in place, PMAX accumulates clicks from traffic with no purchase intent. The audit found two key exclusions missing, contributing to significant wasted impressions and clicks from unqualified sources.

The first missing exclusion was ARCs domains. ARCs domains are a documented spam source inside Performance Max campaigns. They drive impressions and clicks from users who have no genuine interest in the advertised product or service. Excluding them does not immediately generate form submissions, but it removes a large volume of garbage traffic that corrupts the optimization signal Google uses to find real buyers.

The second and more impactful issue was location targeting logic. The previous agency had changed their campaign's location setting from "presence or interest in" to "presence in" their target locations just before shutting off their campaigns. That specific change limits ad delivery to users physically in the target area, rather than anyone who has shown interest in it. Without that setting, the account was showing ads to users outside the United States, inflating the conversion count with non-qualifying traffic and confusing Google's optimization signals.

If you are running PMAX without reviewing placement exclusions, [this breakdown of blocking Performance Max spam placements](/blog/stop-google-ads-spam-placements-content-suitability) covers the exact setup.

---

## Finding 2: The Account Was Training Google to Find Unqualified Leads

When every form submission is counted as a positive conversion, Google optimizes to find every person willing to fill out a form, including bots, idle browsers, and contacts who will never answer a follow-up call. The account was tracking raw form submissions as conversions with no downstream qualification filter, giving Google a definition of success that did not match what the business actually needed.

The previous agency was getting thousands of form submissions. Not all of them were real leads. The high volume gave Google enough data to learn and optimize, even with noisy conversion signals. But the new agency, running the same tracking approach on a much smaller account with far fewer conversions, gave Google insufficient data of the wrong type.

The fix the audit recommended is offline conversion tracking. When a prospect submits a form and then takes a qualifying next step, such as answering a return call or showing up for a consultation, that outcome gets logged in the CRM and imported back into Google Ads as a confirmed conversion. This teaches Google what a real lead looks like rather than what a completed form looks like.

For Performance Max specifically, PMAX optimizing toward raw form submits will keep driving cost per acquisition up. Qualified conversion data from the CRM, not just completed forms, is what makes PMAX work long-term.

---

## Finding 3: The Target States Had 2x to 3x the National Average Cost Per Conversion

Historical data from the same account showed that all three of the targeted states produced conversions at significantly higher cost than the national average. A previous search campaign with 450 total conversions showed Massachusetts with zero, Connecticut absent entirely, and Rhode Island absent entirely. The audience that was actually converting lived in other states, not the three the new agency was exclusively targeting.

The cost-per-conversion data by state told the same story:

- Rhode Island: $12 cost per conversion
- Connecticut: $13 cost per conversion
- Massachusetts: $23 cost per conversion
- National average across all other states: $7 cost per conversion

Massachusetts was 3.3x more expensive per conversion than the national average. Rhode Island and Connecticut were both roughly 1.7x to 1.9x more expensive. And none of these states were showing meaningful conversion volume in the historical data.

When the campaign is constrained to three states that are both low-volume and high-CPA by actual account history, the agency was working against the account's own data from day one. The recommendation: open targeting to the full United States if the business owner allows it. [Location targeting](/blog/how-to-set-google-ads-location-targeting-properly-and-why-most-accounts-get-it-wrong) is one of the most consistently misconfigured settings we see.

![Geographic cost per conversion: Target states at $12-$23 vs. $7 national average](/article-images/google-ads-audit-450-conversions-zero-geo-cpa.svg)

---

## Finding 4: The Landing Page Was Below Average and Inflating CPCs

The previous agency's keywords had 10/10 quality scores with above-average landing page experience. The new agency's identical keywords showed below-average landing page experience. Quality score directly determines how much Google charges per click in a competitive auction, and the gap between these two setups is the most direct explanation for the 22x CPC difference.

When Google rates your landing page experience as below average relative to competitors, it charges a premium to show your ads. In a competitive market, a sustained quality score gap of several points can translate to a 2x or higher difference in CPCs. The $0.80 versus $18 gap in this account almost certainly has landing page quality as a major contributing factor alongside the geographic and bidding issues.

The recommendation: go back to the previous agency's landing page. Get at least one conversion before changing anything else. Rebuilding the landing page while simultaneously launching new campaigns in a zero-history account creates too many variables to diagnose. Conversions first, optimization second.

---

## Finding 5: Pinned Headlines Produced Poor Ad Strength Before the Account Had Any Data

Google's responsive search ad system tests headline combinations to find what works for a specific audience. Pinning headlines to specific positions stops those tests. The previous agency's ads had excellent ad strength. The new agency's had poor ad strength, directly caused by headline pinning in an account with no conversion history. Google cannot learn what works if the combinations are locked from the start.

The audit noted something counterintuitive here: the new agency was more experienced, not less. They pinned headlines because they believed they knew which copy would perform. But in this specific account with no conversion history, pinning overrode Google's ability to discover what actually worked for this audience. With smart bidding strategies, poor ad strength in a zero-history account compounds every other constraint already on the account.

---

## Finding 6: Broad Match Negative Keywords Were Restricting More Traffic Than Intended

Importing negative keyword lists into a new account is standard practice and generally the right move. The issue in this account was match type. Several of the negative keywords were set to broad match rather than phrase match. Broad match negatives block searches that contain any variation of the negated term, which can unintentionally exclude queries that are actually relevant to the campaign.

The audit was clear this was not the primary cause of the conversion gap. But when Google is running a smart bidding strategy in a cold account with no history, every unnecessary restriction reduces the algorithm's ability to find conversions. The recommendation was to convert broad match negatives to phrase match, giving Google slightly more room without completely removing guardrails.

---

## Finding 7: The Starting Target CPA Was Set 8x Higher Than What Had Worked

The previous agency launched at a $5 target CPA, an aggressive signal that told Google to find the cheapest possible conversions. The result was thousands of form submissions, many not real leads, but enough volume to give Google data to learn from. The new agency launched at $40, asking Google to be selective in an account with no conversion history to be selective about. In an account with no baseline, Google barely bids. The account never builds momentum because it never gets enough clicks to generate conversion data.

This single configuration difference, combined with the broken conversion tracking and geographic constraints, explains a significant share of the near-zero conversion outcome. An account cannot learn its way to performance if it is constrained to spend nothing and see nothing.

---

## The Underlying Rule: Get Conversions First, Optimize Second

Every finding in this audit points to the same mistake: optimizing before the account had data. Geographic restrictions, conservative bidding, pinned headlines, and a high starting target CPA all feel like improvements. In a mature account with conversion history, they are. In a cold account transition with no signal, each one adds a constraint that prevents momentum from building at all.

As the audit put it directly: replicate exactly what the previous agency had running. Use their landing page. Use their match types. Use their location settings. Start with a similar target CPA. Get at least some conversions in the account. Then, from a position of data, make improvements to conversion quality, geographic focus, or creative strategy.

The previous agency clearly knew something about getting this account to convert. Starting from that baseline is far stronger than starting from scratch and discovering after 30 days that nothing worked.

This applies to conversion tracking first. The audit found the offline conversion import had stopped updating on May 21st, with no new rows since, and Google Tag Manager showed a "container quality urgent" flag. Broken tracking prevents Google from seeing its own results. Fix tracking before any bidding or targeting changes.

---

## What a Real Google Ads Audit Surfaces

A real Google Ads audit is not a checklist of best practices against a hypothetical ideal setup. It is a structured comparison of what changed between when the account worked and when it stopped, with specific data from inside the account to support each finding.

Based on Creekside Marketing's analysis across $20M+ in managed ad spend, the four most common audit findings are quality score gaps from landing page changes, conversion tracking failures that prevent Google from learning, Performance Max spam placements inflating cost, and geographic targeting assumptions that do not match the account's own historical conversion data. All four showed up in this audit simultaneously.

When a Google Ads account takes a performance hit after an agency transition or a campaign rebuild, the answer is usually not a new strategy. It is identifying the specific settings that changed, understanding what each change costs, and going back to what worked before adding improvements.

If your account is running Google Ads and not hitting its numbers, we offer a [$10K Profit Audit](/10k-profit-audit/) that applies the same structured diagnostic. It is the same process covered here, applied to your specific account.

---

## Frequently Asked Questions

**Why did the previous agency have $0.80 CPCs when the new agency was paying $18?**

Three factors combined: the previous agency targeted the full United States, getting lower-CPA geographies into the mix; they maintained 10/10 quality scores with above-average landing page experience; and they started with a $5 target CPA, which gives Google permission to find high-volume traffic. The new agency reversed all three simultaneously.

**Is Performance Max worth using for lead generation?**

Yes, but only with offline conversion tracking feeding it qualified lead data from a CRM. PMAX optimizing toward raw form submissions will generate volume but not quality, and that pattern compounds in the wrong direction over time. Offline conversion data, imported only when a lead takes a genuine qualifying action, is what makes PMAX sustainable for lead generation.

**How long does it take for a Google Ads account to recover after an agency transition like this?**

It depends primarily on whether conversion tracking is fixed first. Without reliable conversion data, the recovery does not start. Once tracking is confirmed working, most smart bidding strategies need four to eight weeks to re-learn an account, assuming the campaign is given enough budget and traffic to generate conversion data.

**Why does geographic targeting have such a large effect on CPCs?**

Different markets have different levels of competition at auction. The account data showed $7 average CPA nationally versus $12 to $23 in New England states specifically. That difference reflects both local competition levels and audience composition. States where the product or service historically converts well produce lower CPAs naturally; states where it does not convert well produce higher costs with lower volume.

---

*Peterson Rainey is the founder of [Creekside Marketing](/digital-advertising/google-ads/), a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend for service businesses and e-commerce brands.*
