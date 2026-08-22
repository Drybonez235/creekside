---
title: "The 5-Color Testing System Inside Our Google Ads Management Spreadsheet (And Why White Is the Most Important Color)"
description: "Inside the Google Ads management spreadsheet Creekside Marketing uses: 5-color test tracking, budget pacing rules, and the freelancer note protocol."
date: "2026-08-06"
image: "article-images/google-ads-management-spreadsheet.avif"
category: "Google Ads"
tags: ["Google Ads Management", "Google Ads Testing", "Paid Ads Operations", "Campaign Optimization"]
---

> **TL;DR:** We manage Google Ads across client accounts using a structured spreadsheet with a 5-color test tracking system, separate sections for action items and freelancer notes, and a budget pacing rule that keeps monthly spend within 5% of target. This walkthrough covers each section and the rules that make it work, based on Peterson's August 2025 system update.

| Metric | Value |
|--------|-------|
| Test status colors | 5 (blue, green, red, white, yellow) |
| Budget pacing tolerance | Within 5% of monthly target |
| Test entry columns | 5 (idea, reason, start date, end date, result) |
| Spreadsheet sections | 4 (tests, action items, notes, budget/CPA tracker) |
| Review cadence | Weekly (duplicate and rename sheet) |

# The 5-Color Testing System Inside Our Google Ads Management Spreadsheet (And Why White Is the Most Important Color)

