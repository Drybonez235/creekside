
---
title: "How We Built an AI Brain for Our Google Ads Agency Using Claude Code"
description: "A behind-the-scenes look at how Creekside Marketing built an AI-powered agency brain using Claude Code, GitHub, and Supabase to manage Google Ads operations."
date: "2026-07-16"
image: "article-images/creekside-marketing-pros-digital-marketing-strategy.avif"
category: "Google Ads"
tags: ["AI Tools", "Agency Operations", "Claude Code", "Google Ads"]
---

> **TL;DR:** Creekside Marketing built an AI-powered agency brain using Claude Code connected to GitHub (for SOPs and agent files) and Supabase (for live client data). Any team member can install it on a Windows computer in under 30 minutes. Once set up, they open one workspace folder, enable auto mode, and have the full Creekside knowledge base active in every session.

| Metric | Value |
|--------|-------|
| Setup time (Windows) | Under 30 minutes |
| Core connectors required | 2 (GitHub + Supabase) |
| Primary interface | Claude Code |
| File and SOP storage | GitHub |
| Operational data | Supabase |
| Working directory | Creekside Workspace folder |

# How We Built an AI Brain for Our Google Ads Agency Using Claude Code

Most Google Ads agencies pile their institutional knowledge into shared drives and hope the right team member finds the right document at the right time. We built something different.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [How to install Claude on your computer (part two)](https://www.youtube.com/watch?v=5lKi3rNGlLE). That video walks through the exact process for setting up what we call the Creekside Brain on a Windows computer. This post explains what the system is, how it works, and why the installation process is designed the way it is.

For context on how our Google Ads team uses this system day-to-day, see [How Our Google Ads Specialist Uses AI to Get Client-Ready in 3 Minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/).

## What Is the Creekside Brain and Why Does It Matter for Google Ads?

The Creekside Brain is a structured AI system built on Claude Code that gives every team member instant access to agency knowledge. It connects to GitHub for files and SOPs and to Supabase for live operational data. The result is an AI session loaded with how Creekside actually operates, including client records, standard procedures, and accumulated campaign knowledge, not generic AI output.

For a Google Ads agency, this distinction matters. The difference between a correct campaign recommendation and a wrong one often comes down to context: knowing what a specific client's offer is, what has already been tested, what their history shows. A generic AI tool cannot provide that context because it does not have access to it. The Creekside Brain does, because it connects directly to the systems where that information lives.

Once installed, the interface is simple. A team member opens Claude Code, selects the Creekside Workspace folder, enables auto mode, and types in what they need. The system responds with answers grounded in actual Creekside data and procedures. The simplicity of the interface reflects a deliberate design choice: the complexity lives in the infrastructure, not in what the team member has to do each day.

## The Technical Setup: Claude Code, GitHub, and Supabase

The setup requires exactly two external connectors: GitHub and Supabase. GitHub stores the agent definition files that tell the AI how to handle specific task types. Supabase stores the operational data (client records, campaign history, call transcripts, and accumulated knowledge). Together these two stores give the AI both the rules (how to approach a task) and the facts (what is actually true about a specific client or campaign).

According to the installation walkthrough, team members working in the agency Claude account get both connectors pre-configured. There is no need to set up API keys or negotiate access. For team members using a personal Claude account, the connectors need to be added manually, which requires reaching out to Peterson for setup.

The two-store architecture is intentional. Files that change infrequently (SOPs, agent behavior definitions, playbooks) live in GitHub, where they have version control. Live operational data (client notes, campaign performance, email and call history) lives in Supabase, where the agency pipelines update it continuously. This separation keeps the system current without requiring manual maintenance from the people using it.



## How the Windows Installation Works: 7 Steps from Download to Active Session

Installing the Creekside Brain on Windows takes under 30 minutes from a clean machine. The full process as shown in the video involves downloading Claude Code, enabling the right permissions settings, installing Git for Windows, running an init command from the terminal, and selecting the Creekside Workspace folder for all future sessions.

Here is the complete sequence:

**Step 1: Download and configure Claude Code.** Open Claude Code and go to Settings, then Claude Code. Enable both "allow permissions mode" and "bypass permissions mode." According to the video, this makes the AI significantly easier to work with by reducing constant approval prompts on recurring tasks.

**Step 2: Start a new session and paste the init command.** The onboarding message sent via ClickUp or email contains the init command. Paste it into a new Claude Code session. The session will tell you that Git for Windows is required before it can proceed.

**Step 3: Download and install Git for Windows.** Use the official Windows installer and select all recommended settings. Click Finish when done.

**Step 4: Run the terminal command.** Before relaunching Claude Code, open Windows Terminal (search "terminal" in the Windows search bar), paste in the command from the onboarding message, and press Enter. A success message confirms the terminal step is complete.

**Step 5: Force-quit Claude Code.** This is critical. Do not just close the window. Open Task Manager with Control + Shift + Escape, search for "claude," and click End Task. This fully terminates the process so the relaunched version recognizes the Git installation.

**Step 6: Reopen Claude Code and run the init command again.** Select a new folder when prompted. The init command completes and configures the Creekside Workspace.

**Step 7: Select the Creekside Workspace and enable auto mode.** In the new session, select the Creekside Workspace folder. Enable auto mode. When prompted to trust the workspace, click yes. The system outputs a summary of what it can do.

From this point forward, every session starts with the Creekside Workspace selected and auto mode enabled.

## Two Windows-Specific Issues That Block Most First-Time Installs

Two specific steps cause the majority of installation failures on Windows. Both are easy to fix once you know they exist, but without knowing, they look like something fundamental is broken when it is not.

**The Git recognition problem.** After installing Git for Windows, Claude Code does not automatically detect it. The app must be completely force-quit via Task Manager, not just closed normally. Searching "claude" in Task Manager and clicking End Task is the correct move. Attempting to proceed without this step produces a "git is required" error even after a successful Git installation. The force-quit clears the path recognition issue.

**The terminal sequence.** The terminal step must happen before the final Claude Code relaunch, not after. Pasting the onboarding command into Windows Terminal and seeing the success message confirms the environment is ready before the relaunch. Skipping this step and going straight to relaunching Claude Code produces errors that appear unrelated to the actual cause.

Neither issue recurs after the initial setup is complete. They are first-run friction points, not ongoing problems.


## Why We Built This Instead of Using a Wiki or Shared Drive

Static documentation tools require team members to know which page to look up. The Creekside Brain reverses that: the team member describes their task and the system surfaces the relevant context automatically. That shift from lookup to retrieval is the primary reason we built this rather than maintaining a Notion workspace or a Google Drive folder structure.

According to the video, once the workspace is set up and auto mode is enabled, the system "should output a bunch of stuff right here to tell you just a little bit about how it all works and what all you are able to do in it." The brain introduces itself to the new user rather than waiting for the user to find the right documentation page.

The second reason the wiki alternative does not work at scale is data freshness. A wiki only reflects what someone remembered to update. The Supabase layer reflects what the agency pipelines actually ingested. When client data changes, the brain knows without anyone touching a document. For an agency managing multiple Google Ads accounts across different industries, that automatic currency is not a nice-to-have. It is the difference between a team member working from current information and working from a stale snapshot.

For how this connects to specific Google Ads tasks like account reporting and ad copy generation, see [How We Rebuilt Weekly Client Reporting with AI and Turned It Into a Recurring Agent](/blog/ai-weekly-client-reporting-recurring-agent-paid-ads/).

## Frequently Asked Questions

**Does this installation process work on Mac?**

The video covers Windows specifically. According to Peterson's note in the video, the Mac setup "is going to be a little bit more confusing" and will be covered in a separate video. Mac users should wait for that walkthrough rather than adapting the Windows steps.

**Should I use the Creekside Claude account or my own personal account?**

Team members working in the agency Claude account get both GitHub and Supabase connectors pre-configured. If you are using your own personal Claude account, you need to add those connectors manually. Reach out to Peterson for the access credentials before attempting the installation.

**What is auto mode?**

Auto mode activates the full Creekside Brain configuration at the start of a session. Without it, the session runs as generic Claude without Creekside-specific context. Always enable it before starting any work. It is a toggle in the session interface.

**Which folder should I always select?**

The Creekside Workspace folder created during the init process. Using any other folder means the brain configuration is not active and the AI responds without Creekside-specific knowledge.

**What is the ongoing daily workflow after setup?**

According to the video: "Whenever you need to do something new, just come new session, click auto mode, make sure this folder says Creekside Workspace, and then type in what you need." That is the complete daily pattern.

---

## See What This Infrastructure Produces for Our Clients

Based on Creekside Marketing's analysis across $20M in managed ad spend, agencies that scale consistently invest in systematic infrastructure rather than relying on individual team members to carry institutional knowledge in their heads. The Creekside Brain is how we make that infrastructure accessible to every person on the team.

If you want to know what a properly structured Google Ads operation could do for your campaigns, our [free 10K Profit Audit](/10k-profit-audit/) identifies the specific gaps in your current setup and shows exactly what it would take to fix them.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing over $20M in client ad spend across Google Ads and Meta Ads. He writes about what actually works in paid advertising, not theory.
