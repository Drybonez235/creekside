---
title: "The AI Method That Finds Underperforming Google Ads Locations Without Scripts or Spreadsheets"
description: "How to use AI to analyze Google Ads location performance across all campaigns at once. A simple CSV workflow that saves hours per week. No scripts required."
date: "2026-07-28"
image: "article-images/google-ads-location.avif"
category: "Google Ads"
tags: ["Google Ads", "AI Workflow", "Location Targeting", "Data Analysis", "Campaign Optimization"]
---

> **TL;DR:** Google Ads only shows location performance by individual campaign, making cross-campaign comparisons a manual grind. By downloading a 90-day location CSV with 4 metrics and uploading it to Claude with a structured prompt, we identify underperforming locations across all campaigns in under 10 minutes. Target metric: 8x ROAS. Minimum spend before cutting a location: $80.

| Metric | Value |
|--------|-------|
| Manual location analysis time | 2-4 hours for multi-campaign accounts |
| AI workflow time | Under 10 minutes |
| CSV metrics required | 4: impressions, cost, clicks, conversions |
| Recommended date range | 30-90 days (90 days for lower-spend accounts) |
| ROAS goal (example account) | 8x (conversion value over cost) |
| Minimum spend before cutting a location | $80 (for a $40 average purchase price) |


