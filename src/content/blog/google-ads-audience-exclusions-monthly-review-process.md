---
title: "How to Exclude Google Ads Audience Segments That Are Wasting Your Budget (The 2-3x CPA Rule)"
description: "The 4-week Google Ads audience segment review process: use the 2-3x CPA threshold to exclude poor performers and cut wasted spend."
date: "2026-10-16"
image: "article-images/blog-card-funnel.svg"
category: "Google Ads"
tags: ["Google Ads", "Audience Segments", "Audience Exclusions", "Campaign Optimization"]
---

> **TL;DR:** According to Creekside Marketing's account management process, audience segments should be reviewed at the campaign level every 4 weeks using a 10-week data window. Any segment with a cost per conversion 2-3x higher than the campaign average gets excluded. For accounts without enough conversion data, a CTR-based threshold method works instead. After each exclusion batch, add new segments so Google keeps collecting audience data.

| Metric | Value |
|, , |, , -|
| Review frequency | Every 4 weeks |
| Data window | 10 weeks |
| Review level | Campaign level |
| Exclusion threshold (CPA method) | 2-3x the campaign's average CPA |
| Example campaign avg CPA | ~$30 |
| Example campaign avg conversion rate | ~33% (1 per 3 clicks) |
| Example campaign avg CTR | ~2.5% |
| CTR exclusion threshold | Below 50% of campaign avg CTR |
| Minimum impressions (CTR method) | 40+ before acting |

