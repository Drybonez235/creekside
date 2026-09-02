---
title: "How We Actually Use Claude Code at a Google Ads Agency: Settings, Prompting, and the One Tip That Changes Everything"
description: "Learn how a Google Ads agency uses Claude Code daily: the right settings, why the microphone beats typing, and why separate sessions protect output quality."
date: "2026-07-20"
image: "article-images/blog-card-bars.svg"
category: "Google Ads"
tags: ["Claude Code", "AI Tools", "Google Ads", "Agency Workflow", "Productivity"]
---

> **TL;DR:** At Creekside Marketing, Claude Code runs on Bypass Permissions mode with system-level safety blockers instead of approval dialogs. The biggest productivity unlock is not a setting -- it is using a microphone instead of typing. And running one session per client task, rather than stacking everything into one session, is what keeps AI output precise when you are working across multiple accounts simultaneously.

| Metric | Value |
|--------|-------|
| Permission mode used | Bypass Permissions |
| Safety approach | System-level blockers in infrastructure code |
| Prompting method | Voice (microphone) |
| Sessions per task | One new session per task |
| Parallel sessions supported | Yes |


Most tutorials about Claude Code focus on installation. This one is about what comes after: the daily operating decisions that determine whether you get generic AI output or output that actually holds up in a real client environment.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Claude Code Daily Workflow for Google Ads Agencies](https://www.youtube.com/watch?v=uP_FOQ4-Cv4). It covers the specific settings, prompting approach, and session management system Creekside uses when running Claude Code across multiple client accounts. For the full brain setup and installation process, see [How We Built an AI Brain for Our Google Ads Agency Using Claude Code](/blog/how-google-ads-agencies-use-claude-code-ai-brain/).

## The Three Permission Modes and Why Most Agencies Pick the Wrong One

Claude Code ships with three permission modes. Understanding what each one does changes how useful the tool becomes, and most people who feel like Claude Code is constantly interrupting their workflow are running in the wrong mode.

**Ask Permissions** prompts before every action the AI wants to take. Every file read, every tool call, every operation that touches your system produces a dialog asking whether you want to allow it. For someone learning the interface, this visibility is useful. For any volume of real work, it creates constant stops that break the rhythm of what the AI is trying to accomplish.

**Auto Mode** uses selective judgment. The AI evaluates whether an action is routine or potentially risky and asks only when it calculates that the action crosses a threshold. This is a reasonable default for teams that do not have dedicated safety infrastructure in place.

**Bypass Permissions** runs without approval interruptions. The AI executes what it needs to execute to complete the task. According to the video, this is the mode Creekside operates in, and the reason it works safely is not a Claude Code setting -- it is system-level blockers built into the underlying infrastructure code.

<figure aria-label="Comparison of Claude Code permission modes: Ask Permissions versus Auto Mode versus Bypass Permissions, showing throughput and safety tradeoffs for a Google Ads agency">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 440" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="440" fill="url(#bg)"/>
  <text x="400" y="44" text-anchor="middle" fill="#f1f5f9" font-size="20" font-weight="700">Claude Code Permission Modes</text>
  <text x="400" y="65" text-anchor="middle" fill="#94a3b8" font-size="13">How each mode affects throughput at a performance marketing agency</text>
  <rect x="20" y="78" width="760" height="36" rx="5" fill="#1e293b"/>
  <line x1="287" y1="78" x2="287" y2="114" stroke="#0f172a" stroke-width="2"/>
  <line x1="514" y1="78" x2="514" y2="114" stroke="#0f172a" stroke-width="2"/>
  <text x="153" y="101" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="600">Ask Permissions</text>
  <text x="400" y="101" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="600">Auto Mode</text>
  <rect x="516" y="78" width="264" height="36" rx="5" fill="#1e3a8a"/>
  <text x="648" y="101" text-anchor="middle" fill="#93c5fd" font-size="13" font-weight="700">Bypass Permissions &#9733;</text>
  <line x1="287" y1="114" x2="287" y2="398" stroke="#334155" stroke-width="1"/>
  <line x1="514" y1="114" x2="514" y2="398" stroke="#334155" stroke-width="1"/>
  <rect x="20" y="118" width="760" height="58" fill="#172030"/>
  <text x="30" y="136" fill="#64748b" font-size="10" font-weight="600">APPROVAL</text>
  <text x="153" y="152" text-anchor="middle" fill="#f87171" font-size="12">Prompts before every action</text>
  <text x="400" y="152" text-anchor="middle" fill="#fbbf24" font-size="12">Selective judgment defaults</text>
  <rect x="516" y="124" width="264" height="46" fill="#0f2044"/>
  <text x="648" y="152" text-anchor="middle" fill="#4ade80" font-size="12">No approval interruptions</text>
  <rect x="20" y="180" width="760" height="64" fill="#1e293b"/>
  <text x="30" y="198" fill="#64748b" font-size="10" font-weight="600">THROUGHPUT</text>
  <rect x="80" y="203" width="40" height="16" rx="3" fill="#ef4444"/>
  <text x="128" y="215" fill="#94a3b8" font-size="11">Low (constant stops)</text>
  <rect x="307" y="203" width="110" height="16" rx="3" fill="#f59e0b"/>
  <text x="425" y="215" fill="#94a3b8" font-size="11">Medium</text>
  <rect x="516" y="180" width="264" height="64" fill="#0f2044"/>
  <rect x="534" y="203" width="190" height="16" rx="3" fill="#22c55e"/>
  <text x="733" y="215" fill="#4ade80" font-size="11">High</text>
  <rect x="20" y="248" width="760" height="68" fill="#172030"/>
  <text x="30" y="266" fill="#64748b" font-size="10" font-weight="600">SAFETY</text>
  <text x="153" y="278" text-anchor="middle" fill="#94a3b8" font-size="12">Approval dialog is</text>
  <text x="153" y="296" text-anchor="middle" fill="#94a3b8" font-size="12">the safeguard</text>
  <text x="400" y="278" text-anchor="middle" fill="#94a3b8" font-size="12">Approval dialog with</text>
  <text x="400" y="296" text-anchor="middle" fill="#94a3b8" font-size="12">smart defaults</text>
  <rect x="516" y="248" width="264" height="68" fill="#0f2044"/>
  <text x="648" y="278" text-anchor="middle" fill="#93c5fd" font-size="12">System-level blockers</text>
  <text x="648" y="296" text-anchor="middle" fill="#93c5fd" font-size="12">in infrastructure code</text>
  <rect x="20" y="320" width="760" height="68" fill="#1e293b"/>
  <text x="30" y="338" fill="#64748b" font-size="10" font-weight="600">BEST FOR</text>
  <text x="153" y="350" text-anchor="middle" fill="#94a3b8" font-size="12">Beginners learning</text>
  <text x="153" y="368" text-anchor="middle" fill="#94a3b8" font-size="12">the interface</text>
  <text x="400" y="350" text-anchor="middle" fill="#94a3b8" font-size="12">Teams without dedicated</text>
  <text x="400" y="368" text-anchor="middle" fill="#94a3b8" font-size="12">safety infrastructure</text>
  <rect x="516" y="320" width="264" height="68" fill="#0f2044"/>
  <text x="648" y="350" text-anchor="middle" fill="#93c5fd" font-size="12">Agencies with</text>
  <text x="648" y="368" text-anchor="middle" fill="#93c5fd" font-size="12">safety rails in place</text>
  <rect x="20" y="395" width="760" height="28" rx="5" fill="#0f172a"/>
  <text x="400" y="413" text-anchor="middle" fill="#475569" font-size="11">Creekside Marketing uses Bypass Permissions mode with system-level safety infrastructure</text>
  <text x="792" y="433" text-anchor="end" fill="#475569" font-size="10">creeksidemarketingpros.com</text>
</svg>
</figure>

The distinction matters for agencies specifically. When you are managing multiple client accounts, the volume of AI operations per hour is high. Every approval dialog is a pause, and pauses compound. Bypass Permissions eliminates those pauses. The safety question is answered at the infrastructure level rather than the interface level, which means it cannot be forgotten or bypassed by accident.

## Why System-Level Blockers Beat Approval Dialogs for Agency Safety

The question that comes up when anyone hears "Bypass Permissions" is: what prevents the AI from doing something it should not do? For teams running Ask Permissions mode, the approval dialog is the answer. For Creekside, the answer is in the infrastructure.

According to the video, Creekside has safety blockers built into the underlying code that determine what operations are and are not allowed. This means the constraints on what the AI can do are not dependent on anyone approving or denying a dialog in real time. They are encoded in the system itself.

This approach shifts the safety work from session-by-session human review to one-time architecture. The rules are set once, enforced consistently, and do not slow down any individual session. For a solo operator or small team where every minute of AI throughput matters, this tradeoff is significant. The cost of setup is front-loaded. The benefit is compounded across every subsequent session.

Agencies that are earlier in their Claude Code journey typically start with Auto Mode because it handles the safety question without requiring infrastructure setup. The upgrade path to Bypass Permissions is available when the team has the system discipline to implement blockers at the code level rather than relying on approval dialogs as the primary safeguard.

## The Prompting Method That Makes Everything Faster

The microphone is Peterson's described "biggest cheat code" for working with Claude Code. According to the video, using voice input rather than typing changes both the speed and the quality of what gets sent to the AI.

The speed advantage is obvious: speech is faster than typing for most people. The less obvious advantage is length and detail. When people type a prompt, they tend to edit as they go, which means they trim detail to reduce effort. When they speak, they elaborate naturally. The result is more context in the prompt without any additional intentional effort.

For Google Ads work specifically, context is what separates a useful AI output from a generic one. Telling the AI which campaign, which client, what the goal of the current task is, and what you have already tried takes ten seconds to say and produces dramatically better results than a trimmed typed prompt that omits that background. The microphone removes the cost of providing that context.

The practical setup is straightforward: use whatever voice dictation input is built into your operating system or available as a lightweight add-on. The AI receives it as text. The only adjustment required is speaking in complete, contextual sentences rather than abbreviated commands.

## Why One Session Per Client Task Prevents the Most Common AI Quality Problem

The session management question is where most people running Claude Code across multiple client accounts make a mistake that is difficult to diagnose because the symptom looks like AI quality degradation rather than a process error.

Context bleed happens when one client's data, campaign history, and specific situation carry over into the AI's responses about a different client. In a single session that handles multiple accounts sequentially, this is nearly unavoidable. The AI accumulates context across the conversation, and that accumulated context shapes what it produces for the next task.

The fix is structural: one session per task. When you finish working on Client A's campaign and move to Client B, you open a new session. Each session starts clean, with only the context relevant to that specific task loaded. According to the video, this is the standard operating approach at Creekside: "Whenever you need to do something new, just come new session, click auto mode, make sure this folder says Creekside Workspace, and then type in what you need."

The secondary benefit of this approach is that multiple sessions can run in parallel. While one session is processing a long operation for one client, you can open a second session for a different client and begin that work. The sessions are completely independent.

<figure aria-label="Comparison of one session versus one session per task for a Google Ads agency using Claude Code, showing context bleed versus clean parallel execution">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 430" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="430" fill="url(#bg2)"/>
  <text x="400" y="42" text-anchor="middle" fill="#f1f5f9" font-size="20" font-weight="700">One Session vs Separate Sessions</text>
  <text x="400" y="62" text-anchor="middle" fill="#94a3b8" font-size="13">How context bleed affects AI output quality in Claude Code</text>
  <line x1="400" y1="75" x2="400" y2="395" stroke="#334155" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="200" y="94" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">One Session for Everything</text>
  <rect x="28" y="106" width="344" height="242" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="50" y="124" fill="#ef4444" font-size="10" font-weight="700">SESSION</text>
  <rect x="44" y="134" width="140" height="48" rx="5" fill="#1e3a5f"/>
  <text x="114" y="154" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="600">Task: Client A</text>
  <text x="114" y="172" text-anchor="middle" fill="#94a3b8" font-size="10">Google Ads review</text>
  <rect x="196" y="134" width="160" height="48" rx="5" fill="#3b1f1f"/>
  <text x="276" y="154" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="600">Task: Client B</text>
  <text x="276" y="172" text-anchor="middle" fill="#94a3b8" font-size="10">Facebook Ads setup</text>
  <path d="M114,188 Q200,206 276,190" stroke="#ef4444" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <polygon points="272,186 280,190 273,195" fill="#ef4444"/>
  <path d="M276,188 Q200,206 114,190" stroke="#ef4444" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
  <polygon points="118,186 110,190 117,195" fill="#ef4444"/>
  <text x="200" y="213" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="600">context bleed</text>
  <rect x="44" y="224" width="312" height="100" rx="5" fill="#2d1515"/>
  <text x="200" y="248" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">Output quality degrades</text>
  <text x="200" y="268" text-anchor="middle" fill="#94a3b8" font-size="11">Client A context bleeds into</text>
  <text x="200" y="286" text-anchor="middle" fill="#94a3b8" font-size="11">Client B responses</text>
  <text x="200" y="304" text-anchor="middle" fill="#94a3b8" font-size="11">Tasks run sequentially, not parallel</text>
  <text x="200" y="370" text-anchor="middle" fill="#f87171" font-size="12" font-weight="600">Slower. Less precise. Sequential.</text>
  <text x="600" y="94" text-anchor="middle" fill="#4ade80" font-size="14" font-weight="700">One Session Per Task</text>
  <rect x="416" y="106" width="168" height="106" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="430" y="124" fill="#3b82f6" font-size="10" font-weight="700">SESSION A</text>
  <text x="500" y="148" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="600">Task: Client A</text>
  <text x="500" y="166" text-anchor="middle" fill="#94a3b8" font-size="10">Google Ads review</text>
  <text x="500" y="186" text-anchor="middle" fill="#4ade80" font-size="10">Clean context. Precise output.</text>
  <rect x="596" y="106" width="172" height="106" rx="8" fill="#1e293b" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="610" y="124" fill="#7c3aed" font-size="10" font-weight="700">SESSION B</text>
  <text x="682" y="148" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="600">Task: Client B</text>
  <text x="682" y="166" text-anchor="middle" fill="#94a3b8" font-size="10">Facebook Ads setup</text>
  <text x="682" y="186" text-anchor="middle" fill="#4ade80" font-size="10">Clean context. Precise output.</text>
  <text x="600" y="232" text-anchor="middle" fill="#4ade80" font-size="11" font-weight="600">Both sessions run simultaneously</text>
  <line x1="420" y1="240" x2="585" y2="240" stroke="#4ade80" stroke-width="1.5"/>
  <line x1="615" y1="240" x2="764" y2="240" stroke="#4ade80" stroke-width="1.5"/>
  <rect x="416" y="256" width="352" height="78" rx="6" fill="#0f172a"/>
  <circle cx="440" cy="280" r="7" fill="#3b82f6"/>
  <text x="456" y="285" fill="#93c5fd" font-size="11">Blue dot = session ready to review</text>
  <circle cx="440" cy="312" r="7" fill="#fbbf24"/>
  <text x="456" y="317" fill="#fbbf24" font-size="11">Yellow dot = needs approval to continue</text>
  <text x="600" y="370" text-anchor="middle" fill="#4ade80" font-size="12" font-weight="600">Faster. More precise. Parallel.</text>
  <text x="792" y="422" text-anchor="end" fill="#475569" font-size="10">creeksidemarketingpros.com</text>
</svg>
</figure>

For an agency running Google Ads and Meta Ads across multiple clients simultaneously, this is the operating pattern that makes the volume manageable. Each session has a focused job. When it finishes or reaches a point that needs review, it signals readiness, and you move to the next session while the first one waits.

## Reading the Two-Status Session System

Running multiple parallel sessions requires a simple way to know which sessions need attention and which ones are still working. Claude Code handles this with a two-status visual system that becomes intuitive quickly.

A blue dot next to a session means the session is complete and ready for review. The AI has finished what it was working on and is waiting for you to look at the output. A yellow dot means the session needs approval before it can continue. The AI reached an action point that requires your sign-off.

In practice, this means you can open several sessions simultaneously, kick off a different task in each one, and then monitor the session list rather than watching any single session run. When a blue dot appears, you review the output. When a yellow dot appears, you approve or adjust and let it continue. When neither color is present and a session is running, you leave it alone.

This system becomes more valuable as the number of simultaneous sessions increases. According to the video, running multiple sessions in parallel is one of the primary workflow advantages of the Claude Code setup Creekside operates. The status signals remove the need to actively watch each session, which means more sessions can run simultaneously without requiring proportional attention.

## What the Daily Agency Workflow Looks Like

The operational pattern for a day using Claude Code at Creekside is simpler than the setup description might suggest. The complexity lives in the infrastructure -- the brain configuration, the database connections, the agent files. The daily experience of using it is straightforward by design.

According to the video, the standard daily workflow is: open Claude Code, select the Creekside Workspace folder, enable auto mode, and start a new session for the first task. If additional tasks come up that are separate enough to warrant their own context, open another session. Review outputs as they complete. Approve actions when sessions ask.

The microphone replaces typing for most prompts. Bypass Permissions mode eliminates approval dialogs. And the one-session-per-task rule keeps every output grounded in the context that is relevant to that specific client and task, rather than a blend of everything that came before it.

For Google Ads specifically, this means that when you pull up a client's campaign data and ask for an analysis or a recommendation, the session contains only what is relevant to that client. The recommendations reflect that client's history, offers, and performance, not a composite of everything the session has seen. For how this connects to specific workflows like pre-call prep and account reporting, see [How Our Google Ads Specialist Uses AI to Get Client-Ready in 3 Minutes](/blog/google-ads-ai-workflow-client-briefing-3-minutes/).

## Frequently Asked Questions

**What permission mode should a Google Ads agency use for Claude Code?**

The right starting point depends on whether you have safety infrastructure in place. Bypass Permissions mode gives the highest throughput but requires system-level blockers built into the underlying code -- it is not safe to run without that infrastructure. Auto Mode is the right default for teams that do not yet have dedicated safety infrastructure. Ask Permissions is useful for learning the tool but creates too many interruptions for volume work.

**Why does using the microphone improve Claude Code outputs?**

Voice input naturally produces longer, more contextual prompts than typing because people elaborate when speaking and trim when typing. For AI tools, more context typically produces better output. The microphone removes the friction of providing detailed context, which means that context gets included consistently rather than being cut for convenience.

**Does running separate sessions for each client task slow things down?**

The opposite. Separate sessions can run in parallel, which means multiple tasks are processed simultaneously rather than sequentially. One session handles Client A while another handles Client B. Total throughput increases. The sequential bottleneck only exists when you are running everything through one session.

**How do you know when a session is done versus still running?**

Claude Code uses a color-coded status system: a blue dot indicates the session is complete and ready for review, and a yellow dot indicates the session needs approval before it can continue. Sessions with neither indicator are still running and do not need attention yet.

---

## See What a Properly Configured Agency Setup Produces

The settings and workflow described here are part of how Creekside manages Google Ads for clients across multiple industries. Bypass Permissions, voice prompting, and parallel session management are not productivity tips -- they are the operational decisions that determine how much actual work gets done per hour.

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing over $20M in client ad spend across Google Ads and Meta Ads. He writes about what actually works in paid advertising, not theory.