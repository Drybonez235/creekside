---
title: "How to Audit Facebook Ads Campaign Settings Before You Waste Another Dollar"
description: "A step-by-step Facebook Ads campaign-level audit checklist covering pixel setup, buying type, budget structure, bid strategy, and ad scheduling."
date: "2026-09-09"
image: "article-images/blog-card-target.svg"
category: "Facebook Ads"
tags: ["Facebook Ads", "Meta Ads", "Audit", "Campaign Settings", "Paid Ads"]
---

**TL;DR:** A Facebook Ads audit checklist at the campaign level covers 8 foundational settings before any budget is analyzed. Most accounts we inherit have at least one structural problem here, typically a pixel event that does not match the campaign objective, or a bid strategy that was capped before the learning phase could exit. Fixing these before reviewing creative or audiences saves weeks of misleading data.

| Audit Item | What to Verify |
|, , , |, , , , |
| Pixel created | Visible in Events Manager > Data Sources |
| Conversion events | Match business type (lead vs. purchase) |
| Campaign objective | Matches tracked conversion event |
| Buying type | Auction (always, for performance campaigns) |
| Ad categorization | Not credit/employment/housing/social issues |
| Spending limit | Set for accounts with fixed monthly budgets |
| Advantage Campaign Budget | On for A/B tests, off for strategic audience splits |
| Bid strategy | Highest Volume at launch |

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Facebook Ads Audit Tutorial | Campaign Level](https://www.youtube.com/watch?v=1rYM9oZ1V6o).

Running a proper Facebook ads campaign audit means starting at the foundation, not the creative. We use a structured spreadsheet with yes/no checkboxes to work through every campaign-level setting in order. If the pixel is broken or the objective is wrong, no amount of headline testing will produce reliable results. This walkthrough covers every item we check, and why each one matters.

---

## Why a Facebook Ads Audit Checklist Starts at the Campaign Level

Most advertisers look at creative first when performance drops. That is the wrong starting point. The campaign level is the structural foundation that every ad set and creative decision sits on, and a misconfigured campaign objective, missing conversion event, or a bid strategy capped before the learning phase exits means the entire account is optimizing toward the wrong outcome. A Facebook ads audit checklist that skips the campaign level is not actually an audit. It is just creative review.

---

## Step 1: Verify Your Pixel and Conversion Events Are Set Up Correctly

Your pixel and conversion events are the first items to check because every optimization decision the platform makes depends on them. Without an active pixel and correctly configured events, Meta cannot optimize toward real business outcomes, any conversion-based bid strategy operates on no data, and your cost-per-result numbers mean nothing.

To check the pixel: go to All Tools, then Events Manager, then Data Sources. If the pixel appears in the list, it exists and is installed. Do not be alarmed by warning marks next to it. Meta frequently displays those warnings when Conversions API is not configured, even when the standard pixel is firing correctly on every page.

To check conversion events: go to Settings inside Events Manager and open the Event Setup Tool. Enter your website URL. The tool loads your site and shows which buttons and pages are tagged as events. This step requires knowing what your business actually wants to track. For a service business trying to generate leads, the event should fire on a form submission confirmation page and be classified as a Lead or Contact event. For ecommerce, the Purchase event should fire on the order confirmation page. A mismatch here, for example a Page View event attached to a Leads campaign objective, means Meta is optimizing for the wrong behavior for the entire life of the campaign.

---

## Step 2: Confirm Your Campaign Objective Matches What You Are Actually Tracking

Once pixel and events are confirmed, go back to Ads Manager and look at the campaign objective. This is the single most common critical misconfiguration Creekside Marketing finds when auditing accounts built by other agencies or by business owners managing their own accounts. If your conversion events track leads but your campaign objective is set to Traffic or Awareness, Meta is delivering your ads to people most likely to click, not people most likely to fill out a form or call. Your cost-per-lead data reflects none of what actually matters.

The fix requires rebuilding the campaign. Campaign objectives in Meta Ads cannot be changed on a live campaign. You duplicate the campaign with the correct objective and pause the original. Historical optimization data does not transfer, which is another reason to get this right before launch rather than after.

Also check the Special Ad Category field before confirming the objective. Most service businesses will not qualify for Credit, Employment, Housing, or Social Issues categories. If your campaign does not fall into one of those four, leave it unchecked. Selecting the wrong special category applies audience targeting restrictions that reduce reach without any compliance benefit.

---

## Step 3: Set Your Buying Type to Auction

Auction buying type is required for performance-focused Facebook Ads campaigns. This is not optional. Auction is the setting that puts your ads into real-time competition against other advertisers targeting the same audience, and it is what unlocks access to Meta's Quality Rankings, Engagement Rate Rankings, and Conversion Rate Rankings in your ad-level reporting. Those diagnostic benchmarks show how your creative performs relative to competitors, and they are among the most useful signals available for diagnosing ads that are getting impressions but not converting.

Reach and Frequency buying, the alternative, locks you into a fixed CPM and a predetermined delivery schedule set in advance. It is designed for brand awareness campaigns with large budgets where predictable reach matters more than conversion efficiency. For any campaign where the goal is leads or purchases, Auction is the correct buying type every time.

---

## Step 4: Review Budget Structure, Advantage Campaign Budget, and Opening Bid Strategy

Budget setup at the campaign level involves three separate decisions, and each one affects performance in a different way. Getting one wrong while the other two are correct still produces a structurally broken campaign.

**Spending limit:** Most campaigns need a daily or lifetime budget cap. Meta will not voluntarily limit spend on your behalf. If you are managing a campaign for a business with a fixed monthly advertising budget, set the cap at the campaign level. The only accounts where uncapped campaigns make sense are those with explicitly variable budgets and a dedicated media buyer monitoring pacing daily.

**Advantage Campaign Budget:** This setting lets Meta distribute budget across your ad sets dynamically, pushing more spend toward ad sets performing better in real time. Based on Creekside Marketing's experience across service and ecommerce accounts, ACB works well when you are running similar ad variations inside the same campaign and want the algorithm to find the best-performing creative. If you have made two nearly identical ads and want them to compete, ACB finds the winner efficiently.

It does not work well when your ad sets are testing fundamentally different audiences or different offers that each need a minimum spend threshold to generate usable data. In that situation, ACB concentrates budget on the early leader and starves the other ad sets before they have enough data to evaluate fairly. Use manual budget allocation when strategic audience coverage matters more than early efficiency. For a closer look at how budget structure decisions affect cold audience acquisition at scale, see [How to Build New Customer Acquisition Campaigns That Scale on Meta Ads](/blog/meta-ads-new-customer-acquisition-roas-cold-traffic/).

**Opening bid strategy:** Set the bid strategy to Highest Volume at launch. This instructs Meta to deliver as many conversion events as possible within your budget without a cost-per-result constraint. At campaign launch, the account does not have enough conversion history for a manual cost cap to reflect real market data. Setting a cost cap before the learning phase exits limits delivery, slows down data collection, and often causes the campaign to spin in learning mode indefinitely. Start at Highest Volume, accumulate conversion events, and evaluate whether a cost cap makes sense once the account has an established cost-per-result baseline.

---

## Step 5: Ad Scheduling Is a Rule Setting, Not a Campaign Setting

This surprises most advertisers the first time they look for it. There is no native time-of-day or day-of-week scheduling option inside Facebook Ads campaign settings. If you are looking for a place to configure your ads to run only during business hours, you will not find it in the campaign interface. Ad scheduling in Meta Ads is handled entirely through Automated Rules, which most advertisers never discover until someone points it out.

Inside Ads Manager, go to Rules and create a rule that pauses the campaign at a specific time, paired with a corresponding rule that reactivates it at the start of the next business day. For service businesses that can only respond to leads during working hours, this matters in a practical way. Leads generated on a Saturday evening that sit uncontacted until Monday morning have a measurably lower close rate than leads handled within the first hour. Paying for those leads without a response workflow in place is waste that automated scheduling rules can prevent.

The audit item for this is simple: does this campaign need to run on a schedule? If yes, verify the rules exist and are active. If the campaign is intentionally running 24/7, mark it confirmed and move on.

---

## What to Do After Completing the Campaign-Level Audit

Work through each item in the yes/no checklist before drawing any conclusions about creative performance, audience sizing, or budget efficiency. Any structural problem at the campaign level contaminates the performance data above it. Fixing a broken conversion event mid-campaign will reset the learning phase and produce inconsistent attribution data during the transition. The cleanest path is a structural audit before the first dollar is committed.

Once the campaign level is confirmed correct, move to the ad set level covering audience targeting, placement settings, and budget distribution, then to the ads level covering creative quality, headline testing, and CTA alignment. For a detailed look at how a properly structured Meta Ads account performs across a real account build, see [Facebook Ads for Home Service Companies](/blog/facebook-ads-for-home-service-companies/).

---

## Frequently Asked Questions

**Do I need Conversions API in addition to the standard pixel?**

Conversions API adds server-side event tracking that improves data reliability, particularly because browser-based tracking has become less accurate since iOS privacy changes reduced signal availability. Meta will flag the absence of CAPI in Events Manager, which is where most of those warning marks originate. A standard pixel with correctly configured events will still run a functional campaign and pass this audit item. CAPI improves data quality at scale and reduces conversion under-reporting, but it is not a hard requirement for launching an account.

**Can I change my campaign objective after the campaign goes live?**

No. Campaign objectives are locked once a campaign is published in Meta Ads. If the objective is wrong, duplicate the campaign with the correct objective and pause the original. Historical performance data and any optimization signals the algorithm has accumulated do not transfer to the duplicated campaign.

**When does Advantage Campaign Budget hurt performance?**

ACB concentrates budget on ad sets that are performing well early in the campaign, which becomes a problem when different ad sets need their own minimum spend to generate statistically usable data. If you are testing different audiences with different offers, turn ACB off and allocate budgets manually so each segment gets enough impressions to evaluate properly.

**When should I move off Highest Volume to a cost cap bid strategy?**

Once your campaign has generated enough conversion events to exit the learning phase, your cost-per-result data reflects the actual market. At that point, setting a cost cap based on your target cost-per-lead or cost-per-acquisition is reasonable. Meta suggests 50 conversion events per week per ad set as a benchmark for stable learning, though the right threshold depends on your conversion volume and how tightly you need to control acquisition cost.

**What should I do if my pixel events are tracking the wrong conversion type?**

Rebuild the events using the Event Setup Tool to tag the correct pages and buttons for your actual conversion goal. If the campaign objective no longer matches after fixing the events, pause the live campaign, duplicate it with the correct objective, and relaunch. Changing event tracking on a live campaign mid-flight will reset the learning phase and may produce inconsistent attribution data during the transition period.

---

If you want more breakdowns like this, I write a weekly newsletter about what is actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in annual ad spend across Google Ads and Meta Ads for service businesses, ecommerce brands, and local advertisers nationwide.
