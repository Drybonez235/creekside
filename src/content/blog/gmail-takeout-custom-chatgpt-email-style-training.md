---
title: "The Gmail Takeout + Cursor Trick for Building a Custom GPT That Mirrors Your Exact Communication Style"
description: "How to build a custom ChatGPT trained on your Gmail history so it drafts emails in your voice, using Google Takeout and Cursor. Free to run."
date: "2026-08-03"
image: "article-images/blog-card-panels.svg"
category: "Google Ads"
tags: ["AI Tools", "Agency Operations", "Email Automation", "ChatGPT"]
---

> **TL;DR:** Your existing Gmail history already contains thousands to hundreds of thousands of examples of how you write. This post walks through Peterson's exact process for turning that raw data into a custom ChatGPT that drafts email responses in your voice -- using Google Takeout for the export, Cursor to process the data, and a VA to run the system day-to-day. No new content creation required.

| Step | Tool | Key Detail |
|------|------|------------|
| 1. Export email history | Google Takeout | Download takes hours to days for large accounts |
| 2. Process email data | Cursor (paid subscription required) | Processing script provided via GitHub link in video |
| 3. Build custom GPT | ChatGPT | Upload processed JSON; free to run after setup |
| 4. Test before delegating | Manual testing | Minimum 10 message types across different contacts |
| 5. Hand off to VA | VA + custom GPT | VA drafts; you review and send |


