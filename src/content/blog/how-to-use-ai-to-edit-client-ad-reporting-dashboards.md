---
title: "We Edit Our Client Ad Dashboards by Telling Claude What to Change. Here Is How That Works."
description: "How Creekside uses Claude to edit live client-facing ad reporting dashboards in real time, with backup templates and zero developer involvement."
date: "2026-07-17"
image: "article-images/blog-card-arrow.svg"
category: "Google Ads"
tags: ["AI in Marketing", "Client Reporting", "Agency Operations", "Paid Ads"]
---

> **TL;DR:** Our team uses Claude to edit live client-facing ad reporting dashboards directly, by describing the change we want in plain language. Changes deploy in 1 to 2 minutes. Every client has a backup template on standby so nothing breaks permanently. Notes get logged with dates directly in the report, replacing the external documents our team used before.

| What | Detail |
|------|--------|
| How changes are made | Plain-language instruction to Claude |
| Time to go live after a change | 1 to 2 minutes |
| Backup coverage | Default template stored for every client |
| Notes cadence | Bi-weekly, logged with date stamps directly in the dashboard |
| Source | [Creekside Marketing YouTube, May 2026](https://www.youtube.com/watch?v=2mgFvFR_vFs) |


Client-facing ad reporting dashboards are supposed to be static deliverables. You build them, you send the link, you update the data each week. What most agencies do not do is treat the dashboard itself as something that can be edited on demand, in real time, by telling an AI what to change.

That is what we do at Creekside Marketing, and this post covers exactly how it works. This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Reporting With Claude](https://www.youtube.com/watch?v=2mgFvFR_vFs). In it, he walks through the internal process for using Claude to edit client-facing reporting dashboards, including how changes get deployed, how we handle errors, and how notes get logged directly in the report rather than in a separate document.

The core concept is simple: instead of editing a dashboard file manually and redeploying it, a team member tells Claude what to change in plain language. Claude makes the change. The updated dashboard goes live within 1 to 2 minutes.

---

## What "Using Claude to Edit a Client Ad Reporting Dashboard" Actually Means

Editing a client ad dashboard with Claude means issuing a plain-language instruction and having the change appear in the live report. It is not generating a PDF or creating a screenshot. The dashboard itself changes. You can ask Claude to change colors, restructure layouts, update labels, or modify how data is displayed, and the result shows up on the report your client actually views.

For example, if a client wants all of their metric values displayed in a different color, the instruction to Claude is: change all the numbers on this client's report to orange. Claude finds the correct files in the report codebase, makes the change, commits it, and pushes it live. You verify the result by pulling the report link and checking it directly in the browser.

This is a meaningful operational shift from how most agencies manage dashboards. Most agency reporting workflows treat the dashboard as a fixed artifact: you build it once, connect a data feed, and leave the visual structure alone until someone files a formal change request. We treat the dashboard as an editable surface that Claude can modify on instruction at any time, for any client. Reporting changes that used to require a developer's time now require a sentence.



---

## The First Edit Takes Longer, and That Is by Design

One thing that surprises people when they start using Claude this way is that the first edit on a given client's report takes longer than expected. The reason is not a bug. The first time Claude edits a specific client's report, it is working out where everything lives in the report structure. It is connecting the instruction to the correct files and understanding the relationships between them. This initial mapping phase is real, and it is worth planning for.

The right response is not to sit and wait. Because Claude is handling the edit in the background, you can open a separate chat and work on something else while the first run completes. Run it during a period when you have other work to handle in parallel rather than during a session where you need an immediate result.

After that first run, subsequent edits are faster because the structure has already been mapped. The slower first session is front-loaded work that pays off in every subsequent edit. This is the same pattern we see in any AI workflow with a setup phase: the initial cost is real, but it does not repeat. Agencies that bail out after a slow first run are paying the setup cost without collecting any of the return.

---

## Every Client Has a Backup Template on Standby

The safety mechanism that makes this system viable for client-facing work is the backup template. Every client in our system has a default template stored separately from their live report. If an edit produces an unexpected result or something in the live report gets corrupted, the instruction to Claude is: reset to the default template. The default goes live in the same 1 to 2 minute window as any other change, and the client never notices anything happened.

This is a deliberate architectural decision, not an afterthought. Agencies resist giving AI systems write access to client-facing deliverables because they fear breakage. The backup template removes that fear entirely. You can tell Claude to make a significant change knowing that reverting is a one-line instruction away.

The practical effect is that team members do not need to be conservative when editing reports. If a client wants to try a different layout, a different color scheme, or a different way of displaying a metric category, you can test it on the live report. If it does not work, reset it. The backup is always there.

This changes the psychology of reporting edits in a way that matters for client relationships. Agencies that are afraid to change dashboards end up with stale reports that clients lose interest in over time. Agencies with a reliable reset mechanism can experiment freely and keep reports feeling current.



---

## Notes Belong in the Dashboard, Not in a Separate Document

The other part of this workflow we changed is how reporting notes get added. Previously, team members tracked context notes in external documents: a Google Doc, a spreadsheet, a shared folder. Those notes lived separately from the report the client actually viewed, which meant clients had to ask for context that should have been visible alongside their numbers.

We moved the notes directly into the dashboard. Reports have a built-in notes section where team members add context on a bi-weekly basis. Each entry is saved with a date stamp so both the team and the client can see when observations were made. A note about why cost-per-click spiked, or which creative angle drove a strong week, appears right next to the data it explains.

Notes that are no longer relevant can be archived. They do not get deleted; they get moved out of the client view while staying accessible to us if we need to reference them later. This preserves the record without cluttering the dashboard with outdated context.

The reason this matters for a paid ads agency specifically is that campaign context changes faster than report templates do. A week where cost-per-click spiked due to increased competition looks identical in a data table to a week where spend increased because we scaled a winning campaign. The notes field is where that context lives. Putting it directly in the dashboard means clients see it alongside the numbers rather than having to ask for it separately in a follow-up call.

---

## You Can Surface All Client Report Links Through Claude

One of the less obvious capabilities in this setup is that you can ask Claude to surface all active client report links at once. Rather than maintaining a separate directory or a pinned spreadsheet of report URLs, you prompt Claude to retrieve the links for every client dashboard. It pulls the list and you can navigate directly to any of them.

This matters for reporting audits. When we check that all reports are current, that notes are up to date, and that the correct template is showing for each client, we do not maintain a separate index. Claude knows where they all are and can retrieve them on request. For a team managing multiple accounts, this is an operational detail that saves time consistently, and consistent small savings are what compound into meaningful capacity over time.

---

## What You Need to Run This Workflow

The setup requires Claude with access to the repository where your client report files are stored. Team members authenticate once to grant Claude access to the correct codebase. After that initial step, subsequent edits do not require re-authentication.

Changes made by Claude go through a deployment step before they appear on the live report. Depending on your setup and your system speed, changes typically appear within 1 to 2 minutes of the commit being pushed. This is a standard deploy cycle. It is not instant, but it is fast enough that you can verify the change in the same working session.

The first time any team member runs this on a given client's report, expect a longer session. Once Claude has mapped the report structure, edits are faster every time after. Plan the first session for a period when you have other work to handle in parallel.

One additional note: Claude handles these edits in the background while you work in a separate chat. You do not need to wait at the screen. The workflow is designed for parallel workloads, not sequential ones.

---

## Frequently Asked Questions

**Does this require a developer to set up or maintain?**

The initial configuration requires someone who can connect Claude to the repository where your reports live. After that, the day-to-day editing workflow does not require technical knowledge. Team members issue plain-language instructions and verify results by checking the live report link. No code, no terminal, no pull requests.

**What happens if Claude makes a change that breaks the report?**

You reset to the backup template. Every client has one stored. The instruction is a single sentence and the default template goes live in the same 1 to 2 minutes as any other change. There is no recovery process to figure out because the backup is always available and always current.

**How long does a change take to go live?**

Typically 1 to 2 minutes after Claude commits and pushes the change. This is a deployment delay that applies to any change, whether Claude made it or a developer did. Once it is live, the change is visible to anyone with the report link.

**Do clients see the notes section in their dashboard?**

Yes. Notes are visible in the client view of the report. Archiving a note removes it from the client view while preserving it in the system for internal reference. Clients see current notes alongside their performance data, in the same dashboard they check each week.

**Can one team member manage reports for multiple clients using this workflow?**

Yes. Claude can retrieve links to all client reports at once, and the editing process is the same regardless of which client you are working on. The constraint is sequential, not structural: you work on one report at a time. But the editing process itself is fast enough that this is not a limiting factor across a standard client roster.

---

## Why This Matters Beyond Time Savings

The shift from manual dashboard editing to AI-assisted editing changes something more fundamental than hours per week. It changes what is possible in client reporting.

When editing a dashboard requires developer involvement, agencies make conservative choices. They build one template per niche and leave the structure alone for months. When editing takes a plain-language sentence, agencies can iterate on what clients see. A cleaner layout for a metric category that has become more important. A new section when campaign structure changes. A visual update when a client's priorities shift. These are changes that improve the reporting relationship, and they are changes that rarely happen in agencies where the dashboard is treated as a fixed artifact.

Based on managing $20M+ in ad spend across dozens of accounts, one of the most consistent patterns we see is that reporting quality correlates with client retention. Not just the data quality, but the signal that the agency is paying attention and that the report evolves alongside the work. An AI-assisted dashboard editing workflow makes that signal consistently easier to send, for every client, every week.

---

## What to Do With This

If you are running a paid ads agency and your client dashboards require significant effort to update or developer time to change, this workflow is worth evaluating. The setup cost is front-loaded and real. The ongoing cost is a plain-language instruction per change. The return is a reporting practice that stays current and that clients can trust.

For more on how we use Claude across our paid ads operation, read [How We Rebuilt Weekly Client Reporting with AI and Turned It Into a Recurring Agent](/blog/ai-weekly-client-reporting-recurring-agent-paid-ads/) and [How Our Google Ads Specialist Uses AI to Get Client-Ready in 3 Minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/).

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing Google Ads and Meta Ads for businesses across the US. With $20M+ in managed ad spend and campaigns across home services, dental, medical spa, legal, mortgage, and e-commerce verticals, Peterson and his team write about what is actually working in active client accounts.