Most Google Ads accounts set up audience segment observation mode, watch the data populate, and never touch it again. That's a straightforward budget leak. Excluding poor-performing Google Ads audience segments is one of the most underused levers in ongoing campaign management, and the process doesn't need to be complicated.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Reviewing Audience Segments For Exclusion (Google Ads Management)](https://www.youtube.com/watch?v=qWJPgoMn4-c).

## Why Audience Segment Exclusions Cut Wasted Google Ads Spend

Excluding bad audience segments reduces cost per conversion by stopping budget from flowing to people who never convert. Left unchecked, underperforming segments keep collecting impressions and clicks, drag down your campaign's average performance, and quietly inflate your CPA month over month.

We review at the campaign level every 4 weeks. We use a 10-week data window because that gives each segment enough time to prove itself while keeping the cycle short enough to catch waste before it compounds. This is a recurring maintenance task, the same way you'd review search terms or placement data, just on a slightly longer cadence.

If you haven't set up audience segment observation yet, you'll need to do that first. Google automates most of it and it doesn't affect campaign delivery. It just observes audiences and reports performance data so you have something to act on. We have a separate video on the setup that you'll want to watch before this process makes sense.

## The 2-3x CPA Threshold: Deciding What to Exclude

Any audience segment with a cost per conversion 2 to 3 times higher than the campaign average is a candidate for exclusion.

Below 2x, the segment is still in optimization range. Google may get there. At 2-3x, the pattern is clear enough to act. The specific multiplier you use within that range depends on the campaign. More competitive accounts with tighter margins might act at 2x. Others might allow 3x before pulling the trigger.

Here's a concrete example from a real account review. Campaign average cost per conversion was around $30, with a 33% conversion rate (one conversion per three clicks) and a 2.5% average CTR. One in-market audience segment had 14 clicks and just 1/3 of a conversion. At the campaign's normal conversion rate, 14 clicks should have produced 4 to 5 conversions. The CTR was also terrible despite a high impression count. Two signals pointing the same direction.

Before excluding anything, confirm the segment has had a meaningful sample. If a segment has 50 impressions and one click, the data isn't reliable. In the example above, there were plenty of clicks, which is exactly what made the near-zero conversion count stand out.

One more thing to watch for: some bad segments never generate a single conversion. They show up with zero cost per conversion because there's nothing to calculate. Don't skip these. Filter your audience view by impressions to surface segments with high impression counts and zero conversions. One account had a segment with 1,000 impressions, 11 clicks, and zero conversions. It went on the exclusion list the same way as the high-CPA segment.

## How to Exclude Audience Segments in Google Ads (The Actual Steps)

This runs from inside a specific campaign. Navigate to Audiences, then click into Audience Segments. Make sure observation is actually enabled. If you haven't started tracking, the data will be empty and there's nothing to act on.

Sort by cost per conversion. Scroll to the bottom of the table first to read the campaign averages. That baseline is what you're measuring every segment against. Then scroll back up to find anything that breaks the 2-3x threshold.

When you find a segment that qualifies, here's the two-step process:

1. Click the dropdown on that segment row and select Remove. This pulls it from observation.
2. Scroll to the exclusions section and click Edit Exclusions. Go to Browse, find the correct segment type (In-Market, Affinity, Detailed Demographics, etc.), navigate to the specific segment, and save.

Both steps matter. Removing from observation stops Google from tracking that audience going forward. Adding it to exclusions prevents your ads from showing to it at all. One without the other doesn't complete the job.

## The CTR Method for Small-Budget Campaigns

For smaller-budget campaigns, the CPA method breaks down. You need 15 to 20 conversions at the segment level to make reliable calls, and a small-budget campaign may not get there in 10 weeks. That's normal.

The fix is to use CTR as a proxy instead.

The logic is the same. You're looking for segments that perform well below the campaign average, just measuring it differently. Here's how it works across three different budget scenarios from the same review session:

**Campaign with 5% average CTR:** One click per 20 impressions is the baseline. Look for segments with 40 or more impressions and zero clicks. The 40-impression floor keeps you from acting on noise.

**Campaign with 10% average CTR:** Look for anything below 5% (half the average) with a meaningful impression count.

**Campaign with 4% average CTR:** Look for segments below 2%, especially ones spending significant money. In one example from this review, two segments had way below 2% CTR and combined for several hundred dollars in spend at zero conversions. That's real money on a smaller account.

Here's the thing: even with the CTR method, you still need to look at what the bad performance is actually costing. Impressions without spend don't move the needle much. Spend without results does.

## The Learning Mode Guardrail: When Not to Exclude

Not every underperforming segment is worth excluding. This is the guardrail we use.

If a segment has only spent around $150 over 10 weeks, we leave it alone. Excluding it sends the campaign into learning mode. Google has to recalibrate its bidding without that audience in the pool, and that recalibration costs more in performance disruption than the $150 saved. The math doesn't work.

This is the judgment call that separates a good exclusion process from a reflexive one. Small damage doesn't justify sending a healthy campaign into a learning phase. We act on segments with meaningful spend at meaningfully bad performance rates.

The line we use: significant spend (for the account's scale) at significantly below-average performance. $70 on a smaller account with tons of impressions and near-zero CTR? Worth excluding. $150 on a slightly below-average segment over 10 weeks? Not worth it. The campaign will spend more recovering than it saves from the exclusion.

## What to Do After Each Exclusion Pass

After excluding bad segments, add a few new ones to the observation pool.

Every exclusion shrinks the pool. If you keep removing audiences without adding replacements, Google has less data to work with and fewer patterns to find. You want the pool to stay active so new performance signals can surface over the next review cycle.

The other reason to keep feeding in new segments: you'll find surprises. In one of the accounts reviewed in the source video, the homeowners segment had a cost per conversion at about half the campaign average. Without the observation data running in the background, that finding would have been completely invisible. That kind of result is what eventually justifies building a dedicated campaign targeted specifically at high-performing audiences.

We don't currently have a video published on how to build a targeting campaign around specific high-performing audiences, but reviewing exclusions is the essential step before any of that is possible. You can't know which audiences to target until you've run the data long enough to see who actually converts.

For reference on how to set up audience segment observation before any of this review process is possible, see our post on [how to use Google Ads audience segments the right way](/blog/how-to-use-google-ads-audience-segments-the-right-way-observation-vs-targeting/).

If your conversion data is missing or your tracking setup has errors, fix that before making exclusion calls. Bad conversion data produces bad exclusions. Our guide on [Google Ads conversion tracking settings](/blog/google-ads-conversion-tracking-settings/) covers what to check first.

## Frequently Asked Questions

**How often should you review Google Ads audience segments?**
Every 4 weeks, using a 10-week data window. This cadence catches waste before it compounds without being so frequent that individual segments haven't had enough time to produce reliable data.

**What CPA threshold triggers an audience exclusion?**
2 to 3 times the campaign's average cost per conversion. Below 2x, the segment is still in optimization range. At 2-3x or higher, the data clearly shows the audience doesn't match the offer.

**What if an audience segment has never converted at all?**
Don't skip it. Filter your audience view by impressions. Any segment with a high impression count and zero conversions is a candidate for exclusion, using the same two-step process as a high-CPA segment.

**Can you exclude audiences when conversion data is too thin?**
Yes. Use CTR as a proxy. Find your campaign's average CTR, then look for segments with at least 40 impressions that fall below 50% of that average. That's your exclusion candidate for campaigns where conversion volume is too low to use CPA as the signal.

**Does excluding audience segments send a campaign into learning mode?**
Sometimes. That's why we don't exclude segments with minimal spend, around $150 over 10 weeks. The recalibration cost outweighs the savings for small offenders. We act on segments with real spend at clearly bad performance rates, not on anything that barely moved the budget.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in annual ad spend across Google Ads and Meta Ads. Based in Sacramento, CA.

---

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).