Most Google Ads managers track tests the same way they track everything else: a note in a doc, a comment in the campaign, or memory. After managing $20M+ in ad spend, we have found that approach breaks down fast, especially with freelancers or multiple specialists in an account. The Google Ads management spreadsheet Creekside Marketing uses across every client account keeps tests, tasks, notes, and budget tracking in one structured place. This post walks through each section, based on a walkthrough Peterson published on the [Creekside Marketing YouTube channel](https://www.youtube.com/watch?v=kFKInO0a7MY) in August 2025.

The spreadsheet is not a complex tool. What makes it work is the consistency behind each section and one specific budget rule we will cover near the end that runs counter to how most managers handle spend reductions.

## What the Test Section Tracks and How Each Column Is Used

The test section has five columns: the test idea, the reason or hypothesis, the start date, the end date, and the result. A test with an idea and reason but no start date is queued but not running. A test with a start date is active. The end date marks when you have enough data to make a subjective call on whether it worked.

Any test idea goes into column one. The reason goes in column two. If the idea is tentative and the hypothesis is not clear yet, the reason column can stay empty. Start dates go in when you are ready to run the test. The end date does not mark when an AB test formally concludes or when you paused one variant. According to Creekside Marketing's testing methodology, the end date is when there is enough data to say objectively whether the test worked. That is a judgment call based on volume and signal clarity, not a fixed statistical threshold. Results go in the final column: what happened, what you saw, and what decision you made.

![Google Ads test tracker color coding system by Creekside Marketing](/article-images/google-ads-management-spreadsheet-test-tracker.svg)

## The Google Ads Management Spreadsheet Color System: Five Statuses and One Rule for White

Each test row gets one of five colors: blue for active or pending tests, green for experiments that clearly worked, red for experiments that clearly failed, white for tests that produced no usable conclusion, and yellow for experiments flagged as the priority next run. The most operationally important distinction is between red and white, and most testing systems do not have a separate status for white.

**Blue** marks tests that are currently active or not yet started. A blue row with no start date is an idea in the queue. A blue row with a start date is live in the account.

**Green** means the test produced enough data for a clear positive conclusion. The experiment worked. The change stays.

**Red** means the data clearly showed the experiment did not improve performance. Clear negative result. The test is closed.

**White** is the status that matters most. A test goes white when there was insufficient data to reach a conclusion, or when too many changes happened during the test window to isolate the variable. According to Creekside Marketing's account management process, white means we made too many changes over the duration of the experiment to know if the test actually did anything. The white row gets preserved so the team can come back to it and run the test again under cleaner conditions. It is not a failed experiment. It is an open case.

**Yellow** is an informal priority flag. When a specific test should run next as soon as a slot opens, mark it yellow. It draws attention when you review what to start next and ensures priority ideas do not get buried in a long backlog.

## What Goes in Action Items (and What Stays Out of the Test Log)

Action items are tasks that need to happen in the account but are not experiments. Adding assets, setting up UTM parameters, reviewing extension coverage, fixing a tracking issue. Things you know need to get done. They get checked off when complete. No hypothesis, no start date, no result tracking needed.

The reason the test section and action items section are separate is clean attribution. If a change is not a test, tracking it like one creates false signal. If you are running a headline test and you add sitelink extensions during the same window, the sitelink addition is a confounding variable. Keeping it in the action items section and noting the timing is what makes future attribution accurate. This separation is part of the broader discipline behind avoiding [common Google Ads management errors](/blog/google-ads-mistakes-broad-match-performance-max-2026/) that inflate costs without clear accountability.

![Google Ads budget allocation framework by Creekside Marketing](/article-images/google-ads-management-spreadsheet-budget-allocation.svg)

## How the Notes Sections Work and Why Updates Go to ClickUp

The spreadsheet has two notes sections: account manager notes and freelancer notes. Account manager notes are reference material that stays stable across weeks. Freelancer notes are for the person running the account day to day to track information useful to themselves. Neither section is a live communication channel for updates that need to reach the account manager.

Account manager notes provide context for anyone reviewing the account: what the client offers, who the customer is, any standing constraints or account history. Creekside Marketing uses Loom videos per account as the primary onboarding resource, and the notes section in the spreadsheet gives a written anchor for quick reference between videos.

Freelancer notes are for self-tracking. What you noticed during a review, context you will want later, something you are monitoring. They are self-referential.

The rule that matters: if there is an update on the account that the account manager needs to see, that update goes to ClickUp. Not the notes section. According to Creekside Marketing's internal operating process, the account manager does not always check the notes section. ClickUp is the system of record for any update requiring a response or action. This is the same communication clarity that defines the escalation structure during [client account onboarding](/blog/paid-ads-agency-client-onboarding-checklist/) and continues through the account management phase.

## How Monthly Budget Tracking Works and the Budget Cut Rule That Matters

The target CPA section shows the account's cost-per-acquisition goal. Monthly budget is the metric that requires the most consistent attention. Creekside Marketing's standard is to stay within 5% of the monthly budget target throughout the month, which means tracking pacing weekly and having a clear rule for when adjustments are needed.

When budget needs to be reduced because an account is trending over target, the rule is this: take the reduction from the worst-performing campaign, not split it evenly across all campaigns.

This runs counter to how many managers handle budget reductions, which is a proportional cut across the account. But splitting cuts evenly means the best-performing campaign loses budget alongside the worst one. According to Creekside Marketing's account management approach, if a campaign is doing really well and another campaign is doing really poorly, you take the budget away from the campaign that is doing poorly, not from both. The campaign generating ROI stays at full budget. The campaign underperforming absorbs the reduction.

Concentrating remaining spend in your strongest campaigns drives better overall account efficiency than symmetric reductions. It is a simple rule with a clear rationale: do not throttle what is working to protect what is not.

## The Weekly Cadence: How the Sheet Stays Current Without Extra Work

At the end of each week, duplicate the current sheet and rename it to the following week's date range. The duplicate appears to the right by default. Drag it into chronological order. The new sheet becomes the active working document. The previous week stays in place as a record of that week's test states, action items, and checklist completions.

This cadence creates a chronological archive without requiring separate documentation. For accounts with multiple specialists or freelancers involved, the weekly tab history also serves as a handoff record. What happened in any given week is in that week's tab, not in someone's memory or a separate doc.

When duplicating, the checklist resets so each week starts clean. Tests that are still active carry over naturally because the rows are still there with their current color status.

## Why the Mechanics Matter as Much as the Strategy

The Google Ads management spreadsheet Creekside Marketing uses is not a technically sophisticated tool. It is a discipline layer. The value is not in the software. It is in the rules: tests have reasons and dates, white status means the test is unresolved not failed, budget cuts come from the underperformer first, and account updates go to ClickUp not the notes section.

Managing $20M+ in ad spend across diverse accounts requires consistency in the operational mechanics so judgment goes toward the decisions that actually move the needle. When the tracking system handles the record-keeping, the team can focus on what the data is telling them.

For the full walkthrough including how the spreadsheet is structured in a real account, watch the original video on the [Creekside Marketing YouTube channel](https://www.youtube.com/watch?v=kFKInO0a7MY).

---

## Frequently Asked Questions

**What should go in the test reason column if the hypothesis is not clear yet?**

The reason column does not need to be complete before logging a test idea. If you have an idea but have not defined the hypothesis, you can log the idea without a reason and add the rationale later when you are ready to run it. The column exists to document your thinking, not to gatekeep whether an idea gets recorded.

**How do you decide when a test has enough data to mark an end date?**

According to Creekside Marketing's testing methodology, the end date is when you can subjectively say whether the test worked. There is no fixed impression threshold or statistical significance requirement. It is a judgment call based on the volume of data, the type of change being tested, and how clearly the data points in one direction. When the signal is clear enough to make a decision, you mark the end date and record the result.

**What is the difference between a white test result and a red test result?**

A red result means the test produced clear data showing the experiment did not improve performance. The test ran cleanly and the answer was no. A white result means the test did not produce usable data, either because the sample was too small or because other changes happened during the test window that made it impossible to isolate the variable. Red is a closed negative conclusion. White is an open case that should be re-run under cleaner conditions.

**Why do budget cuts come from the worst-performing campaign instead of being split evenly?**

Splitting cuts evenly reduces spend in your best-performing campaigns, which slows their results while also cutting from the underperformer. Taking the full reduction from the worst performer keeps the strongest campaign at full budget. Remaining spend is concentrated in the campaigns generating ROI, which improves overall account efficiency rather than throttling everything proportionally.

**Where should freelancers send account updates that need the account manager to act on them?**

ClickUp. The spreadsheet notes section is for self-reference only and is not consistently monitored by account managers. Any update requiring a response or action should be sent as a ClickUp message, not left in the notes column of the spreadsheet.

---

## Work With Creekside Marketing

If you are running Google Ads without a structured system for testing, budget pacing, and team communication, the mechanics are likely costing you performance on every campaign. Creekside Marketing manages Google Ads and Meta Ads for businesses that want documented, trackable results.

Take our free [10K Profit Audit](/10k-profit-audit/) to see where your current setup is leaving results on the table and what a structured paid advertising approach would change.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend. He publishes regular content on paid advertising operations, campaign management, and agency systems on the [Creekside Marketing YouTube channel](https://www.youtube.com/@CreeksideMarketing1/videos).
