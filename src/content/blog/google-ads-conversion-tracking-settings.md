---
title: "Fix These Four Google Ads Conversion Tracking Settings Before Smart Bidding Makes Everything Worse"
description: "Four conversion tracking settings quietly corrupt your Google Ads data. Fix them before smart bidding optimizes toward the wrong signals."
date: "2026-08-04"
image: "article-images/creekside-marketing-pros-digital-marketing-strategy.avif"
category: "Google Ads"
tags: ["GoogleAds", "ConversionTracking", "PPC", "AccountSetup"]
---

> **TL;DR:** Four conversion tracking settings quietly corrupt Google Ads data in nearly every account we audit: a 30-second call threshold that logs hang-ups as conversions, a Count set to Every for lead forms, a conversion window wider than your actual sales cycle, and the same action tracked twice as primary. Each one teaches smart bidding to optimize toward the wrong signal.

| Setting | Common Mistake | Correct Approach |
|---------|---------------|-----------------|
| Phone call duration | 30 seconds (default) | 60+ seconds for most service businesses |
| Count for lead generation | Every | One |
| Click-through conversion window | Too wide for business cycle | Matched to actual sales cycle |
| Primary conversion tracking | Same action tracked twice | One tracking source per conversion type |
| Tracking method | Via Google Analytics relay | Directly via Google Tag Manager |

# Fix These Four Google Ads Conversion Tracking Settings Before Smart Bidding Makes Everything Worse

