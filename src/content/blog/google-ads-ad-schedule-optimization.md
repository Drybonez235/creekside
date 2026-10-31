---
title: "Google Ads Ad Schedules: The 2x CPA Rule We Use Before Blocking Any Hour"
description: "How to review and adjust Google Ads ad schedules using 10 weeks of data, the 2x CPA threshold, and a 20-conversion minimum before making any cuts."
date: "2026-10-11"
image: "article-images/blog-card-bars.svg"
category: "Google Ads"
tags: ["Google Ads", "Ad Schedule", "Campaign Management", "Google Ads Tips"]
---

> **TL;DR:** To optimize a Google Ads ad schedule, pull 10 weeks of campaign-level data from the "When and Where Ads Showed" report. Block days or hours only when CPA is 2x above the campaign average or CVR drops to half. You need at least 20 conversions in the window first. Service businesses should start by blocking 11 PM to 4 AM.

| Detail | Value |
|, , |, , -|
| Review cadence | Every 4 weeks |
| Data window | 10 weeks (excluding today) |
| Minimum conversions needed | 20 before any adjustment |
| Block threshold (CPA) | 2x or more above campaign average |
| Block threshold (CVR) | 50% or less of campaign average |
| Default first exclusion | 11 PM to 4 AM for service businesses |
| Post-adjustment monitoring | 2 to 4 weeks |

