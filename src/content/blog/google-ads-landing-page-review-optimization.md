---
title: "We Audit Landing Pages in Every Google Ads Account Every Two Weeks. Here's How."
description: "The exact process we run in Google Ads to find landing pages draining budget, the 1.5x CPA rule, where to find underperformers, and how to fix them."
date: "2026-10-17"
image: "article-images/blog-card-funnel.svg"
category: "Google Ads"
tags: ["Google Ads", "Landing Pages", "Conversion Optimization", "Account Management"]
---

**TL;DR:** To review Google Ads landing pages, go to Insights and Reports, then select Landing Pages. Set an 8-week date range and filter by campaign. Flag any page where CPA is 1.5x the campaign average or conversion rate is below two-thirds of average. Then replace that URL everywhere it appears in assets and ads, and monitor performance for 2 to 4 weeks.

| Metric | Threshold |
|, , |, , , -|
| CPA flag threshold | 1.5x above campaign average CPA |
| Conversion rate flag threshold | Below 2/3 of campaign average |
| Data window | 8 weeks |
| Review cadence | Every 2 weeks, per campaign |
| Replace with | Homepage or a higher-performing relevant page |
| Monitor after change | 2 to 4 weeks |

---

Learning how to review Google Ads landing pages is one of the fastest ways to find and fix budget waste. Inside Google Ads, there is a landing pages report that shows cost per conversion and conversion rate broken out by every URL you are sending traffic to. Most advertisers never look at it. We look at it every two weeks, on a schedule, across every client account we manage.

