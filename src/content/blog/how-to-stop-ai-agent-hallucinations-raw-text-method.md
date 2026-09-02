---
title: "How to Stop AI Agent Hallucinations: The Raw Text Method We Use at Our Google Ads Agency"
description: "Learn how our Google Ads agency stops AI agent hallucinations using the raw text method, plus how to run four autonomous Claude Code agents simultaneously."
date: "2026-07-18"
image: "article-images/blog-card-scatter.svg"
category: "Google Ads"
tags: ["AI Tools", "Agency Operations", "Claude Code", "Google Ads"]
---

> **TL;DR:** Running four autonomous Claude AI agents simultaneously is a terminal problem, not a hardware problem. The app interface is significantly more energy-consuming. More critically, most AI agent hallucinations trace back to one mistake: letting the agent answer from an AI-generated summary instead of original source text. Our brain stores both layers across five platforms. Two-step retrieval is the fix.

| Metric | Value |
|--------|-------|
| Autonomous agents running simultaneously (terminal) | 4 |
| Max conversation turns before auto-stop | 200 |
| Platforms stored in Supabase | 5+ (ClickUp, Email, Fathom, Google Drive, Google Chat) |
| Search methods available | 2 (Semantic AI + Keyword Python) |


AI agent hallucinations are one of the least-discussed problems in marketing operations, and one of the most damaging. When an AI agent gives you a confident answer about a client's campaign history that turns out to be wrong, you do not catch it until the client is asking questions on a call.

