---
title: "Google Ads Keyword Research With SEMrush: How to Calculate Real CPCs, Score Every Keyword, and Build Your Negative List in Minutes"
description: "How to research Google Ads keywords with SEMrush: the 8 data points we track, our CPC averaging formula, and the negative keyword shortcut most agencies skip."
date: "2026-09-08"
image: "article-images/blog-card-scatter.svg"
category: "Google Ads"
tags: ["Google Ads", "Keyword Research", "SEMrush", "Negative Keywords", "Campaign Setup"]
---

> **TL;DR:** For every Google Ads keyword we research using SEMrush and Google Ads Keyword Planner, we pull 8 specific data points: estimated average CPC (calculated from the top-of-page bid range), peak months, valley months, SEMrush volume, keyword difficulty, SEMrush CPC, organic position, and organic traffic %. We also run negative keyword research once per keyword group, not for every variation. This is the exact workflow.

| Metric | Source | Purpose |
|, , |, , |, , -|
| Estimated Avg CPC | Google Ads (avg of bid range) | Pre-launch budget benchmark |
| Peak Months | Google Ads trends | When to run full budget |
| Valley Months | Google Ads trends | When to scale back or pause |
| SEMrush Volume | Keyword Magic Tool | Monthly search demand |
| PKD (Keyword Difficulty) | Keyword Magic Tool | Organic competition level |
| SEMrush CPC | Keyword Magic Tool | Cross-reference against Google estimate |
| Organic Position | Domain Overview | Whether SEO is already capturing this traffic |
| Organic Traffic % | Domain Overview | Dependence on paid vs. organic |

## Why Google Ads Keyword Research With SEMrush Requires Both Tools