If you have been using email for over a year, you already have thousands of examples showing exactly how you communicate -- how you respond to leads, how you handle client questions, how you follow up after a call. That data is sitting in your Gmail account, unused, while you write the same types of messages from scratch every day.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [How To Use ChatGPT For Emails](https://www.youtube.com/watch?v=OylUX8mMhgg). That video walks through the complete process for building a custom GPT email drafting system trained on your own communication style, from the Google Takeout export all the way to handing a working tool off to a VA.

For how Creekside uses AI to handle lead response drafting using the agency's full knowledge base, see [The Raw Text Trick: Why Your AI Lead Response Drafts Sound Generic](/blog/ai-lead-response-raw-text-trick/).

## Why Your Gmail History Is Already the Training Data

The first-hand observation that makes this system work is one most people overlook: you do not need to produce any new training data. The training data already exists.

According to Peterson in the video, if you have been using email for over a year, "you've got thousands, tens of thousands, hundreds of thousands of representations of how you like to respond to specific people." That scale is what makes a custom GPT effective. A generic AI prompt produces generic output because the AI has no model of how you specifically communicate. A GPT trained on your actual sent email history has pattern-matched against every type of message you have ever written, so the output reflects your real communication patterns rather than a generalized style.

The operational insight here is not that AI can write emails. It is that the training data most businesses need to build a communication-style GPT is already sitting in their inbox. The only work is exporting it and running it through the right processing pipeline.

For the broader infrastructure Creekside has built around AI-assisted agency operations, see [How We Built an AI Brain for Our Google Ads Agency Using Claude Code](/blog/how-google-ads-agencies-use-claude-code-ai-brain/).

## Step 1: Exporting Your Gmail Data with Google Takeout

The process starts at Google Takeout, Google's official tool for downloading a copy of your account data. For an active Gmail account, expect this step to take significant time. According to Peterson in the video, "downloading this data can take hours or days." Plan accordingly and treat this as a background task, not a quick step.

The exact export path from the video:

1. Click the account icon in Gmail and select "Manage your Google account"
2. Navigate to "Data and privacy" and then "Info you can share with others"
3. Click "Download your data"
4. Click "Deselect all" to clear every option
5. Scroll approximately one-third of the way down the list and select "Mail"
6. Scroll to the bottom, click "Next step," then "Create export"

Google sends an email to your inbox when the export is ready. Click through to manage your Takeout request and download the file. You can run this export multiple times if needed -- Google allows creating new exports without affecting prior ones.

<figure>
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif" role="img" aria-labelledby="wf-title-inline">
  <title id="wf-title-inline">5-Step Email Automation Workflow: Google Takeout to Cursor to Custom GPT to Testing to VA Delegation</title>
  <defs>
    <linearGradient id="wf-bg-inline" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="420" fill="url(#wf-bg-inline)" rx="12"/>
  <text x="400" y="44" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="700">5-Step Email Automation Workflow</text>
  <text x="400" y="64" text-anchor="middle" fill="#94a3b8" font-size="13">Google Takeout to Custom GPT to VA Delegation</text>
  <rect x="28" y="100" width="122" height="120" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="89" y="128" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="700">STEP 1</text>
  <text x="89" y="148" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Google</text>
  <text x="89" y="164" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Takeout</text>
  <text x="89" y="184" text-anchor="middle" fill="#94a3b8" font-size="10">Export Gmail data</text>
  <text x="89" y="198" text-anchor="middle" fill="#94a3b8" font-size="10">hours to days</text>
  <line x1="152" y1="160" x2="168" y2="160" stroke="#475569" stroke-width="1.5"/>
  <polygon points="168,155 178,160 168,165" fill="#475569"/>
  <rect x="180" y="100" width="122" height="120" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="241" y="128" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="700">STEP 2</text>
  <text x="241" y="148" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Cursor</text>
  <text x="241" y="164" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Processing</text>
  <text x="241" y="184" text-anchor="middle" fill="#94a3b8" font-size="10">GitHub script</text>
  <text x="241" y="198" text-anchor="middle" fill="#94a3b8" font-size="10">processes data</text>
  <line x1="304" y1="160" x2="320" y2="160" stroke="#475569" stroke-width="1.5"/>
  <polygon points="320,155 330,160 320,165" fill="#475569"/>
  <rect x="332" y="100" width="136" height="120" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="400" y="128" text-anchor="middle" fill="#60a5fa" font-size="11" font-weight="700">STEP 3</text>
  <text x="400" y="148" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Build Custom</text>
  <text x="400" y="164" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">GPT</text>
  <text x="400" y="184" text-anchor="middle" fill="#94a3b8" font-size="10">Upload JSON to</text>
  <text x="400" y="198" text-anchor="middle" fill="#94a3b8" font-size="10">ChatGPT builder</text>
  <line x1="470" y1="160" x2="486" y2="160" stroke="#475569" stroke-width="1.5"/>
  <polygon points="486,155 496,160 486,165" fill="#475569"/>
  <rect x="498" y="100" width="122" height="120" rx="8" fill="#1e3a5f" stroke="#10b981" stroke-width="1.5"/>
  <text x="559" y="128" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">STEP 4</text>
  <text x="559" y="148" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Test and</text>
  <text x="559" y="164" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Tune</text>
  <text x="559" y="184" text-anchor="middle" fill="#94a3b8" font-size="10">10 message types</text>
  <text x="559" y="198" text-anchor="middle" fill="#94a3b8" font-size="10">minimum</text>
  <line x1="622" y1="160" x2="638" y2="160" stroke="#475569" stroke-width="1.5"/>
  <polygon points="638,155 648,160 638,165" fill="#475569"/>
  <rect x="650" y="100" width="122" height="120" rx="8" fill="#2d1b4e" stroke="#a855f7" stroke-width="1.5"/>
  <text x="711" y="128" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="700">STEP 5</text>
  <text x="711" y="148" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">VA Runs</text>
  <text x="711" y="164" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">the System</text>
  <text x="711" y="184" text-anchor="middle" fill="#94a3b8" font-size="10">Extension of</text>
  <text x="711" y="198" text-anchor="middle" fill="#94a3b8" font-size="10">yourself at scale</text>
  <rect x="40" y="252" width="720" height="72" rx="8" fill="#0f2744" stroke="#1d4ed8" stroke-width="1"/>
  <text x="400" y="276" text-anchor="middle" fill="#93c5fd" font-size="13" font-weight="600">Key Insight: Your email history IS the training data.</text>
  <text x="400" y="296" text-anchor="middle" fill="#94a3b8" font-size="12">No new data creation required. 1+ years of business email = thousands to hundreds of thousands</text>
  <text x="400" y="312" text-anchor="middle" fill="#94a3b8" font-size="12">of training examples already in your Gmail account.</text>
  <text x="400" y="348" text-anchor="middle" fill="#475569" font-size="11">Source: Peterson Rainey, Creekside Marketing YouTube -- How To Use ChatGPT For Emails</text>
  <text x="772" y="410" text-anchor="end" fill="#334155" font-size="10">creeksidemarketingpros.com</text>
</svg>
<figcaption>The complete 5-step workflow for building a communication-style GPT: from Google Takeout export through VA delegation at scale</figcaption>
</figure>

## Step 2: Processing Your Email History with Cursor

Once you have the Google Takeout download, the next step is processing the raw Gmail data into a format ChatGPT can use as training input. This is where Cursor comes in.

Cursor is an AI-powered code editor. According to Peterson in the video, "if you're wanting to start to use more AI automations, Cursor is an absolutely awesome tool. If you don't have it, you're behind." A paid Cursor subscription is required for this processing step.

Peterson provides a GitHub URL in the video description containing a script that handles all the data processing. The setup process from the video:

1. Open Cursor and paste the GitHub URL, then ask Cursor to download the file and get it running. Cursor reads the repository instructions and handles setup automatically.
2. Delete any old files in the "process data" and "raw data" folders -- but do not delete anything outside of those two folders.
3. Drag and drop the Gmail inbox file from your Takeout download into the "raw data" section.
4. Drag the raw data folder into Cursor and run the instruction: "process the data in this folder."

The script outputs processed email files. You can filter what gets processed by telling Cursor: "I only want to process emails from [your name]." This limits the output to emails you sent, which is the signal the GPT needs to learn your communication style. If Cursor encounters errors, ask it to troubleshoot. The video notes the process "should run pretty smoothly" and that Cursor handles most errors when prompted directly.

For active business accounts, the output will contain thousands of processed files. Peterson notes he used a smaller sample in the video for time purposes, but a real account produces substantially more.

## Step 3: Building Your Custom GPT in ChatGPT

The setup inside ChatGPT is the simplest part of the process. You are creating a custom GPT -- a version of ChatGPT with specific instructions and uploaded data files attached.

From the video:

1. In ChatGPT, create a new custom GPT.
2. Copy and paste the name, description, and system instructions Peterson provides (available in the video description).
3. Take the processed JSON file from Cursor.
4. In the GPT builder, click "Upload files." Peterson's tip from the video: drag the JSON file to your desktop first to make it easy to find, then upload it from there.
5. The custom GPT is now trained on your email history and ready to test.

After setup, the GPT can answer questions like "how would I respond to this message?" by drawing from the patterns in your email history. According to Peterson in the video, it should be able to "respond very closely mimicking your style, how you respond to specific people, all of that."

Running the GPT is free. The cost is the Cursor subscription for data processing.

<figure>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif" role="img" aria-labelledby="td-title-inline">
  <title id="td-title-inline">Email history volume as GPT training data: thousands to hundreds of thousands of training examples across light, moderate, and active business email usage levels</title>
  <defs>
    <linearGradient id="td-bg-inline" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="bar-p1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="bar-p2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#4338ca"/>
    </linearGradient>
    <linearGradient id="bar-p3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#td-bg-inline)" rx="12"/>
  <text x="400" y="40" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="700">Your Email History as GPT Training Data</text>
  <text x="400" y="60" text-anchor="middle" fill="#94a3b8" font-size="13">More history means more training signal and more consistent GPT output</text>
  <text x="50" y="200" text-anchor="middle" fill="#64748b" font-size="11" transform="rotate(-90, 50, 200)">Training Examples</text>
  <line x1="100" y1="300" x2="720" y2="300" stroke="#334155" stroke-width="1"/>
  <rect x="140" y="235" width="140" height="65" rx="4" fill="url(#bar-p1)"/>
  <text x="210" y="228" text-anchor="middle" fill="#93c5fd" font-size="14" font-weight="700">Thousands</text>
  <text x="210" y="320" text-anchor="middle" fill="#94a3b8" font-size="12">Light Email</text>
  <text x="210" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">Usage</text>
  <rect x="330" y="170" width="140" height="130" rx="4" fill="url(#bar-p2)"/>
  <text x="400" y="162" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="700">Tens of Thousands</text>
  <text x="400" y="320" text-anchor="middle" fill="#94a3b8" font-size="12">Moderate Business</text>
  <text x="400" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">Email History</text>
  <rect x="520" y="95" width="140" height="205" rx="4" fill="url(#bar-p3)"/>
  <text x="590" y="88" text-anchor="middle" fill="#d8b4fe" font-size="12" font-weight="700">Hundreds of Thousands</text>
  <text x="590" y="320" text-anchor="middle" fill="#94a3b8" font-size="12">Active Business User</text>
  <text x="590" y="335" text-anchor="middle" fill="#94a3b8" font-size="12">(1+ Years)</text>
  <rect x="100" y="356" width="600" height="24" rx="4" fill="#0f2744"/>
  <text x="400" y="372" text-anchor="middle" fill="#64748b" font-size="11">Categories as described by Peterson Rainey. Minimum threshold for reliable output: 1+ year of active email history.</text>
  <text x="772" y="394" text-anchor="end" fill="#334155" font-size="10">creeksidemarketingpros.com</text>
</svg>
<figcaption>Training data scale from email history: Peterson describes three ranges of training examples depending on how actively you use email for business communication</figcaption>
</figure>

## Step 4: Testing Before You Delegate

Before handing this GPT to a VA, test it yourself. According to Peterson in the video, you should test it "up to 10 times with a bunch of different messages from old messages that you've had from different types of people."

The reason for 10 tests across different message types is to verify output quality across the full range of situations you actually face. A reply to a lead asking about pricing looks different from a reply to a contractor who missed a deadline, or a client asking about campaign performance. All of those need to sound like you before you delegate the drafting.

The video notes that because the GPT is processing a large volume of data, "it may need some guidance" and "it may take a few tweaks as you go in." Specific feedback works better than general feedback. If a particular message type sounds off, point to what specifically needs to change. The model has enough training data to adjust based on targeted instructions.

## Handing the System Off to a VA

The most important operational point from the video is about the endpoint of this setup: the goal is not that you use the GPT yourself every day. The goal is that a VA uses it.

According to Peterson: "you can use a VA to implement this system, so that way you can essentially have an extension of yourself responding to emails."

For a paid advertising agency, this changes the capacity equation in a meaningful way. When a VA drafts emails without a tool like this, every draft needs significant editing to match the account manager's voice and specific context. When the VA runs a GPT trained on that person's actual email history, drafts start closer to usable and the editing load is substantially lower. The account manager reviews and sends rather than rewriting from scratch.

This is the same delegation pattern Creekside applies across multiple communication channels. For how AI-assisted client response drafting works with the full agency knowledge base, see [How We Rebuilt Weekly Client Reporting with AI and Turned It Into a Recurring Agent](/blog/ai-weekly-client-reporting-recurring-agent-paid-ads/).

## Frequently Asked Questions

**Does this work with less than a year of email history?**

The video specifies the system "will only work very well if you have a large history of responding to messages in your inbox." Less history means fewer training examples and less consistent output. A year or more of active business email is the threshold Peterson identifies for reliable results. If you are below that threshold, the tool can still produce output but may need more test iterations before you delegate it.

**Is a Cursor subscription required?**

According to the video: "you will need a Cursor subscription in order for this to completely work, or you'll have to have another way of processing the email data." Cursor is the demonstrated method and what the provided GitHub script is built for. The underlying task -- converting Gmail Takeout data into a JSON file ChatGPT can use -- is technically achievable with other tools, but Cursor handles it most smoothly because the script is designed for it.

**What if Cursor runs into errors during processing?**

Ask Cursor to troubleshoot. The video states it "should run pretty smoothly" but acknowledges errors can occur. Cursor is an AI editor that can diagnose and attempt to fix its own errors when prompted. Telling it to troubleshoot the specific error is usually sufficient to continue.

**How closely does the output match your actual writing style?**

The accuracy depends on training data volume. According to Peterson, the GPT should respond "very closely mimicking your style, how you respond to specific people." The more sent-email history the GPT has to pattern-match against, the closer the output will be. The 10-message test process before delegation is specifically for calibrating output before you rely on it operationally.

**What is the total cost to set this up?**

The main cost is a Cursor subscription, required for the data processing step. ChatGPT may require a plan upgrade to access the custom GPT builder. The Google Takeout export is free. The GitHub processing script is provided in the video description. The GPT itself is free to run once set up.

**What happens if the output still does not sound right after testing?**

Provide specific feedback on which message types need adjustment. The video addresses this directly: "it may need some guidance" and suggests giving it "small tweaks." Because the training data is large, targeted guidance produces noticeable adjustments. Multiple feedback rounds are expected and built into the process before full delegation.

---

## Spend Less Time on Email. Spend More on What Drives Campaign Results.

Based on Creekside Marketing's analysis across $20M in managed ad spend, the agencies that consistently outperform spend their time on what actually moves campaign performance -- bid strategy, creative analysis, and landing page review -- not on inbox management.

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing over $20M in client ad spend across Google Ads and Meta Ads. He writes about what actually works in paid advertising, not theory.