Google Ads conversion tracking sounds like a one-time setup task. Configure the actions, connect the tags, move on. But the conversion tracking section is one of the most consistently misconfigured parts of any account we audit across $20M+ in managed ad spend. And unlike a bad keyword or a weak ad, bad conversion tracking does not just waste budget. It teaches the algorithm to optimize toward the wrong signals. Every downstream decision, from bid strategy to audience targeting, rests on conversion data quality.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Optimizing Google Ads Conversion Tracking for Better Results](https://www.youtube.com/watch?v=asXcBBLtKy4).

---

## Mistake 1: A 30-Second Phone Call Threshold That Counts Hang-Ups as Conversions

Setting the call duration threshold to 30 seconds makes Google count calls that could not possibly have converted. For most service businesses, 60 seconds is the practical floor. The right threshold is the shortest call length that still has a realistic chance of turning into a client, and that varies significantly by business type.

The 30-second default is not random. It makes sense for a narrow category of businesses. A towing company is a good example: if someone calls a tow operator and stays on for 30 seconds, they are almost certainly booking a tow. The decision is immediate and the call almost always closes. But that logic breaks down for most other service businesses. Law firms, home service companies, dental practices, med spas -- any business where a sale involves qualifying and relationship-building on the phone needs more time than 30 seconds to have any chance of converting.

When the threshold is too low, Google sees a call that lasted 28 seconds as a conversion. Smart bidding reads that as a win and looks for more traffic like that caller. You end up with more 28-second calls, more apparent "conversions," and a cost-per-conversion metric that looks strong but does not reflect actual clients.

The fix is to pull your actual call data and compare calls that became clients against calls that did not. The lowest duration where conversion probability rises is your threshold. For most service businesses, that number lands at or above 60 seconds.

![Phone call duration thresholds: 30-second default vs. 60-second minimum for most businesses](/article-images/google-ads-conversion-tracking-settings-call-duration.svg)

## Mistake 2: Count Set to "Every" When You Are Tracking Leads, Not Purchases

The Count setting controls whether Google credits one conversion or multiple conversions when a single person triggers the same conversion action more than once. Every is the right setting for e-commerce purchases. It is wrong for lead generation. Most service businesses should set this to One.

Here is the scenario that illustrates why: say you run a lawn care company. A prospective client calls three times over the course of a week to ask questions before deciding. That is one prospective client, not three conversions. But if Count is set to Every, Google records three conversions from a single lead. Your cost-per-conversion drops by two-thirds on paper. Smart bidding reinforces the behavior that generated those three contacts.

The data looks like it is improving. The business is not. You are tracking engagement volume, not lead acquisition, and smart bidding cannot tell the difference without a clean signal from you.

For purchases, Every is correct. Each transaction is a discrete business event and should count separately. But for call-ins, form submissions, or any action where the goal is acquiring a new client, One is the right setting. It keeps your conversion count tied to the number of unique people who reached out, not the number of times they reached out.

## Mistake 3: A Conversion Window Wider Than Your Actual Sales Cycle

The click-through conversion window tells Google how far back to look when attributing a conversion to an ad click. A window set wider than your actual sales cycle means Google takes credit for conversions it did not drive. Your account looks like it is outperforming reality, and budget decisions get made against inflated attribution.

The rule is straightforward: match the window to how long your sales process actually takes.

For a lawn care company, someone clicking your ad and then calling two months later is not a conversion your Google Ads drove. They found you some other way. A 14-day window for a business like that keeps attribution grounded in realistic buyer behavior. Callers actually moved by the ad will typically act within a week or two.

For businesses where closing a deal takes longer, the window should expand to match. If your typical sales cycle runs 30 days from first contact to signed contract, a 45-day window gives a realistic 15-day buffer for Google to attribute the conversion to the original click. That attribution is legitimate because the process actually takes that long.

For businesses with genuinely long cycles, like reverse mortgage where the sales process can run 90 days or more, a 60-to-90-day window is appropriate. In those cases, a delayed conversion is legitimately connected to an ad click that happened months earlier. The process is just that long.

The problem is when a business with a short decision cycle uses a long conversion window. Every click that happens and then converts over the following weeks or months, regardless of whether Google Ads actually drove it, gets attributed to the campaign. Cost-per-conversion looks low. Budget gets allocated based on phantom credit.

![Conversion window alignment by sales cycle: lawn care 14 days, service business 45 days, reverse mortgage 60-90 days](/article-images/google-ads-conversion-tracking-settings-window.svg)

## Mistake 4: Tracking the Same Conversion Action Twice as Primary

If the same conversion action appears twice in your Google Ads account with both set as primary conversions, Google counts two conversions every time the action fires. Your conversion volume doubles in the data. Your cost-per-conversion is cut in half in the reporting view. Smart bidding then targets a performance baseline that does not exist in reality.

This typically happens after an account change: someone adds a second tracking method for the same action, or a conversion gets duplicated during a restructure, without removing or demoting the original. The result is a campaign that appears to outperform reality, with optimization decisions anchored to inflated numbers.

The fix is to audit your conversion actions. For each distinct conversion type (phone call, form submission, purchase), confirm it appears exactly once as a primary conversion. If you see duplicates, determine which tracking source is more reliable and set the other to secondary or remove it entirely.

On tracking sources: we recommend going directly from your website to Google via Google Tag Manager rather than routing through Google Analytics. The Google Analytics path adds an extra relay. Your conversion data has to travel from your website to Google Analytics, then from Google Analytics to Google Ads. Each handoff introduces a point where attribution can get mixed up. Direct tracking through Google Tag Manager eliminates that relay and produces cleaner, more accurate data for smart bidding to work from.

For a broader look at settings that commonly get misconfigured at the campaign level, see [the most common Google Ads campaign setting mistakes and how to fix them fast](/blog/the-most-common-google-ads-campaign-setting-mistakes-and-how-to-fix-them-fast/).

## Why Google Ads Conversion Tracking Quality Is the Starting Point for Everything Else

Every bid adjustment smart bidding makes depends on the quality of the conversion data it has seen. A campaign optimizing toward 30-second hang-ups, inflated lead counts from repeated contacts, over-attributed clicks, and duplicated primary conversion events is not optimizing toward your actual business results. It is getting very efficient at hitting a target that does not represent real clients.

These four settings are not advanced optimization. They are foundational. And because they shape every bid adjustment, audience expansion decision, and budget allocation, leaving them misconfigured compounds across the entire account over time. An account with accurate conversion tracking and average creative will often outperform an account with polished creative and corrupted tracking, because the algorithm has clean signals to work with.

The fastest check: open your conversion actions in Google Ads. Verify your call duration threshold against actual call data from clients who converted. Confirm Count is set to One for lead actions and Every only for purchase tracking. Match your conversion window to your real sales cycle. Confirm no action is tracked twice as primary. Then verify your tags are firing directly through Google Tag Manager, not through a Google Analytics relay.

For accounts where conversion tracking issues go deeper, including tags that are misconfigured or not firing at all, see our post on [auditing Google Ads conversion tracking and catching broken tags](/blog/the-fastest-way-to-audit-google-ads-conversion-tracking-and-catch-broken-tags/). If you want a direct review of your account's conversion tracking setup, the [Creekside 10K Profit Audit](/10k-profit-audit/) covers tracking quality as a core part of every account analysis.

## Frequently Asked Questions About Google Ads Conversion Tracking Settings

**What phone call duration should I use for Google Ads call conversion tracking?**

For most service businesses, 60 seconds is the practical minimum. Use your actual call data to find the lowest duration where callers with genuine buying intent consistently appear. For emergency services like towing, 30 seconds may be appropriate because even a short call typically leads to a booking. For law firms, dental offices, and most other service categories, 30 seconds captures too many unqualified contacts to give smart bidding useful signal.

**Should Google Ads Count be set to One or Every for lead generation?**

Set Count to One for lead generation. This ensures each unique lead is counted once, regardless of how many times they call or submit a form. Count set to Every inflates conversion volume, lowers cost-per-conversion artificially, and gives smart bidding a distorted signal to optimize against. Only use Every for e-commerce purchase tracking where each transaction is a genuinely separate event.

**How do I choose the right conversion window in Google Ads?**

Match it to how long your actual sales process takes. If your conversion action is a phone call-in and most callers decide within days, a 14-day window is a sound starting point. If your conversion is a closed deal with a 30-day sales cycle, use 45 days to build in a realistic buffer. For businesses with 90-day-plus cycles, 60 to 90 days is appropriate. The window should reflect real buyer behavior, not a default that over-attributes conversions to Google Ads.

**What happens when you track the same Google Ads conversion action twice as primary?**

Every conversion fires twice in your data. Conversion volume doubles. Cost-per-conversion is halved in the reporting view. Smart bidding then adjusts bids to reach that inflated baseline, meaning it is optimizing for a performance level that does not reflect reality. Audit your conversion actions and confirm each distinct action type appears exactly once as a primary conversion, with a single reliable tracking source.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, where the team manages $20M+ in paid ad spend across Google Ads and Meta Ads. He works directly in client accounts and runs conversion tracking audits as part of every new account onboarding. [Request a free Google Ads audit](/10k-profit-audit/) to get a direct read on whether your conversion tracking is giving smart bidding the signals it needs.
