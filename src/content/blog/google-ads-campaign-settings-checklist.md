---
title: "One Google Ads Setting Shows Your Local Ads to Users Worldwide. Here Is the Full Campaign Settings Checklist."
description: "A live account walk-through covering 8 Google Ads campaign settings Google gets wrong by default, including one location option that broadcasts local ads worldwide."
date: "2026-08-25"
image: "article-images/blog-card-donut.svg"
category: "Google Ads"
tags: ["Google Ads", "Campaign Settings", "Location Targeting", "Bidding Strategy"]
---

> **TL;DR**: In a live Google Ads account walk-through, we found that display network, location targeting, and CPA targets are the three campaign settings most consistently misconfigured in new accounts. The worst: one location option shows local business ads to users anywhere in the world, including countries the client cannot serve.

| Setting | Recommendation |
|, -|, -|
| Display Network in Search campaigns | Always OFF |
| Search Partners (new accounts) | OFF until stable conversions |
| Click-to-Call conversion tracking | Monitor offline quality |
| Target CPA reduction increment | 10-15% max per adjustment |
| CPA stabilization window | 7-14 days between reductions |
| Location: "Presence or Interest" | Never, use Presence only |
| Automatically Created Assets | OFF for 99% of accounts |
| Automatic Broad Match expansion | Always OFF |

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [The Best Campaign Settings To Use In Google Ads](https://www.youtube.com/watch?v=73rauP4sNTc).

---

Most people troubleshooting a struggling Google Ads account start with keywords or ad copy. That is usually the wrong place to start.

Before a campaign ever serves a single impression, its **Google Ads campaign settings** determine whether Google is working with you or against you. Based on Creekside Marketing's account audits across $20M+ in managed ad spend, the majority of underperforming campaigns have at least three of these settings wrong before the first keyword is ever reviewed.

What follows is a direct walk-through of the settings that matter most, based on a review of a live account.

---

## Marketing Objective: The Google Ads Campaign Setting Most Teams Skip

Setting the marketing objective at the campaign level tells Google what success looks like before a single impression is served. According to Creekside Marketing's account audits, campaigns launched without a marketing objective selected are common across industries, and the fix takes seconds. This setting gives Google clearer guardrails when making bidding and placement decisions.

Select the objective that accurately represents the outcome you are driving. For local service businesses, that is almost always lead generation. It is not the highest-leverage setting on this list, but it costs nothing to configure correctly from the start.

---

## Display Network in Search Campaigns: The Single Checkbox That Wrecks Performance

**Always uncheck the Display Network in search campaigns. According to Creekside Marketing's audit observations, this setting is wrong in 99.9% of new accounts reviewed. When left enabled, Google serves your search campaign ads across its display inventory using the same budget and the same bidding logic as your search traffic.**

Search traffic and display traffic are not interchangeable. Search captures users actively typing queries that signal intent. Display reaches users passively browsing content who have not expressed the same level of demand. Mixing them in a single campaign makes it impossible to attribute results accurately or optimize either channel effectively.

If display traffic is part of your strategy, run a separate Display, Demand Gen, or Performance Max campaign with its own budget. That campaign needs its own conversion analysis. Blending it into a search campaign produces performance numbers that do not accurately represent either channel.

---

## Search Partners: Off Until Your Campaign Has a Conversion Baseline

**Search partner traffic (Yahoo and other partner search sites) should stay off for new campaigns, especially for accounts in Maximize Clicks or Manual CPC. Adding search partners before a stable conversion baseline exists dilutes performance signals at the exact moment when clean data matters most.**

Search partners can add reach, but they typically bring lower-quality traffic than direct Google search. For a new campaign still gathering conversion data, mixing in search partner impressions makes it harder to isolate what is actually driving results in your primary channel.

The right time to test search partners is after your campaign has stable conversion volume and is running a conversion-based bidding strategy. Before that threshold is reached, keep search partners off.

---

## Conversion Goals: Why Click-to-Call Tracking Misleads Google

**Optimizing for click-to-call or get-directions conversions creates a situation where Google optimizes for user actions that register as conversions in the platform but never translate into real business outcomes. The reported CPA looks good on the dashboard while actual phone volume drops.**

This is a finding that consistently surprises clients. According to Creekside Marketing's observations across local service business accounts, users regularly click the click-to-call button without completing the call. They click for directions without ever showing up at the location. Both actions register as conversions in Google Ads.

When Google's algorithm optimizes for those signals, it finds more users who exhibit the same behavior: people who click buttons but do not follow through. The fix is to monitor conversion quality offline. Compare your actual calls and foot traffic against what Google is counting, and remove conversion actions from your bidding goals if they do not correlate with real business outcomes.

This is also why proper [Google Ads conversion tracking configuration](/blog/google-ads-conversion-tracking-settings/) is the foundation everything else is built on. If the data going into Google is wrong, smart bidding optimizes toward the wrong outcome.

---

## Bidding Strategy and CPA Targets: The 10-15% Step-Down Rule

**Start your Target CPA at the actual CPA your campaign is running at right now. Stabilize for 7 to 14 days. Then reduce by no more than 10 to 15 percent at a time. Setting it below current performance tells Google it cannot serve, and aggressive drops collapse impression volume without improving efficiency.**

According to Creekside Marketing's bidding methodology, developed across $20M+ in managed ad spend, aggressive CPA target setting is one of the most common reasons campaigns plateau or regress after initial positive performance.

Here is how the step-down process works in practice. A campaign running at a $50 CPA gets a Target CPA set at $50. After one to two weeks of stability, reduce to $43 (roughly 14% lower). Hold again. If it stabilizes at $43, reduce to $37. Continue until Google can no longer sustain the reduction without impression volume collapsing.

The ceiling of 10 to 15 percent per adjustment exists because Google's algorithm needs realistic constraints to optimize within. Reduce the target too aggressively and Google stops serving because it cannot find enough conversions within the cost constraint. The campaign remains technically active while generating almost no impressions.

For accounts with insufficient conversion history in a specific campaign, Maximize Clicks or Manual CPC is the more appropriate bidding strategy. Maximize Conversions requires enough conversion data within the specific campaign for the algorithm to learn from. Without that history, automated bidding is optimizing on noise rather than signal.

---

## Location Targeting: The Setting That Broadcasts Local Ads to the Entire World

**Always select "Presence: People in or regularly in your targeted locations." Never select "Presence or interest." This is not a nuanced choice between two reasonable options. "Presence or interest" shows your ads to anyone in the world who has recently searched for or browsed content about your targeted location, regardless of where they are physically located.**

This is the most consequential campaign setting on this list, and the one that causes the most preventable budget waste in new accounts.

According to Creekside Marketing's account review process, "Presence or interest" left enabled has resulted in local service business campaigns showing to users in other countries. A user who recently browsed a travel blog about your city, checked real estate listings in your area, or searched for a news story about your region qualifies under "Presence or interest." Your dental practice campaign, your plumbing lead generation campaign, your home remodeling ads: visible to people who have no geographic ability to become your customers.

Peterson's direct assessment from reviewing dozens of new accounts: this is one of the few settings where there is no legitimate reason to leave it configured incorrectly. There is no edge case where "Presence or interest" makes sense for a service-area business. Select Presence only, no exceptions, regardless of how large or small your target geography is. Even for national campaigns targeting the entire United States, Presence-only prevents ads from appearing to international users who have searched for US content.

The fix: navigate to your campaign settings, expand Location options, and confirm "Presence: People in or regularly in your targeted locations" is selected. Then pull a geographic performance report for the past 30 to 90 days and check whether impressions have already been coming from outside your service area.

---

## Automatically Created Assets: Keep Messaging Control From Day One

**Automatically Created Assets should be off for the vast majority of accounts. According to Creekside Marketing's campaign setup process, Google auto-generated assets can introduce headlines you did not write, claims you did not approve, and messaging that does not match your brand voice. For 99% of accounts, the loss of messaging control is not worth the marginal reach benefit.**

Google auto-created assets pull from your website and other signals to generate headlines and descriptions without your review or approval. For established accounts where specific generated assets have been reviewed and confirmed to perform consistently over time, there may be a narrow case for enabling them selectively. For a new campaign or a campaign rebuild, leave them off and maintain manual control over every asset.

The risk is not theoretical. Automatically generated assets have produced copy that misrepresents service offerings, uses terminology the client specifically avoids, and makes implicit promises the landing page does not support. Control your messaging from the start.

---

## Broad Match and Brand Controls: Decide Intentionally, Not by Default

**Disable automatic broad match expansion in campaign settings and decide deliberately when to introduce broad match keywords. Excluding your own brand from non-brand campaigns keeps search term data clean and prevents your generic campaigns from bidding against your own brand terms at inflated CPCs.**

Google's settings include an option to automatically upgrade existing match types to broad match. This removes your control over when and how broad match enters your account. Broad match has legitimate use cases in the right context, but automatic expansion is not a decision to delegate to Google.

IP exclusions follow the same principle: if employees at the business might trigger your ads through internal searches or testing, excluding the company's IP addresses prevents that activity from inflating click and conversion data.

Brand exclusions in non-brand campaigns prevent your generic search campaigns from competing against your brand campaigns on the brand name, which keeps CPCs more predictable and conversion data attributable to the right campaign type.

For a complete account structure overview, see our [Google Ads management approach](/digital-advertising/google-ads/).

---

## Frequently Asked Questions

**Should I use the New Customers Only setting if I do not have a customer list?**

No. The customer acquisition targeting in campaign settings requires a customer match list of sufficient size (typically over 1,000 verified users) to function. Without an uploaded customer list, the setting prevents the campaign from serving. If you do not have a qualified customer list ready to upload to Google Ads, skip this setting entirely. It is an optimization tool for accounts with an existing customer database, not a baseline configuration.

**When should search partners be added to a search campaign?**

According to Creekside Marketing's campaign setup process, test search partners only after your campaign has stable conversion volume and is running a conversion-optimized bidding strategy such as Maximize Conversions or Target CPA. Before that baseline is established, search partner traffic adds variability that makes it harder to isolate what is actually producing results in your primary search channel.

**What happens if the Target CPA is set too aggressively?**

Google reduces impression volume to near zero because it cannot find enough conversions within the cost constraint. The campaign stays technically active but stops generating meaningful traffic. To recover, reset the Target CPA to match your recent actual CPA and restart the step-down process from a realistic baseline. The 10-15% rule applies on the way back down too.

**How do I check whether "Presence or interest" is currently selected in my campaigns?**

In Google Ads, open your campaign settings and look under the Location options section (expand it if collapsed). If it shows "Presence or interest," change it immediately to "Presence: People in or regularly in your targeted locations." Then pull a geographic performance report for the past 30 to 90 days and check whether impressions came from outside your service area.

---

## The Bottom Line

Google Ads campaign settings are the foundation every other optimization decision is built on. Getting keywords right, testing ad copy, improving landing pages: none of that compounds correctly if the campaign settings underneath are misconfigured from the start.

The most consistent findings from Creekside Marketing's new account audits: display network enabled in search campaigns, "Presence or interest" selected for location targeting, and CPA targets set too aggressively without a stabilization process. These three issues alone account for the majority of avoidable performance losses we find in new accounts.

Fix the foundation first. Then optimize everything else.

---

**Want a free audit of your Google Ads campaign settings?** [Claim your 10K Profit Audit](/10k-profit-audit/), we review your campaign structure, settings, and conversion tracking and show you exactly where budget is being wasted before touching a single keyword.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend. He publishes regular Google Ads and Meta Ads tutorials on the [Creekside Marketing YouTube channel](https://www.youtube.com/@CreeksideMarketing1/videos). Questions about campaign settings or anything else covered in this post? Reach out through the contact information in the YouTube bio or through the website.