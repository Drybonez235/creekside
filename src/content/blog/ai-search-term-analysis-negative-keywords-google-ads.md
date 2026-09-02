---
title: "69,000 Search Terms, 10 Minutes: The AI Negative Keyword Workflow for Google Shopping Campaigns"
description: "How we use Claude to analyze tens of thousands of Google Ads search terms, catch wasted spend, and build a clean negative keyword list in about 10 minutes."
date: "2026-07-29"
image: "article-images/blog-card-waves.svg"
category: "Google Ads"
tags: ["Google Ads", "Negative Keywords", "AI Tools", "Google Shopping", "Search Terms"]
---

> **TL;DR:** We download a Google Ads search term CSV, upload it to Claude with a structured prompt, let Claude interview us about the product, and get a segmented negative keyword list in about 10 minutes. On a shopping campaign with 69,000 search terms, this workflow identified approximately $300 in preventable waste over four months for at most $5 in AI usage (or free on a standard plan).

| Metric | Value |
|--------|-------|
| Search terms analyzed | 69,000+ |
| Setup time | ~10 minutes |
| AI cost | $5 or less (free on standard Claude plan) |
| Wasted spend identified | ~$300 (4-month period) |
| AI tool used | Claude (preferred for data analytics tasks) |


Every Google Ads practitioner knows the pain of manually reviewing search terms. Hundreds of rows in a small account. Thousands in a mid-size one. Tens of thousands in a shopping campaign that has been running for a year. The standard approach is to filter by spend, review the top rows, and skip the rest. It works, but it leaves money on the table every single week.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [AI Google Search Terms](https://www.youtube.com/watch?v=p-E5yWfauO8). It walks through the exact AI workflow we use to analyze shopping campaign search terms at scale, the economics behind it, and the one mistake that will undo all your work if you skip a specific step.

For context on how AI integrates into our broader day-to-day operations, see [How Our Google Ads Specialist Uses AI to Get Client-Ready in 3 Minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/) and [How We Actually Use Claude Code at a Google Ads Agency](/blog/how-to-use-claude-code-google-ads-agency/).

## Why Manual Search Term Review Does Not Scale for Shopping Campaigns

Manual search term review becomes unworkable at volume. Shopping campaigns generate queries from across the full product catalog without keyword-level targeting, so in a mature account the search term report can reach tens of thousands of rows per week. Filtering to high-spend terms catches the obvious outliers, but it misses categories of bad intent distributed across dozens of low-spend rows that collectively drain budget.

In a shopping campaign we manage, the search term report contained 69,000 rows. A manual review pass through that dataset is not a realistic recurring task. The AI workflow described here processes the same report in the time it takes to write a prompt and answer a few follow-up questions.

According to Creekside Marketing's analysis across $20M+ in managed ad spend, unmanaged search term expansion in shopping campaigns is one of the most consistent and underaddressed sources of preventable waste. It stays unaddressed not because practitioners do not understand the value, but because the manual process does not scale to a weekly cadence at that volume.

![Before and after: manual vs AI search term review for a Google Shopping campaign with 69,000 rows](/article-images/ai-search-term-analysis-negative-keywords-google-ads-time.svg)

## The AI Search Term Workflow, Step by Step

We use this workflow to build negative keyword lists for Google Shopping clients. The output is a segmented negative keyword list ready to upload to Google Ads after one review pass. The full process, from opening the CSV to having an importable list, takes about 10 minutes on the first run. Here are the steps in order.

**Step 1: Download the search term CSV from Google Ads.** Open the search terms report, set the date range to the past week or month (not the past year), and download as CSV. Tighter date ranges mean you are acting on terms that are affecting current performance right now. For accounts with very large search term volumes, filter the CSV to terms that have spent more than a dollar before downloading. Terms under that threshold are triggered so rarely that your top-level negatives will block most of them automatically.

**Step 2: Upload the CSV to Claude with a structured prompt.** Open a new Claude conversation, attach the file, and use a prompt that sets up the product context and asks Claude to interview you before generating any output. The prompt we use is roughly this:

*"We are looking at a Google Ads campaign for [product or service]. Analyze the search terms data. Before making any recommendations, ask me whatever questions you need to fully understand the product and the target customer so we are completely aligned on what terms to exclude. Then output your recommendations in two sections: exact match negatives and broad match negatives."*

We use Claude for this task because, in our direct experience with data analytics tasks, it handles structured CSV analysis more accurately than alternatives. Gemini is also capable for this type of work.

**Step 3: Answer Claude's interview questions directly.** Claude will not immediately run through the data and return a list. It will ask clarifying questions first. This is the step most practitioners skip, and it is why the output they get is generic. Answer as if briefing a junior analyst: what the product does, who buys it, what search intent signals a non-buyer. Claude uses these answers to reason about relevance categorically, not just match on surface-level keyword patterns.

**Step 4: Review the output before uploading anything.** This is non-negotiable. On the screen extender campaign we ran this workflow against, Claude recommended excluding the term "screen extenders" from a shopping campaign for a product that IS a screen extender. That would have been a damaging mistake. Always read the full list before importing it. When you find an error, go back into the conversation, explain specifically what Claude got wrong and why, and request a revised output. After one correction round for a specific account, the error rate drops substantially.

**Step 5: Upload the finalized list to Google Ads.** Copy the negative keyword list, go to Keywords, then Negative Keywords, and paste it in. The UI will flag any terms over 10 words, which Google Ads does not accept. Delete those rows and import the rest. For lists that are too long for the UI, use Google Ads Editor.

For background on the principles that determine which terms to exclude and which to leave running, see our post on [reviewing search terms without damaging account performance](/blog/how-to-review-search-terms-and-add-negative-keywords-without-tanking-your-google-ads-account/).

## What the AI Actually Found: $300 in Preventable Spend

On the shopping campaign referenced here, Claude worked through the 69,000-row dataset and identified approximately $300 in spend on search terms that were outside the intended target audience. This covered a four-month campaign period. Not a large number in absolute terms, but the economics are clear: about 10 minutes of setup time and at most $5 in AI usage caught $300 that would have continued burning. On a standard Claude plan, the analysis costs nothing at all.

The other thing the AI surfaced was categorical-level pattern recognition. Rather than flagging one irrelevant term at a time, Claude identified groups of search intent that the campaign was accidentally capturing. That categorical reasoning is where the real value is. Manual column-by-column filtering catches individual bad terms. AI identifies the pattern behind clusters of them.

One practical note on very large exports: if the model hits context limits on the CSV, there are two approaches. First, filter the export to the top 1,000 terms by spend before uploading. Second, tighten the date range to a single week so the file is smaller. Some models also offer a deep research mode that will work through a much larger file given 20 to 30 minutes. That level of usage might cost a few dollars in API credits, but it returns multiples in identified waste.

![AI search term audit ROI: $5 max AI cost vs $300 identified waste over four months](/article-images/ai-search-term-analysis-negative-keywords-google-ads-roi.svg)

## Building a Weekly Routine, Not a One-Time Audit

The first audit is not where this workflow pays off most. Once you have refined the output for a specific account and corrected the initial errors, the process becomes a repeatable weekly operation that is significantly faster than the initial setup. Upload the CSV, get the output, do a quick review, import the list. The ongoing cycle is the whole system.

Compare that to manual weekly review in a shopping account with tens of thousands of rows. Weekly search term audits are something every agency knows should happen and most teams skip inconsistently because of time. AI makes the consistent version achievable without the time commitment.

This follows the same pattern we apply to other recurring data tasks at Creekside: AI handles the data processing, and the practitioner handles the judgment calls. The judgment call in this workflow is the review before uploading. Once you have refined a client's output once, you can scan rather than audit line by line. Once refined for a specific account, the ongoing process of uploading a CSV and reviewing the output takes a fraction of the initial setup time.

If you want to understand how AI fits into the full daily client workflow beyond search term management, see [How Our Google Ads Specialist Uses AI to Get Client-Ready in 3 Minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/).

## Frequently Asked Questions

These are the most common questions about applying AI-assisted search term analysis to Google Ads accounts. The short answers: this works for search campaigns too, not just shopping; Claude handles structured CSV data best in our experience but Gemini is also capable; and always review the AI output before uploading anything.

**Does this workflow apply to search campaigns, or only shopping?**
Both. Shopping campaigns benefit most because of the search term volume they generate without explicit keyword targeting. But the same workflow applies to any search or broad match campaign with high query volume. Download the CSV, run the same structured prompt, get a categorical exclusion list.

**Why use Claude over ChatGPT or Gemini?**
Based on our direct experience with data analytics tasks, Claude handles structured CSV analysis more consistently. Gemini is also capable for this type of work. ChatGPT has been falling behind on data-heavy tasks in our experience. Use whatever model you have access to, but do not skip the review step regardless of which tool you use.

**What if my account has fewer than 1,000 search terms?**
The workflow still applies. The setup time scales down proportionally, and the review before uploading remains important regardless of dataset size. Even in smaller accounts, AI identifies categorical patterns that a quick column-scan misses.

**What date range should I use for the export?**
Weekly or monthly. Tighter ranges mean you are excluding terms that are affecting performance right now. Yearly exports are useful for a one-time deep audit, but for ongoing management, weekly or monthly is more actionable and generates smaller files.

**What if I need to analyze more search terms than the model can handle in one pass?**
Break it into segments. Filter to the top 1,000 by spend, or use a shorter date range. For very large datasets, deep research mode in Claude or Gemini will work through the full file given 20 to 30 minutes, at a cost of a few dollars in API usage. That cost is still well below the waste it typically identifies.

## The Bottom Line

Based on $20M+ in managed ad spend, the most consistent source of preventable waste in shopping campaigns is unmanaged search term expansion. It goes unmanaged because the volume makes manual weekly review impractical. This AI workflow removes that constraint. About 10 minutes of setup, a quick review pass before each import, and at most $5 in AI usage identified $300 in preventable spend on a single account over four months.

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google and Meta ad spend. Creekside works with ecommerce brands, professional services firms, and local businesses to build paid advertising systems that scale without wasting budget. He also writes a weekly newsletter with lessons from the accounts Creekside manages. [Subscribe here](/newsletter/).