This post is based on a walkthrough Peterson published on the Creekside Marketing YouTube channel: [Reviewing Ad and Asset Landing Pages in Google Ads](https://www.youtube.com/watch?v=yKA0PuuaojY). We run this exact process in every account we manage.

## How to Find the Landing Pages Report in Google Ads

The landing pages report is inside Google Ads under Insights and Reports in the left navigation. Click that section, then select Landing Pages. Filter to the specific campaign you want to review. Set your date range to 8 weeks before looking at any numbers. Eight weeks gives you enough conversions per URL to distinguish a real pattern from noise. Anything shorter and you are reacting to randomness. Anything longer and recent changes you made get buried under stale data.

You are looking at two columns: cost per conversion per URL, and conversion rate per URL. Compare both numbers to the campaign-level averages.

## The Two Thresholds That Tell You a Landing Page Has a Problem

Two numbers determine whether a landing page needs action. First: any URL where CPA is 1.5x higher than the campaign average is flagged. If your campaign average CPA is $50 and a specific URL is running $80 or more over 8 weeks, that page is dragging performance down. Second: any URL where conversion rate is below two-thirds of the campaign average gets flagged. If your campaign converts at 6% and one page converts at 3%, something is wrong with that page.

Both thresholds matter independently. A page can have high CPA even if it converts occasionally. A page can have low conversion rate even if the few conversions it gets are cheap. Either problem is worth fixing.

One important caveat: only act on URLs that have meaningful click and impression volume, plus at least a couple of conversions over the 8 weeks. A URL with two clicks and one conversion tells you nothing. You need enough data to trust the number before making changes.

## The Part That Trips Up Most Google Ads Managers

Here is something counterintuitive that comes up every time we train on this process: the asset-level CPA data in Google Ads does not tell you what the landing pages report tells you. They measure different things, and confusing them leads to wrong decisions.

When you look at a site link asset and see its cost per conversion, that number reflects how the ad performed when that asset appeared alongside your headlines and other elements. It captures the combination. It does not isolate the landing page URL itself.

The landing pages report isolates the URL. A site link can show a perfectly acceptable asset-level CPA while the destination URL is a poor performer. That happens when the asset is pairing with strong headlines or appearing in high-intent searches. The clicks that make it through convert, but not because of the page. The landing pages report removes the noise and shows you what the page actually does when traffic arrives.

Use the landing pages report to judge URLs. Use asset-level data to judge assets. Do not cross them.

## How to Find Every Spot Where a Bad Landing Page Is Being Used

Once you flag a URL as a poor performer, you need to find every place that URL appears in the campaign. There are two places to check: assets (specifically site links) and ads. Check both before making any changes. Missing one means you're still sending traffic to the same underperforming page through a different path.

For assets, go to the Assets section and filter the view to site links. Hover over each asset to see its destination URL. Any site link pointing to the flagged URL needs to be updated. Set your filter to enabled assets only. No reason to edit paused assets that are not serving impressions.

For ads, check each ad group within the affected campaign and confirm no active ad is using the flagged URL as its final URL.

You need to check both because the same bad URL can be attached to a sitelink pointing one direction and an active ad pointing another. Fix one and miss the other, and you are still paying for traffic to an underperforming page. For more on how sitelinks work across a campaign, see our guide on [how to set up Google Ads sitelinks properly](/blog/google-ads-sitelinks-setup-guide/).

## What to Replace a Bad Landing Page With

The right replacement depends on what you already have in the account. Most of the time, the best option is your homepage, provided the homepage is not also running above the CPA threshold. Check its CPA in the landing pages report before choosing it as your fallback. If it's performing at or below average, use it.

Here is the logic: if your homepage CPA is at or below the campaign average, it is already working. It touches a wide range of traffic types and converts across them. Swapping a failing specific page to the homepage is a safe test. You are not guessing that something new will work better. You are running traffic to something you already know converts.

The replacement should also be relevant to what the original page was trying to show. If the flagged URL was an "areas served" page, the replacement should address the same underlying intent, either through the homepage or another page that covers service area information without the conversion problem.

If the homepage CPA is also running high, you have a different problem. That is a conversion rate issue on the website itself, and swapping URLs inside Google Ads will not fix it.

## How to Make the Change Without Breaking Anything

In the Assets section, find the site link that uses the flagged URL. Click Edit, then Quick Edit. Delete the URL in the final URL field. When you clear the final URL from a site link, clicks go to the campaign-level or account-level destination, which is typically the homepage. Save the change.

Work through every enabled asset pointing to that URL. Then switch to the ads view and confirm no active ad has the flagged URL set as its final URL.

In a well-structured campaign, this usually means editing two or three assets and checking a handful of ads. The whole review takes 10 to 15 minutes once you know where to look and have the thresholds memorized.

## Logging Every Change and Monitoring What Happens Next

Document every change before you close the tab. Log the flagged URL you removed, the replacement URL you used, which specific assets or ads were affected, and the date of the change. A spreadsheet works fine. So does a task note in your project management system.

You need this record for two reasons. First, if performance drops after the change, you need to know exactly what to revert. Second, this data builds over time into a real picture of which landing pages consistently outperform across different campaigns and different traffic types.

After the change, wait 2 to 4 weeks before drawing any conclusions. If the asset or ad that previously used the flagged URL shows a CPA spike or a conversion rate drop during that window, revert and note it. If performance holds or improves, you just made a real impact on the account at the asset level. For more on reading performance data before pulling the trigger on changes, see [how we decide when to act on Google Ads performance data](/blog/google-ads-when-to-make-changes-statistical-significance/).

## Why We Run This Exact Review Every Two Weeks

Two-week intervals are not arbitrary. According to Creekside Marketing's account management process, built across $20M+ in managed ad spend, monthly reviews are too slow to catch problems before they compound. Weekly reviews create too many changes before you have clean post-change data to evaluate. Two weeks hits the right balance.

Most accounts we audit during onboarding have at least one underperforming landing page that has been running for six months or longer. Nobody ran the review. The data was sitting right there in the landing pages section, clear as anything, and nobody checked it. Fixing that one page often drops CPA by 10 to 20 percent in that campaign. Sometimes more.

Look, the tool is already inside your Google Ads account. This is not an external audit service or a third-party integration. It is a section most advertisers scroll past. Running a 15-minute review every two weeks, per campaign, is one of the highest-ROI habits in paid search management.

## Frequently Asked Questions

**How many conversions does a landing page need before you flag it?**

There is no single cutoff number, but "a couple of conversions" over 8 weeks is the minimum before making a judgment. A URL with 200 clicks and 1 conversion at three times the average CPA is worth acting on. A URL with 4 clicks and 0 conversions tells you nothing about the page. Volume matters.

**Should you delete the bad landing page from your website?**

No. In Google Ads you are changing which URL an asset or ad sends traffic to. You are not taking the page offline. The web page itself can stay where it is. Just remove it from active assets and ads so traffic stops going there.

**What if both the specific page and the homepage are underperforming?**

Then you have a website conversion problem, not a Google Ads problem. Swapping URLs inside the ad account only works when you have at least one URL that is already converting at a reasonable rate. If the homepage is also running 1.5x above the average CPA, talk to the client about what is happening on the website before continuing to push traffic there.

**Why does the asset-level CPA differ from what the landing pages report shows?**

Asset CPA reflects how ads performed when that specific asset appeared. The landing pages report reflects what happened after someone clicked through to that URL. A sitelink can show a solid asset-level CPA because it pairs with strong headlines and appears in high-intent searches. But the page itself might convert poorly for the traffic that actually arrives. The two metrics measure different things.

**Do you need to run this for every campaign or just the ones with problems?**

Every campaign gets this review. Each campaign has its own traffic type, its own audience, and its own average CPA. A landing page that works well for one campaign's audience might fail for another. Running it per campaign gives you a real picture of what is happening in each one rather than an aggregated average that hides individual problems.

---

Most accounts have a landing page problem hiding in plain sight. The review process is simple: check the report every two weeks, flag URLs at 1.5x CPA or below two-thirds conversion rate, find every place that URL appears, replace it with something that works, and log every change. Then wait 2 to 4 weeks and see what happened.

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing and manages Google Ads and Meta Ads campaigns for clients across dental, medical, legal, home services, and e-commerce. Based on $20M+ in managed ad spend, he shares the actual processes his team uses to run accounts.