Before launching any campaign, we run a structured Google Ads keyword research process using SEMrush and Google Ads data together. Each keyword gets the same 8 data points logged into a tracker, giving us a realistic CPC estimate before we spend anything, identifying peak and valley months, and building the negative keyword list that prevents wasted spend from day one. Skipping this step means guessing, and guessing is how campaigns burn through budget in month one without results to show for it.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Quick Google Ads Keyword Research Tracker Refresher](https://www.youtube.com/watch?v=G0XNCnSn19U). It is the accelerated version of our full keyword research SOP, intended as a quick reference once you know the process.

## Step 1: Calculate Your Estimated Average CPC From Google Ads

The first data point comes from inside Google Ads, not from a third-party estimate. Search for your target keyword inside the Google Ads keyword research interface and look at the top-of-page bid range. Google provides a low end and a high end. Average the two to get a realistic CPC benchmark before your campaign generates real auction data.

The formula: **(low bid + high bid) / 2 = estimated average CPC**

For "skydiving prices," we pulled a low bid of $0.08 and a high bid of $0.43. The calculation: (0.08 + 0.43) / 2 = approximately $0.26 per click. For "tandem parachute," the range worked out to approximately $1.22 per click. Those are meaningfully different numbers that affect how you allocate budget across keyword groups and what you can realistically promise in terms of click volume.

Most advertisers take Google's single suggested bid at face value. Averaging the range gives you a more defensible midpoint for planning conversations with clients or for setting your own expectations before launch.

## Step 2: Identify Peak and Valley Months for This Keyword

Google Ads shows monthly search volume trends in the keyword research interface. These two fields in your tracker directly control when you run the campaign at full budget versus when you scale back or pause. Identify which months show volume peaks and which show valleys before you build the campaign schedule.

For skydiving-related keywords, June and July were the clear peak months. The rest of the year ran significantly lower. Logging both peak and valley months in your tracker before launch means you can structure the campaign schedule around actual search demand rather than guessing month by month when performance shifts.

If a client is running this campaign at the same budget year-round without accounting for seasonality, they are almost certainly overspending during low-demand periods and underinvesting during peak ones. The trend data in Google Ads makes this avoidable.

## Step 3: Pull Volume, Difficulty, and CPC From SEMrush Keyword Magic Tool

Go to SEMrush Keyword Magic Tool and enter the same keyword. Run the search in the correct geographic region, for US campaigns, confirm the US dataset is selected before pulling numbers. Three data points come from this screen: volume, PKD, and SEMrush CPC. Together they cross-reference your Google Ads estimate and give you a fuller picture of the competitive landscape before you commit budget.

For "skydiving prices," SEMrush showed a monthly volume of 2,400, a PKD (Personal Keyword Difficulty) of 58, and a CPC of $0.33. Volume tells you whether enough search demand exists to support your budget. PKD gives competitive context even on the paid side. The SEMrush CPC of $0.33 versus our Google Ads calculation of $0.26 is close enough to validate both numbers and move forward with confidence.

Also check the intent label. SEMrush classifies keywords as informational, navigational, commercial, or transactional. For "skydiving prices," the intent came back as navigational, meaning the searcher is looking for a specific brand or site rather than ready to book. Note it in your tracker. Navigational intent does not automatically disqualify a keyword, but it changes how you evaluate conversion expectations.

## Step 4: Check Organic Position and Traffic Percentage in SEMrush Domain Overview

Go to SEMrush Domain Overview, enter the client's domain, and search for the keyword. You are looking for two numbers: the current organic position and the organic traffic percentage. These tell you how much of this keyword's traffic the client is already capturing without paid spend, which changes how you evaluate the paid opportunity before committing budget.

An organic position of 79 for "skydiving prices" means the site is buried on page seven or eight, contributing essentially nothing to traffic. Log 0.1% for organic traffic percentage to reflect trace volume without overstating it. When a site is already ranking in positions one through five organically, the math on paid spend changes because you may be cannibalizing free traffic you were already getting.

If the exact keyword does not appear in SEMrush Domain Overview, generalize from the closest related keywords the domain does rank for. You need a directional number for the tracker, not a precise figure. An approximate position based on related keywords is more useful than a blank cell.

## Step 5: Build Your Negative Keyword List With SEMrush Keyword Strategy Builder

Go to SEMrush Keyword Strategy Builder and enter the primary keyword for your campaign. SEMrush generates a grouped list of related searches organized by theme. Your job is to go through those themes and identify which ones you would never want your ads to appear in.

For a skydiving campaign, anything related to accidents, fatalities, or incident reports should become negative keywords before launch. Someone searching for "skydiving incidents" or accident-related terms is doing research, not looking to book. Adding those terms before the campaign goes live means you are not paying for those clicks from day one.

The key insight from Creekside Marketing managing $20M+ in ad spend: you do not need to run the Keyword Strategy Builder for every individual keyword variation in your list. Run it once or twice for the primary keyword. The negative keywords that surface from that exercise will cover the vast majority of irrelevant searches across the entire keyword group. Two or three passes is sufficient before launch. Going through the Builder for each variation after that produces diminishing returns because the lists start overlapping heavily.

One more critical point: do not add location keywords to your negative keyword list from SEMrush. Geography is handled through Google Ads location targeting settings, not keyword exclusions. If you are targeting Tennessee, you do not need to add "Hawaii skydiving" as a negative keyword. Your geo settings handle that, and cluttering your negative list with location terms wastes time without adding protection.

Export the completed negative keyword list from SEMrush as an Excel file, review it, and add the relevant terms to your campaign before it goes live.

## How Fast Does This Process Actually Get?

The first keyword you research this way might take 10 to 15 minutes as you learn where each data point lives and what you are looking for. By the second or third keyword, the workflow compresses because you know exactly what to pull and where to find it. By the fifth or sixth keyword, you can complete the full 8-point research process in around 6 to 7 minutes per keyword.

According to the Creekside Marketing YouTube walkthrough, the second keyword in a tracker session runs noticeably faster than the first, and the pattern holds from there. The process is identical each time. The time savings come from familiarity, not shortcuts. For a campaign targeting 10 to 15 keywords, this is a few hours of upfront research. That investment directly reduces wasted spend in the first 30 days, which is when most campaigns without this foundation burn through budget without results.

For a deeper walkthrough on how we build the full keyword list before this research step, see our guide on [how to build a Google Ads keyword list and negative keyword plan using SEMrush and Keyword Planner](/blog/how-to-build-a-google-ads-keyword-list-and-negative-keyword-plan-using-semrush-keyword-planner/). For what to do with bidding once the campaign is live and generating data, see [the Google Ads 90-day bid strategy ladder](/blog/google-ads-bid-strategy-progression-90-day-plan/).

## Frequently Asked Questions

**Does SEMrush CPC always match what Google Ads shows?**
Not always. SEMrush aggregates auction data independently and its estimates can run 10 to 30 percent higher or lower than what you see in Google Ads. When both are in a similar range, you have good confidence in your estimate. When they diverge significantly, investigate the keyword further before committing budget.

**Do I need to run this research for every keyword in the list?**
Research your core keywords fully. If you are bidding on several close variations of the same search intent, run the full process on the most commercially relevant version and note that the data applies broadly across the group. Variations on the same theme will have similar CPC ranges and seasonal patterns.

**What if a keyword has low SEMrush volume but strong buying intent?**
Low volume does not disqualify a keyword, especially for high-ticket services. A keyword generating 100 monthly searches with strong buyer intent and a $500 conversion value can outperform a high-volume informational term that converts at a fraction of a percent. Look at the full data picture, not just volume in isolation.

**Should I repeat this research process after the campaign launches?**
Run it at launch. Revisit it when you are adding new keyword groups, not just expanding match types on existing ones. The negative keyword list specifically needs ongoing attention as the campaign generates new search term data that reveals irrelevant queries Google matched against your ads.

**What if the client domain does not show up in SEMrush Domain Overview for the keyword?**
Generalize from the closest related keywords the domain does rank for. You need a directional number for the tracker, not an exact figure. If there is zero organic presence, log it as such and note that paid traffic will be the only search channel for this keyword until organic catches up.

---

If you want more breakdowns like this, I write a weekly newsletter about what is actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the author:** Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in ad spend across Google Ads and Meta Ads.