# Google Ads Ad Schedules: The 2x CPA Rule We Use Before Blocking Any Hour

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Reviewing Ad Schedules | Google Ads Management | Ad Schedule](https://www.youtube.com/watch?v=F9rqAHVtiY8).

Most advertisers do one of two things wrong with ad schedules. They ignore them entirely, or they block hours aggressively based on a bad week of data and wonder why impression volume dried up afterward.

The right approach sits in the middle: review every four weeks, use a specific data window, and hold to a defined threshold before touching anything. That's what this post covers.

---

## Where to Find Google Ads Ad Schedule Performance Data

The data you need to review a Google Ads ad schedule lives inside the "When and Where Ads Showed" section in Google Ads. Go to Insights and Reports, click "When and Where Ads Showed," then select the "When Ads Showed" tab. Set the date range to 10 weeks excluding today, then filter to the specific campaign you're analyzing. That gives you a clean, campaign-level performance view broken down by both day of the week and hour of the day.

The 10-week window is deliberate. Shorter and you're reacting to noise. Longer and campaign changes you made months ago have already shifted the data, making your hourly breakdowns unreliable. According to the video, the 10-week window run at the campaign level (every four weeks) is the standard cadence for ad schedule reviews.

One more thing: pull data at the campaign level, not account level. An account-wide view blurs performance patterns across campaigns with completely different schedules and audiences.

---

## The 20-Conversion Minimum: Don't Make Changes You Can't Support With Data

If a campaign doesn't have at least 20 conversions in the 10-week window, skip it. No adjustments. The per-day and per-hour breakdowns become too thin to trust below that threshold. One bad week can make an entire day look broken. A handful of conversions clustered in a short stretch can make 2 AM look bizarrely profitable.

This came up directly in the video: Peterson reviewed two campaigns side by side, checked the conversion count on each, and skipped the one with too few conversions entirely. That's the right call. Making changes based on thin data isn't optimization. It's guessing with extra steps.

If your campaign runs on a lean budget (say, $15 a day), it's still possible to get around 50 conversions over 10 weeks, which is enough to work with. Under 20, you wait, or you extend the lookback window. Extending back to 20 weeks is acceptable when the campaign hasn't had major changes in that period. Just understand that older data carries less weight.

---

## Day-Level Analysis: What Clears the Block Threshold

For day-level ad schedule decisions, compare each day's CPA and CVR against the campaign average, and only block when CPA is two times or more above average, or when CVR is half or less of average. Anything below that threshold stays in. Google needs the room to optimize across all days, and normal variation doesn't justify a block.

Here's the thing: a day running 30% above average CPA looks bad but isn't a block candidate. In the video, Wednesday and Saturday were the two lowest-performing days in one campaign, running approximately 30% above the campaign CPA. Both stayed in the schedule. That kind of variance is expected. The 2x threshold is where the performance gap is large enough that the data is actually telling you something structural, not just showing normal day-to-day fluctuation.

A tight budget sometimes pushes advertisers toward a lower threshold. But if budget is that tight, you probably don't have 20 conversions to work with, which means you're already back at step one.

Before acting on any day that appears to clear the 2x threshold, verify the finding with a longer data window. More on that below.

---

## Hour-by-Hour Analysis: Where Ad Schedule Optimization Actually Pays Off

Hour-level adjustments are where Google Ads ad schedule work earns its keep. Day-level blocks are blunt instruments. Removing a single underperforming hour preserves most of the day's volume while cutting the waste. The same thresholds apply: CPA at 2x or more above the campaign average, or CVR at half or less.

Two things to check before you start analyzing the hourly breakdown:

**Edges of your current schedule.** If you already have an ad schedule running, hours outside it will show near-zero data. Those aren't underperforming slots. They're already blocked. Don't factor their null data into your averages, and don't try to block them again.

**The mid-day competition window.** According to the video, the hours from 11 AM to 3 PM typically carry the heaviest Google search volume for most markets. More competition often means higher CPA in this window. That's not automatically a reason to cut those hours. It's a reason to look carefully at the data rather than assume.

The video showed a clean example: one campaign's 9 AM to 10 AM slot had exactly half the campaign's average CVR and double the average CPA. Both thresholds were met. The fix was to split the existing 2-hour block into two separate 1-hour segments and remove the 9 AM to 10 AM slot. The ad went from running 7 AM to 7 PM to running 7 AM to 9 AM and then 10 AM to 7 PM.

Look for groupings. If 8 PM, 9 PM, and 10 PM all show poor performance, block the chunk as one unit rather than managing three separate adjustments.

---

## Always Double-Check Before You Cut Any Day or Hour

Before acting on a day or hour that clears the 2x threshold in your 10-week view, extend the date range and verify the pattern holds. A 10-week window can make a rough stretch look like a structural problem. Twenty weeks of data tells you whether it actually is.

Peterson is direct about this in the video: "This is exactly why we always double-check our data." Tuesday looked like a clear block candidate in the 10-week view, running at $80 CPA (more than 2x the campaign average). That's a clean threshold breach. But when he pulled 20 weeks of data, Tuesday's average CPA dropped to $20, roughly in line with the rest of the week. Not a structural problem. Just a bad stretch. No block made.

This check is what separates a real finding from a reaction. If the problem holds over both windows, make the cut. If it normalizes in the longer view, leave it in.

One exception: if you've made significant campaign changes in the past few months, older data doesn't reliably reflect how the campaign performs today. In that case, stick with the shorter window and wait for clean data to accumulate before making any cuts.

---

## How to Build the Ad Schedule Once You Have the Data

Once you've identified the hours and days to block, go to campaign settings, find the Ad Schedule section, and click Edit. The interface lets you set time segments in hourly increments. If you're excluding a single hour out of a longer block, you'll need to create two separate segments on either side of it rather than one continuous range.

For new campaigns with no existing schedule, the default starting point for most service businesses is blocking 11 PM to 4 AM. People generally aren't searching for a contractor or a dental practice at 2 AM. Start with that exclusion, let the campaign run for a few weeks, then come back with conversion data before adjusting further. Don't try to build the ideal schedule upfront without data to back it up.

The video also walked through verifying a new schedule after creation: go back to the hourly view and cross-reference the blocked hours against the ones showing near-zero data. That confirms the schedule is live and working as intended.

After creating the schedule, it's worth connecting this to [your broader bid strategy decisions](/blog/google-ads-bid-strategy-progression-90-day-plan/). Ad schedule changes affect when your budget spends, and that interacts with how Google's bidding algorithms learn.

---

## What to Watch After Making Schedule Changes

After adjusting a Google Ads ad schedule, monitor overall campaign CPA and CVR for two to four weeks before touching anything else. Give Google enough time to re-optimize inside the new constraints. One week isn't long enough to draw conclusions.

If performance declines after restricting hours, don't scrap the schedule entirely. Expand it in 4-hour increments instead. Add back four hours in one direction, monitor for two weeks, and assess. If performance improves, keep the expansion. If it doesn't, try expanding in the other direction. The baseline for most service businesses is 11 PM to 4 AM blocked, then adjusted outward or inward from there.

One thing that creates messy data: stacking multiple changes at the same time. Change the schedule and wait. Change bids and wait. When you layer changes on top of each other, you lose the ability to know what actually moved the needle. This comes up frequently when we review self-managed accounts: the change history is noisy, which makes the performance data noisy. For the broader weekly management rhythm this fits into, the [Google Ads management checklist](/blog/google-ads-management-checklist-weekly-system/) lays out how we structure ongoing account work.

---

## FAQ

**How often should I review my Google Ads ad schedule?**

Every four weeks. More frequent and you're reacting to noise. Less frequent and you miss gradual performance shifts, especially in seasonal businesses. Four weeks is enough time for a change to show its effect while keeping the review cadence tight enough to catch real problems before they compound.

**What if my campaign doesn't have 20 conversions in 10 weeks?**

Don't make ad schedule changes. Wait for volume to build, or extend the lookback window to 20 weeks if the campaign hasn't had significant changes. Cutting hours on thin data is more likely to hurt a developing campaign than help it. The 20-conversion threshold exists because below it, per-hour and per-day breakdowns don't have enough statistical weight to act on.

**Should I block hours during peak competition windows like 11 AM to 3 PM?**

Only when the data supports it. High search volume during those hours means more competition and often higher CPA, but it also means more potential conversions. Apply the same 2x CPA and 0.5x CVR thresholds. If a specific hour within that window clears both thresholds and holds up over 20 weeks of data, it's worth blocking. Don't preemptively cut high-traffic hours based on assumptions about competition.

**What do I do if performance drops after I create an ad schedule?**

Expand the schedule in 4-hour increments. Add back four hours on whichever end makes sense given the data, monitor for two weeks, and reassess. Don't wipe the schedule and start over unless multiple expansions fail to improve performance. Removing the schedule entirely after one bad week repeats the same mistake you were trying to fix.

**How do I know if I have enough data to justify an hour-level block?**

The same minimum applies: 20 conversions over the 10-week window at the campaign level. At the hour level, you're working with smaller samples, so look for enough conversions within the specific slot to make the finding meaningful. If a slot has zero or one conversion, that's not enough to confirm it's a problem. It might just be an hour that rarely runs at all.

---

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

*About the author: Peterson Rainey is the founder of [Creekside Marketing](/), a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend across service businesses, healthcare practices, and e-commerce brands. For more on the data thresholds that drive our account decisions, see our breakdown of [when to make changes in Google Ads](/blog/google-ads-when-to-make-changes-statistical-significance/) and our [campaign settings checklist](/blog/google-ads-campaign-settings-checklist/).*
