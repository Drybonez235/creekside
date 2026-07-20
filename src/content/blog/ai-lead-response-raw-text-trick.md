---
title: "The Raw Text Trick: Why Your AI Lead Response Drafts Sound Generic (And the Two-Instruction Fix)"
description: "Why AI-drafted lead follow-ups sound generic and the two specific instructions Creekside uses to draft specific, credible responses from the agency brain."
date: "2026-07-19"
image: "article-images/creekside-marketing-pros-digital-marketing-strategy.avif"
category: "Google Ads"
tags: ["AI Tools", "Agency Operations", "Lead Response", "Google Ads"]
---

> **TL;DR:** AI lead response drafting fails when the AI pulls summaries instead of raw text. Creekside fixed this with two instructions: "pull specifically the raw text" and "go back 90 days in data." Combined with pasting the last 24 hours of conversation manually, the system produces specific, credible drafts from 90 days of calls, emails, CRM records, and contractor notes.

| Metric | Value |
|--------|-------|
| Pipeline data freshness | Typically 1 day old |
| Manual paste window | Last 24 hours of conversation |
| Recommended lookback | 90 days |
| Upwork follow-ups | SDR agent handles primary Upwork response |
| Style matching | Dedicated Peterson writing-style agent |

# The Raw Text Trick: Why Your AI Lead Response Drafts Sound Generic (And the Two-Instruction Fix)

Most operators who try AI for lead response drafting hit the same wall: the output is technically a follow-up message, but it sounds like no one specific wrote it. It does not reference anything concrete from prior conversations, it does not match the account manager's voice, and it reads like it was assembled from search results about how to write a follow-up email.