Managing Google Ads location data across multiple campaigns is one of the most time-consuming parts of account management. The platform only shows location performance by campaign, which means comparing how a city or country performs across branded, unbranded, and shopping campaigns simultaneously requires pulling each view separately and reconciling them manually. We use an AI location analysis workflow in Google Ads that collapses that process from hours to minutes.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [AI Location Settings For Google Ads](https://www.youtube.com/watch?v=4FJPwoYho94).

## Why Single-Campaign Location Reports Give You a Misleading Picture

Looking at Google Ads location data inside a single campaign creates a misleading picture. A location can appear profitable in your branded campaign while simultaneously draining budget in every unbranded prospecting campaign. Without a cross-campaign view, one high-intent campaign inflates the location's apparent ROAS, hiding what paid demand generation in that market is actually returning.

This is what we call the stat-padding problem: if your branded campaign delivers 12x ROAS in Germany because German customers who already know your brand are searching you out and buying, that number dominates any view that combines branded and unbranded performance. Your unbranded prospecting campaigns might be returning 2x ROAS in Germany. The blended view hides that reality. You keep investing in Germany thinking it is a top performer, when the truth is only your branded traffic there is working.

The fix requires analyzing all non-branded campaigns together and seeing the true blended return. Google Ads does not surface that view natively. That is exactly the gap the AI workflow closes.

For context on how location targeting settings work in the first place, see our post on [how to set Google Ads location targeting properly and why most accounts get it wrong](/blog/how-to-set-google-ads-location-targeting-properly-and-why-most-accounts-get-it-wrong/).

![Four-step AI location analysis workflow: Download CSV, Upload to LLM, Prompt with Context, Identify Underperformers](/article-images/google-ads-location-data-ai-analysis-workflow.svg)

## The Exact AI Workflow for Google Ads Location Analysis

Download the location CSV for the last 30 to 90 days. Trim it to four columns: impressions, cost, clicks, and conversions. Upload to Claude with a prompt specifying your campaign types, ROAS goal, and business context. Ask a spend-filtered follow-up to identify underperforming locations with enough data to evaluate.

Here is what that looks like in practice.

**Step 1: Download the location report as a CSV.**

In Google Ads, go to the Locations report and click the download button. Select CSV format. Filter to the last 30 to 90 days. Use 30 days for high-spend accounts with plenty of data. Use 90 days for lower-spend accounts that need more history to draw conclusions. The reason to cap high-spend accounts at 30 days: large language models can overweight data that appears at the beginning of very large files, which reduces analysis quality on the tail end. Keep the dataset focused.

**Step 2: Trim the CSV to four metrics.**

The only columns you need are impressions, cost, clicks, and conversions. Every metric you might want (CTR, CPA, ROAS) can be calculated from those four. Extra columns add noise without adding analytical value. Remove everything else before uploading.

**Step 3: Upload to Claude with a structured prompt.**

Upload the file and give the model the account context it needs to interpret the data accurately. Structure the prompt to include:

- What type of business is running the ads (industry, product type, domestic versus international targeting)
- Which campaigns are branded versus unbranded, and a clear instruction to exclude branded from the analysis
- The key performance metric you care about (for e-commerce accounts with revenue tracking: conversion value over cost, not just conversion count)
- Your specific ROAS goal
- A request for the model to ask you clarifying questions before finalizing its analysis

A real example prompt: "Please analyze this location report from a Google Ads account for an e-commerce business running international ads. We have branded and unbranded campaigns. Please ignore the branded campaign data and show me the average performance by location across all other campaigns. Tell me which locations are performing best and which are not. The metric we care about is conversion value over cost. Our goal is an 8x ROAS. Feel free to ask any questions that would help you give a better analysis."

One practical technique that consistently improves results: use speech-to-text to deliver your prompt. Talking naturally produces longer, more contextually rich prompts than typing. More context means more accurate analysis. The extra thirty seconds is worth it.

**Step 4: Follow up with a spend-filtered question.**

After the model returns its initial analysis, ask a targeted follow-up: "Out of all these locations, which ones have spent more than $80 and have a ROAS below 8?" This applies a dual filter automatically across every row of location data at once: enough spend to have meaningful results, combined with clear underperformance against the ROAS target. The result is a shortlist of candidates for review, not an overwhelming list of every geography in the account.

## How to Set Your Spend Threshold Before Making Location Decisions

The right spend threshold before pausing a location depends on your average purchase price. For an account with a $40 average purchase, an $80 minimum represents roughly two conversions worth of data. That is generally not enough to be confident in a permanent exclusion decision, particularly when the account runs significant budget and can afford to keep testing.

That threshold is a floor for putting a location on a review list, not a trigger for pausing it immediately.

When we run this analysis, locations that have cleared the spend minimum but remain below the ROAS target become candidates for a deeper question. Is the underperformance consistent across all non-branded campaigns, or isolated to one? Is this a market the account entered recently, where it is too early to judge? Is there a creative or offer mismatch specific to this region, rather than a structural demand problem? Those questions require human judgment and account context. What the AI workflow does is surface the right locations to apply that judgment to, without spending hours cross-referencing campaign data manually.

According to Creekside Marketing's analysis across $20M+ in managed ad spend, this kind of spend-weighted cross-campaign location review consistently identifies budget leakage that single-campaign reporting misses.

![Location performance decision matrix: spend threshold vs. ROAS target](/article-images/google-ads-location-data-ai-analysis-roas-chart.svg)

## Why This Workflow Beats Scripts for One-Time Location Reviews

Google Ads scripts and Looker Studio dashboards automate recurring reports efficiently, but they require meaningful setup time to write, test, and maintain. For a one-time analysis where you want to ask follow-up questions based on what you actually find in the data, an LLM workflow is faster to run and more flexible. Script output is fixed. AI conversation is iterative.

The iterative capability is where AI has no equivalent in scripting. After the initial analysis returns, you can ask follow-up questions specific to that account: Which of these underperforming locations is a market we just entered? Which ones have the highest impression share but the weakest conversion rates? A script cannot hold that kind of contextual account knowledge. An LLM can, and its ability to ask you clarifying questions back is a genuine feature. As Peterson notes in the source video, prompting the model to ask you questions before finalizing its analysis surfaces assumptions you would have missed if you had pre-specified everything yourself. There are things you do not know you need to tell the model, and good prompting technique surfaces those gaps.

For accounts managing multiple clients, this workflow saves hours every week. Running the review manually across five accounts, campaign by campaign, takes most of an afternoon. Running it with AI takes a fraction of that time.

For how we apply similar AI-assisted approaches in our day-to-day client management, see our post on [how our Google Ads specialist uses AI to get client-ready in 3 minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/).

## Frequently Asked Questions About AI-Assisted Google Ads Location Analysis

These questions come up consistently when teams start using this workflow. The short answers below cover the most common edge cases, from model selection to data volume limits, so you can adapt the process to your specific account structure and targeting approach.

**Which AI model gives the best results for location data analysis?**

Any capable large language model handles this workflow well, including Claude, GPT-4, and Gemini. The model matters less than the quality of the prompt. More context about your account, campaigns, and performance targets produces more accurate analysis regardless of which model you use.

**How many rows of location data can I upload before the model struggles?**

For most accounts, country or regional-level data uploads cleanly. If you are running city-level targeting across dozens of markets, filter the CSV to country level first, identify the countries worth drilling into, then upload city-level data for those specific markets in a separate conversation.

**Should I include branded campaign data in the file?**

Yes. Upload the full location report, but instruct the model in the prompt to exclude branded campaigns from the performance analysis. Having that data available gives the model context to answer follow-up questions about branded performance if you need it.

**How often should we run this analysis?**

For accounts with meaningful geographic spread and monthly spend above $10,000, once per month is a reasonable cadence. For smaller accounts or single-region targeting, quarterly is sufficient unless you are actively testing new markets.

**Does this workflow replace a formal location exclusion strategy?**

No. This is a diagnostic tool, not an automated exclusion system. It surfaces locations worth reviewing. The decision to apply exclusions or bid adjustments in Google Ads still requires a human call based on the full account context and business goals.

---

**Want to know exactly which locations are eating your Google Ads budget without delivering results?**

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend. He works with e-commerce brands, service businesses, and multi-location companies to build paid advertising systems that generate consistent, measurable returns. Learn more about [Creekside Marketing's Google Ads management services](/digital-advertising/google-ads/).