We have embedded autonomous AI agents into our daily Google Ads and Meta Ads operations across multiple clients. Based on managing $20M+ in ad spend with AI deeply integrated into our workflow, we have traced most hallucinations to a single root cause: the agent is answering from its own AI-generated summary of the data, not from the original source text. Fix that one thing, and most hallucinations stop.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Claude Marketing Tutorial](https://www.youtube.com/watch?v=7qPN3VweK2Y). It covers the deeper mechanics of how the Creekside Brain works, including the terminal setup for running multiple agents simultaneously, how data is stored and retrieved, and the specific technique we use to keep AI answers grounded in real source material.

For context on the full system architecture, see [How We Built an AI Brain for Our Google Ads Agency Using Claude Code](/blog/how-google-ads-agencies-use-claude-code-ai-brain/). For the day-to-day client prep workflow, see [How Our Google Ads Specialist Uses AI to Get Client-Ready in 3 Minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/).

## Why AI Agent Hallucinations Happen at the Data Layer

AI agent hallucinations in agency operations happen because agents answer questions from summarized data, not raw source text. The agent created the summary. When the agent reads back its own summary to answer your question, any error or interpretation introduced during summarization gets presented as fact. The result is a confident-sounding answer with no direct anchor to what was actually said on a client call or written in a real email.

This is a structural problem, not a model quality problem. Even a highly capable AI will produce unreliable answers when the only available data is a compressed version of the original. The summary exists to help the AI find relevant records quickly. It is not the right layer to answer factual questions from.

Our system stores two versions of every record: the AI-generated summary and the original raw text. The summary is for finding. The raw text is for answering. If you skip the raw text step, you are one layer of abstraction away from the source, and that gap is where fabricated details enter. The solution is not smarter AI. It is a cleaner retrieval workflow.

## How the Creekside Brain Stores and Retrieves Data

All client and operational data in the Creekside Brain is stored in Supabase in structured tables, with a separate table for each major platform we pull from. According to the system overview in the video, those platforms are ClickUp, email, Fathom call recordings, Google Drive documents, and Google Chat conversations. Each row in each table represents a single record from that platform, with structured columns for the AI summary, the raw text, the date, the platform source, and the linked client.

The structure is similar to a well-organized spreadsheet, but live and continuously updated by data pipelines. When a client sends an email, it flows into the email table. When a call is recorded on Fathom, the transcript lands in the Fathom table. Every platform, every conversation, every document has its own row. This granularity is what makes source-level retrieval possible.

Retrieval happens through two distinct methods that serve different purposes. Semantic search uses AI vector matching to find records based on conceptual meaning. It understands that "budget concerns" and "hesitant about spend" are related, even when the exact words do not match. This method is slower because it processes meaning through an AI model. Keyword search uses a Python script and does not involve AI at all. According to the video, that makes it faster and better suited for situations where you know the specific name or term you are looking for. Both methods search the summary layer for speed. The critical step is what happens next.



## The Two-Step Anti-Hallucination Method

The method for eliminating AI hallucinations in agency operations comes down to two mandatory steps that cannot be collapsed into one, no matter how fast you want an answer. The summary finds the record. The raw text answers the question. These are separate operations and should stay that way.

**Step 1: Use AI summaries to find the right records.** Run a semantic or keyword search to identify the 2-3 records most likely to contain the answer. Use the summaries at this stage only for identification purposes. The AI is determining which records are relevant, not constructing an answer. This step is fast and uses AI pattern-matching appropriately.

**Step 2: Pull raw text from those specific records before answering.** Once the relevant records are identified, ask the agent to retrieve the original source text from those records and provide a direct quote. Any factual claim in the final answer should trace back to an actual line in a real document or a sentence from a real call transcript.

As Peterson describes in the video, asking the agent to "quote where it found the information" and to pull "the raw text as opposed to pulling the AI summary" gives you "exact quotes of the information you were looking for, so you can guarantee that it is not hallucinating that data." That guarantee comes from source traceability, not from AI confidence scores.

This two-step rule matters most for high-stakes outputs: client-facing reports, campaign history summaries, any claim that involves a specific number, a date, or a commitment someone made. For those, the raw text retrieval step is not optional.

One additional practice that keeps agents honest: always explicitly ask for citations alongside the answer. When the agent is required to state where it found every piece of information, it cannot silently blend multiple summaries into a single confident-sounding output. The citation requirement forces a chain of custody between the answer and the source. When the citation is missing or points to a summary instead of a source record, that is a signal to restart at step two before acting on anything.

## Running Four Autonomous Agents Simultaneously: The Terminal Setup

The terminal interface is how you run four autonomous Claude agents simultaneously without slowing down your computer. Most people start with the Claude Code app because it is the obvious interface, and it works well for individual tasks. The performance ceiling appears when you want to run multiple autonomous sessions in parallel.

According to the video, the Claude Code app is "significantly energy consuming and will slow down your computer significantly more, especially if you try to run four autonomous agents all at the same time." On a standard computer, running multiple app instances at once can make it difficult to work on anything else simultaneously. The app renders a full visual interface for each session, and that overhead compounds with each additional agent.

The terminal interface strips the visual layer and runs only the core Claude functionality. The result is substantially lower memory usage per agent session, which is what makes running four parallel autonomous agents on a standard machine feasible. You open a terminal window, paste the launch command, configure the settings that allow the agent to skip routine permission prompts, and the agent runs with minimal resource impact.

The 200-turn limit in the configuration is a deliberate safeguard. Each instruction-and-response exchange between you and the agent counts as one turn. According to the video, in normal operations this limit is never reached. The cap exists to prevent runaway edge cases where an agent gets stuck cycling through repeated actions without making progress, not to constrain legitimate work.

There is also a workflow split worth building into your process. The Claude Code app connects more reliably to external tools and API integrations (MCPs), things like Chrome automation, database connectors, or external platform APIs. The terminal is better for operations that stay within the file system and the core database. The approach described in the video: build and test an agent in the app first, where MCP connectivity is better. Switch to terminal for execution at scale, where performance overhead matters.



## Setting Realistic Expectations for AI Agents

One of the most common expectation problems in agencies starting with AI operations is the assumption that agents will perform correctly on the first attempt for every task. The system is capable, but it is not infallible, and treating an imperfect first output as a system failure misses the real opportunity.

As Peterson notes directly in the video: "The agents that we have, they don't always work exactly as you intend them to, or it doesn't always find the correct information the first time. Pretty good at doing it, but don't expect that it's going to do exactly what you want it to do the first time. You're going to want to double-check the output, especially when you're doing anything for the first time, to make sure that it's being done properly."

The diagnostic process when an agent underperforms is structured rather than reactive. First, ask the agent directly: was this the correct agent for this task? If the answer is yes, the existing agent needs a prompt refinement to handle that specific case better. If the answer is no, there is a gap in the agent library that a purpose-built agent can fill. As the video notes, if the system confirms the right agent was used, that is the signal to "go in and build my own agent to do it exactly how I need it to be done in the future."

This structure converts every underperforming output into infrastructure improvement rather than a one-off manual fix. Each refinement makes subsequent runs more reliable. The double-check habit is especially important for any output that reaches a client or gets acted on without review. The same standard a good account manager applies to a report before it goes out applies equally to AI agent output.

The citation habit reinforces this. When you routinely ask agents to quote their sources, you build an audit trail into every answer. Over time, this also reveals patterns: which agent tends to overreach beyond its data, which search method tends to surface the most relevant records, which tasks benefit from the two-step retrieval and which can be answered in one pass. That pattern knowledge is how the system gets meaningfully better over months.

## Frequently Asked Questions

**What causes AI agent hallucinations in marketing operations?**
AI agents hallucinate when they answer questions from AI-generated summaries instead of original source text. Summaries compress and interpret the source material, and any error in that interpretation compounds when the agent reads the summary back as a factual answer. The fix is a two-step retrieval process: find records using summaries, then pull raw source text before constructing any answer that involves specific facts, numbers, or commitments.

**What is the difference between semantic search and keyword search for AI agents?**
Semantic search uses AI vector matching to find records based on conceptual meaning. It understands that "budget hesitation" and "concerned about spend" overlap in meaning, even when the exact words do not match. It is slower because it processes language through an AI model. Keyword search uses a Python script to find exact term matches and does not use AI at all, making it faster. Keyword search is best when you know the specific name or term. Semantic search is better for conceptual queries where the exact wording across records may vary.

**Can you run multiple Claude AI agents at the same time?**
Yes. Running four autonomous Claude agents simultaneously is achievable using the terminal interface rather than the Claude Code app. The app is significantly more energy-consuming and can slow down a standard computer when multiple sessions are active at once. The terminal interface strips the visual layer and runs the core functionality with substantially lower memory usage per session, making four parallel agents feasible without meaningful performance impact on other work.

**How do you prevent an AI agent from running indefinitely?**
A 200-turn limit in the terminal configuration acts as a ceiling on each session. Each instruction-and-response exchange counts as one turn. In normal operations this limit is never reached. The cap exists to prevent runaway loops in edge cases where an agent gets stuck repeating an action without making progress. It is a safeguard, not a practical constraint on legitimate work.

---

## What This Means for Your Agency

Most agencies using AI are carrying a hallucination risk they have not isolated yet, because a confident wrong answer and a confident right answer look identical in the output. The difference only surfaces when you trace the claim back to its source.

The raw text method does not require new tooling or a different AI model. It requires a retrieval discipline: find via summary, answer from source. Never let the AI synthesize from its own summary when the output involves a fact that matters. Apply that rule consistently, add citations as a standard requirement, and most hallucination risk disappears.

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author:** Peterson Rainey is the founder of Creekside Marketing, a Google Ads and Meta Ads agency managing $20M+ in ad spend. He writes about paid advertising strategy, AI-powered agency operations, and what actually works in performance marketing.