The issue is not the AI. The issue is that without the right instructions, the AI pulls high-level summaries of the available data instead of pulling the actual text. Summaries are faster to process. They also strip out every specific detail that makes a follow-up credible.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Claude Lead Response Agent](https://www.youtube.com/watch?v=Oebb-HeHudU). That video walks through the exact workflow Creekside uses for AI lead response drafting and client communication, including the two instructions that separate useful output from generic noise.

For the foundational setup that makes this workflow possible, see [How We Built an AI Brain for Our Google Ads Agency Using Claude Code](/blog/how-google-ads-agencies-use-claude-code-ai-brain/).

## What AI Lead Response Drafting Actually Means at Creekside

At Creekside, AI lead response drafting means asking the Creekside Brain to generate a draft follow-up or client reply grounded in every piece of data the agency has about that person: call transcripts, email threads, CRM records, and internal contractor discussions. The AI does not generate a generic message. It retrieves specific context first, then builds a draft from that context.

The brain contains months of accumulated operational data ingested by automated daily pipelines: Fathom call recordings, Gmail thread history, GHL CRM records via the Pinnacle lead connector API, and internal team discussion notes. When you ask it to draft a follow-up, it searches all of that before writing a single word. According to the video, the system "was able to find all the data that we had on this lead" and produce "something pretty compelling that lines up with my style of writing."

This is the core distinction from a generic AI prompt. Feeding a general-purpose AI the name of a lead and asking for a follow-up produces generic output because the AI has no data about that lead. The Creekside Brain has months of data and knows how to surface it.


## The 24-Hour Gap: The One Part You Always Have to Paste Manually

The brain's pipeline data is typically 1 day old. Automated ingestion runs daily, so the most recent 24 hours of any conversation are not yet in the system when you sit down to draft a follow-up.

Skip this step and ask the AI to draft the follow-up anyway, and it will work from older data and may completely miss the context of the most recent exchange. This is one of the most common reasons AI drafts are off-base: the most important recent message is absent from what the AI can see.

The fix is simple: before making your request, copy and paste the last 24 hours of the conversation thread directly into the chat. Peterson describes this in the video: "The reason we're pasting that information in is because it hasn't pulled that data in yet. This is the most recent conversation. I want to give it as much content and then it will go in and surface all the other insights."

The prompt structure that works:

1. Paste the last 24 hours of the conversation
2. Ask: "Help me formulate a response to [client/lead name]'s most recent message based on all the data in the database"

Everything older than 24 hours is already in the brain and gets retrieved automatically. The manual paste fills the only gap the pipeline creates.

## The Two Instructions That Fix Generic Output

Here is the core operational finding from the video: the part that makes the difference between a specific draft and a generic one. When you ask the brain to help formulate a response "based on the data in the database," it searches its records. But it defaults to returning summaries of what it finds. Summaries are shorter, faster, and enough for a high-level answer. They are not enough for a credible follow-up.

According to the video: "If you just tell it to help you formulate based on the data in the database, sometimes it'll just pull summaries of what's happened. And so, that can get a little bit messy."

The fix is two specific instructions added to any lead or client response request:

**Instruction 1: "Pull specifically the raw text."** This tells the brain to return the actual text from the original records, not a paraphrased summary. Raw text contains exact quotes, specific amounts and dates, and the actual wording used in prior conversations. Those specifics are what make a follow-up reference something real instead of something vague. As Peterson puts it in the video: "if you tell it, 'Hey, pull specifically the raw text,' it's more likely to give you specific examples that can help you better formulate a response to a client in literally any given situation."

**Instruction 2: "Go back 90 days in data to find enough data to process all this."** Without a lookback instruction, the system may pull from a narrower window. The 90-day directive ensures it surfaces the full arc of the relationship before drafting. The video also mentions "take your time with it, do deep research, make sure to get the full context" as a complementary instruction for complex situations.

Both instructions. Every time.


## How Upwork Follow-Ups Work Differently

The brain does not have complete coverage of all Upwork conversation data. For standard Upwork lead follow-ups, the SDR agent handles the drafting. That agent was built specifically for the Upwork context and handles the majority of Upwork follow-ups without requiring this workflow.

The lead response workflow becomes relevant for Upwork in one specific scenario: when a lead started on Upwork and moved off-platform to email or a call. At that point, the full context is split between Upwork (which the brain does not fully cover) and the agency's other systems (which the brain does have). According to the video, the correct approach is to paste the full Upwork conversation thread directly into the chat alongside any recent email, then ask the brain to "process all of this information and turn it into a follow-up." The brain combines the pasted Upwork data with whatever it finds from the related call transcript or email history, and produces a follow-up that accounts for the complete arc of the conversation.

Routing guide for Upwork:

- Pure Upwork follow-up with no off-platform contact: use the SDR agent
- Lead that moved from Upwork to email or a call: use the lead response workflow with the full Upwork thread pasted in

For how recurring client communication connects to reporting and agent operations, see [How We Rebuilt Weekly Client Reporting with AI and Turned It Into a Recurring Agent](/blog/ai-weekly-client-reporting-recurring-agent-paid-ads/).

## Drafting Client Responses: Where Internal and External Context Combine

The lead follow-up use case is powerful. The client response use case is where the brain's cross-platform data coverage becomes essential, because the context needed to answer a hard client question exists in two separate places that are easy to keep siloed in normal workflow.

When a client asks a complex question about performance or campaign direction, the full context needed to answer it well spans both what the agency has said to the client directly (emails, call transcripts, account notes) and what the agency's team has said internally about the client (contractor notes, strategy discussions, internal review comments). A good answer requires both. Most account managers can access one or the other easily; pulling both together across 90 days is not something that happens quickly by hand.

According to the video: "We have all of our conversations directly with the client, but we also have all of our conversations internally with the contractors discussing that client."

The demonstration in the video used a parking management client. The workflow was to paste the most recent client message, ask the brain to "help me formulate a response based on all the data in the database," and let it surface the internal and external context together. The output included three components: the context it pulled to ground its answer, the draft response itself, and suggestions for additional research if the question required more depth.

If the brain does not immediately surface enough context, you can direct it. The agency uses a GHL CRM (Pinnacle) with a lead connector API that the brain can target. Telling it "it's in our Pinnacle CRM" allows it to retrieve records from that system specifically, closing information gaps that a general search might miss.

## When the Style Does Not Match

If the draft output sounds too formal, too generic, or does not match how Peterson actually writes, there is a dedicated fix. According to the video, Peterson built "an agent to replicate my style of writing more particularly." Asking the brain to "use Peterson's style of writing" invokes that agent and produces a stylistically closer output.

The base output already aligns with Peterson's general communication patterns because the brain is trained on his communication history. For routine follow-ups, this is close enough to edit quickly. For higher-stakes messages where the voice match matters more, the explicit style instruction is the right move.

## Routing Guide: Lead Response Workflow vs. Other Tools

Not every communication task belongs in the lead response workflow. Here is how to route each scenario based on what the conversation history looks like, which platforms it spans, and how much prior data exists in the brain for that contact.

**Use the lead response workflow when:**
- You have an established lead or client with prior conversation history in the brain
- The conversation crossed platforms (Upwork to email, or email to a call)
- A client question requires pulling both internal team notes and direct client communications
- You need to figure out who on the team should respond and want to collect context to hand off to the right person

**Use the SDR agent when:**
- The lead is purely in Upwork with no off-platform contact history
- You are drafting early-stage follow-ups within Upwork's thread only

**Neither applies when:**
- The conversation has only happened in the last 24 hours and contains no prior relationship history anywhere
- In that case, paste the full thread and work from a standard Claude session with your own context

## Frequently Asked Questions

**What if the brain cannot find information on a specific lead?**

Help direct it to the right source. If you know the conversation happened in GHL CRM or a specific email thread, tell the brain where to look. According to the video, telling it "it's in our Pinnacle CRM" allowed the AI to target that data source specifically and retrieve records it would not have found in a general search.

**How old is the pipeline data in the brain?**

Typically 1 day old. The automated ingest runs daily, so anything from the last 24 hours needs to be pasted manually. Anything older is already in the system and will be retrieved with the 90-day lookback instruction.

**Does the style replication actually work?**

The base output is already patterned on Peterson's communication style because the brain has a large library of how he writes and speaks. For situations where the match needs to be tighter, explicitly asking for "Peterson's style of writing" invokes the dedicated style agent, which was built specifically for this purpose.

**Can you use this to figure out who should respond to a client question rather than drafting the reply yourself?**

Yes. If you are not the right person to answer a client question but need to pass the relevant context to whoever is, you can ask the brain to collect and summarize that context and then hand it off. This is a secondary use case the video covers: "you can have it go and collect all that data and then you can pass it along to the appropriate person."

**Does this work for Google Ads performance questions from clients?**

Yes. Pulling 90 days of raw text from call transcripts, campaign notes, and internal contractor discussions gives the brain the specific history it needs to draft a grounded answer to a performance question. This is one of the stronger client response use cases because the agency's internal and external context together usually contains more than enough data to address what the client is actually asking.

---

## See What This Infrastructure Does for Paid Advertising Campaigns

Based on Creekside Marketing's analysis across $20M in managed ad spend, agencies that retain clients longest respond faster and with more specific context than their competitors. The Creekside Brain is the system we built to make that possible at scale, across every team member and every communication platform.

If you want to know what a properly built paid advertising operation could do for your campaigns, our [free 10K Profit Audit](/10k-profit-audit/) identifies the specific gaps in your current setup and shows exactly what it would take to close them.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing over $20M in client ad spend across Google Ads and Meta Ads. He writes about what actually works in paid advertising, not theory.
