---
title: "The Google Ads 90-Day Bid Strategy Ladder: When to Switch from Max Clicks to Target CPA"
description: "A data-driven breakdown of how to progress Google Ads bid strategies from Max Clicks to Max Conversions to Target CPA in 90 days."
date: "2026-08-13"
image: "article-images/google-ads-bid-strategy-progression-90-day-plan.avif"
category: "Google Ads"
tags: ["Google Ads", "Bid Strategy", "Campaign Management", "Performance Max"]
---

> **TL;DR:** For new Google Ads accounts, stay in Maximize Clicks for a full 30 days before any bid strategy change. Switch to Maximize Conversions only after reaching 30 conversions per month. Set your initial Max CPC at 1/10th of your daily budget to hit 10 clicks per day. After Max Conversions stabilizes, move to Target CPA set at your current CPA, then drop it 10% every two weeks until performance floors.

| Metric | Value |
|--------|-------|
| Phase 1 bid strategy | Maximize Clicks |
| Phase 1 duration | 30 days minimum |
| Starting Max CPC formula | 1/10th of daily budget |
| Minimum click target | 10 clicks per day |
| PMAX introduction threshold | 20-30 account conversions |
| Max Conversions switch threshold | 30 conversions per month |
| Demand gen click quality | ~95-99% non-converting (brand awareness only) |
| Target CPA reduction cadence | 10% every 2 weeks |

This post is based on Part 2 of the Creekside Marketing Google Ads series. You can [watch the original video on YouTube](https://www.youtube.com/watch?v=dCT2favmAlU) for the full walkthrough, including a live look inside active campaign settings.

---

# The Google Ads 90-Day Bid Strategy Ladder: When to Switch from Max Clicks to Target CPA

The most common reason a new Google Ads campaign fails is a premature bid strategy switch. A freelancer or a business owner gets four or five conversions in the first couple of weeks, switches to Maximize Conversions, and then watches the campaign stall, CPCs spike, and performance collapse with no clean path back. Starting over is often the only viable option at that point.

After managing $20M+ in ad spend at Creekside Marketing, we follow a specific, data-gated bid strategy progression for every new account. The thresholds are not arbitrary. Each one reflects what Google's machine learning actually needs to function. Skip a step and you are essentially asking the algorithm to optimize around data it does not yet have.

Here is the exact playbook we run, structured around four phases across 90 days.

---

## Phase 1: Max Clicks Bid Strategy for New Google Ads Accounts (Days 0-30)

Run a search campaign with 100% of your budget in Maximize Clicks for the full first 30 days. Use only phrase match and exact match keywords. Do not change the bid strategy during this window, even if conversions are already coming in.

When a new account has zero conversion history, Google has nothing to optimize toward. Maximize Conversions needs historical signal to identify which types of users are likely to convert. Without it, the algorithm defaults to finding cheap, broad traffic rather than high-intent clicks.

By starting in Max Clicks with tight match types, we control click quality ourselves. Google optimizes for volume; we optimize for relevance by restricting to searches we know convert. This combination forces quality before the machine has learned anything about the account.

The temptation to switch early is real. Four or five conversions in 10 days feels like signal. It is not enough. According to our experience managing hundreds of new account launches, switching to Maximize Conversions on a thin conversion base is one of the most consistent ways to kill a new campaign. CPCs spike. Volume drops. The campaign enters a failed learning phase it rarely recovers from without a full restart. Even when early conversions are happening, stay in Max Clicks for the full 30 days. Consistency and data volume matter more than optimizing around a small, early sample.

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="p1bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
    <marker id="p1arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/></marker>
  </defs>
  <rect width="800" height="400" fill="url(#p1bg)"/>
  <text x="400" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">90-Day Google Ads Bid Strategy Progression</text>
  <text x="400" y="50" text-anchor="middle" fill="#94a3b8" font-size="11">New accounts with no conversion history</text>
  <rect x="30" y="75" width="165" height="215" rx="7" fill="#1e3a5f" stroke="#3b82f6" stroke-width="2"/>
  <rect x="30" y="75" width="165" height="32" rx="7" fill="#3b82f6"/>
  <rect x="30" y="96" width="165" height="11" fill="#3b82f6"/>
  <text x="112" y="96" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">PHASE 1</text>
  <text x="112" y="124" text-anchor="middle" fill="#93c5fd" font-size="11" font-weight="600">Days 0-30</text>
  <text x="112" y="148" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">Max Clicks</text>
  <line x1="48" y1="162" x2="177" y2="162" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4"/>
  <text x="112" y="180" text-anchor="middle" fill="#cbd5e1" font-size="11">Search only, 100% budget</text>
  <text x="112" y="198" text-anchor="middle" fill="#cbd5e1" font-size="11">Phrase + Exact match</text>
  <text x="112" y="224" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Max CPC = 1/10th</text>
  <text x="112" y="240" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">of daily budget</text>
  <text x="112" y="275" text-anchor="middle" fill="#64748b" font-size="10">Target: 10 clicks/day</text>
  <line x1="196" y1="183" x2="213" y2="183" stroke="#475569" stroke-width="2" marker-end="url(#p1arr)"/>
  <rect x="215" y="75" width="165" height="215" rx="7" fill="#2d1b5e" stroke="#8b5cf6" stroke-width="2"/>
  <rect x="215" y="75" width="165" height="32" rx="7" fill="#8b5cf6"/>
  <rect x="215" y="96" width="165" height="11" fill="#8b5cf6"/>
  <text x="297" y="96" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">PHASE 2</text>
  <text x="297" y="124" text-anchor="middle" fill="#c4b5fd" font-size="11" font-weight="600">Days 30-60</text>
  <text x="297" y="146" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">Introduce PMAX</text>
  <text x="297" y="163" text-anchor="middle" fill="#f8fafc" font-size="12">+ Run Experiment</text>
  <line x1="233" y1="176" x2="362" y2="176" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="4"/>
  <text x="297" y="194" text-anchor="middle" fill="#cbd5e1" font-size="11">Search still primary</text>
  <text x="297" y="212" text-anchor="middle" fill="#cbd5e1" font-size="11">PMAX w/ site visitors</text>
  <text x="297" y="238" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Threshold: 20-30</text>
  <text x="297" y="254" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">account conversions</text>
  <line x1="381" y1="183" x2="398" y2="183" stroke="#475569" stroke-width="2" marker-end="url(#p1arr)"/>
  <rect x="400" y="75" width="165" height="215" rx="7" fill="#431407" stroke="#f59e0b" stroke-width="2"/>
  <rect x="400" y="75" width="165" height="32" rx="7" fill="#f59e0b"/>
  <rect x="400" y="96" width="165" height="11" fill="#f59e0b"/>
  <text x="482" y="96" text-anchor="middle" fill="#1c1917" font-size="12" font-weight="700">PHASE 3</text>
  <text x="482" y="124" text-anchor="middle" fill="#fcd34d" font-size="11" font-weight="600">Days 60-90</text>
  <text x="482" y="147" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">Max Conversions</text>
  <line x1="418" y1="161" x2="547" y2="161" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4"/>
  <text x="482" y="179" text-anchor="middle" fill="#cbd5e1" font-size="11">Threshold: 30+</text>
  <text x="482" y="197" text-anchor="middle" fill="#cbd5e1" font-size="11">conversions/month</text>
  <text x="482" y="223" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Evaluate week over</text>
  <text x="482" y="239" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">week only</text>
  <text x="482" y="272" text-anchor="middle" fill="#64748b" font-size="10">Expect 2-wk dip</text>
  <line x1="566" y1="183" x2="583" y2="183" stroke="#475569" stroke-width="2" marker-end="url(#p1arr)"/>
  <rect x="585" y="75" width="185" height="215" rx="7" fill="#052e16" stroke="#22c55e" stroke-width="2"/>
  <rect x="585" y="75" width="185" height="32" rx="7" fill="#22c55e"/>
  <rect x="585" y="96" width="185" height="11" fill="#22c55e"/>
  <text x="677" y="96" text-anchor="middle" fill="#052e16" font-size="12" font-weight="700">PHASE 4</text>
  <text x="677" y="124" text-anchor="middle" fill="#86efac" font-size="11" font-weight="600">Day 90+</text>
  <text x="677" y="148" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">Target CPA</text>
  <line x1="603" y1="162" x2="752" y2="162" stroke="#22c55e" stroke-width="1" stroke-dasharray="4"/>
  <text x="677" y="180" text-anchor="middle" fill="#cbd5e1" font-size="11">Set to CURRENT CPA</text>
  <text x="677" y="198" text-anchor="middle" fill="#cbd5e1" font-size="11">(not goal CPA)</text>
  <text x="677" y="224" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Drop 10% every</text>
  <text x="677" y="240" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">2 weeks to floor</text>
  <rect x="30" y="310" width="740" height="52" rx="6" fill="#0f2744" stroke="#3b82f6" stroke-width="1"/>
  <text x="400" y="332" text-anchor="middle" fill="#93c5fd" font-size="12" font-weight="600">KEY RULE: Thresholds are data milestones, not calendar milestones</text>
  <text x="400" y="350" text-anchor="middle" fill="#94a3b8" font-size="11">Switching bid strategies too early is the #1 reason new Google Ads campaigns fail unrecoverably</text>
  <text x="778" y="392" text-anchor="end" fill="#334155" font-size="10">creeksidemarketingpros.com</text>
</svg>
<figcaption>The four-phase bid strategy progression for new Google Ads accounts, from Max Clicks through to Target CPA optimization.</figcaption>
</figure>

### The 1/10th Budget Rule

Set your starting Max CPC at 1/10th of your daily budget. A $100/day budget means a $10 Max CPC cap. This formula is designed to guarantee at least 10 clicks per day, which is the minimum data volume needed to make informed decisions by the end of the 30-day window.

After the first week, check click volume. If your industry has expensive clicks and the campaign is not reaching 10 per day, increase the Max CPC cap incrementally until the campaign can spend its full daily budget. If CPCs turn out lower than expected, drop the cap to stretch the budget further and collect more data faster.

For a complete foundation guide on new account setup, see our post on [launching Google Ads with no conversion data](/blog/launching-google-ads-with-no-conversion-data-start-with-these-campaign-settings).

---

## Phase 2: Introduce Performance Max and Test Max Conversions via Experiments (Days 30-60)

At the 30-day mark, with 20-30 conversions accumulated, introduce a Performance Max campaign using website visitor audience signals. Keep the search campaign as your primary driver. Do not switch its bid strategy yet. Instead, use Google's Experiment feature to test Maximize Conversions without disrupting the live campaign.

Once you have 20-30 conversions in the account, there is enough signal to support a PMAX campaign. The key to making it useful at this stage is the audience signal setup. In the asset group, train the PMAX campaign on people who have already visited your website. This is not technically a remarketing campaign, since PMAX will not restrict delivery exclusively to that audience, but using website visitors as the signal gives the algorithm a starting point grounded in demonstrated interest rather than general targeting.

The PMAX runs alongside the search campaign. The search campaign is still your lead engine. PMAX supplements it by finding conversion-ready users across Google's full network using that audience signal as a foundation.

For the search campaign itself, rather than switching bid strategies outright, create a Google Ads experiment. This creates an identical copy of your campaign with Maximize Conversions enabled, running at a 50/50 traffic split. The main campaign stays live and fully operational throughout. If the experiment underperforms over 2-4 weeks, pause it and keep the original running. If it outperforms, make the switch with actual performance data behind the decision.

This is one of the most underused features in Google Ads. Switching a bid strategy mid-flight on a performing campaign carries real risk. The experiment removes that risk entirely.

For a breakdown of the PMAX mistakes we see most often in audits, see our post on [the most common Google Ads errors in 2026](/blog/google-ads-mistakes-broad-match-performance-max-2026).

---

## Phase 3: Maximize Conversions (Days 60-90)

Switch to Maximize Conversions once you are hitting 30 conversions per month consistently. Expect the first two weeks after the switch to be unstable. Evaluate performance week over week, not day by day.

The 30-conversions-per-month threshold (roughly one per day) is the practical floor for Max Conversions to function reliably. Below that, the model cannot build a predictive conversion pattern with enough frequency to be meaningful. Above it, the algorithm has the data volume it needs.

The two-week instability after switching is normal. The campaign is in learning mode, recalibrating its bidding model around a new objective. CPC can increase and volume can fluctuate during this window. Evaluating it day by day produces panic and leads to premature changes that reset the learning phase again. Week-over-week averages give a more accurate read on actual trajectory.

One additional consideration for agency contexts: switching a bid strategy triggers the learning phase and costs roughly two weeks of optimized performance. That has trust implications with clients, not just performance implications. It is another reason the Phase 2 experiment approach is worth the extra setup. You confirm readiness before committing.

---

## Phase 4: Target CPA, Then Drop 10% Every Two Weeks (Day 90+)

Once you have run Maximize Conversions for about 30 days and cost per conversion is consistent week over week, switch to Target CPA. Set it to your current average cost per action, not your goal CPA. Then drop it 10% every two weeks until performance begins to degrade.

Target CPA is a stabilization tool, not a goal-setting tool. Setting it at your current CPA tells Google to maintain what it has already achieved rather than reaching for a number the account cannot support yet. This stabilizes the CPA curve and reduces the daily swings without cutting volume.

Once stable, begin the reduction sequence. If you are converting at $80 CPA, move to $72, then $65, then $58. At each step, give Google two weeks to recalibrate. Most accounts can sustain 3-4 reductions before conversion volume begins to fall and CPA climbs back. That reversal is the floor. It represents the best CPA this account can achieve with its current structure.

Knowing the floor matters beyond just optimization. If the floor is higher than the client's profitable CPA threshold, that is not a bid strategy problem. It is an offer problem, a landing page problem, or an audience problem. No amount of bid adjustment can compensate for a weak conversion page.

<figure>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="c2bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
    <linearGradient id="c2b1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#2563eb"/></linearGradient>
    <linearGradient id="c2b2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#4f46e5"/></linearGradient>
    <linearGradient id="c2b3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient>
    <linearGradient id="c2b4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#9333ea"/></linearGradient>
    <linearGradient id="c2b5" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ec4899"/><stop offset="100%" stop-color="#db2777"/></linearGradient>
    <linearGradient id="c2b6" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
  </defs>
  <rect width="800" height="420" fill="url(#c2bg)"/>
  <text x="400" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700">Target CPA Reduction: 10% Every Two Weeks</text>
  <text x="400" y="50" text-anchor="middle" fill="#94a3b8" font-size="11">Example starting CPA: $100. Drop 10% every 2 weeks until volume falls or CPA climbs back.</text>
  <text x="22" y="210" text-anchor="middle" fill="#94a3b8" font-size="11" transform="rotate(-90, 22, 210)">Cost Per Action</text>
  <line x1="58" y1="70" x2="758" y2="70" stroke="#1e3a5f" stroke-width="1"/>
  <text x="52" y="74" text-anchor="end" fill="#64748b" font-size="10">$100</text>
  <line x1="58" y1="110" x2="758" y2="110" stroke="#1e3a5f" stroke-width="1"/>
  <text x="52" y="114" text-anchor="end" fill="#64748b" font-size="10">$80</text>
  <line x1="58" y1="150" x2="758" y2="150" stroke="#1e3a5f" stroke-width="1"/>
  <text x="52" y="154" text-anchor="end" fill="#64748b" font-size="10">$60</text>
  <line x1="58" y1="190" x2="758" y2="190" stroke="#1e3a5f" stroke-width="1"/>
  <text x="52" y="194" text-anchor="end" fill="#64748b" font-size="10">$40</text>
  <line x1="58" y1="270" x2="758" y2="270" stroke="#475569" stroke-width="1.5"/>
  <text x="52" y="274" text-anchor="end" fill="#94a3b8" font-size="10">$0</text>
  <rect x="75" y="70" width="80" height="200" rx="4" fill="url(#c2b1)"/>
  <text x="115" y="62" text-anchor="middle" fill="#93c5fd" font-size="13" font-weight="700">$100</text>
  <text x="115" y="290" text-anchor="middle" fill="#94a3b8" font-size="11">Week 0</text>
  <text x="115" y="305" text-anchor="middle" fill="#64748b" font-size="10">Baseline</text>
  <rect x="191" y="90" width="80" height="180" rx="4" fill="url(#c2b2)"/>
  <text x="231" y="82" text-anchor="middle" fill="#a5b4fc" font-size="13" font-weight="700">$90</text>
  <text x="231" y="290" text-anchor="middle" fill="#94a3b8" font-size="11">Week 2</text>
  <text x="231" y="305" text-anchor="middle" fill="#6366f1" font-size="10" font-weight="600">-10%</text>
  <rect x="307" y="108" width="80" height="162" rx="4" fill="url(#c2b3)"/>
  <text x="347" y="100" text-anchor="middle" fill="#c4b5fd" font-size="13" font-weight="700">$81</text>
  <text x="347" y="290" text-anchor="middle" fill="#94a3b8" font-size="11">Week 4</text>
  <text x="347" y="305" text-anchor="middle" fill="#8b5cf6" font-size="10" font-weight="600">-10%</text>
  <rect x="423" y="124" width="80" height="146" rx="4" fill="url(#c2b4)"/>
  <text x="463" y="116" text-anchor="middle" fill="#d8b4fe" font-size="13" font-weight="700">$73</text>
  <text x="463" y="290" text-anchor="middle" fill="#94a3b8" font-size="11">Week 6</text>
  <text x="463" y="305" text-anchor="middle" fill="#a855f7" font-size="10" font-weight="600">-10%</text>
  <rect x="539" y="138" width="80" height="132" rx="4" fill="url(#c2b5)"/>
  <text x="579" y="130" text-anchor="middle" fill="#fbcfe8" font-size="13" font-weight="700">$66</text>
  <text x="579" y="290" text-anchor="middle" fill="#94a3b8" font-size="11">Week 8</text>
  <text x="579" y="335" text-anchor="middle" fill="#ec4899" font-size="10" font-weight="600">-10%</text>
  <rect x="655" y="152" width="80" height="118" rx="4" fill="url(#c2b6)"/>
  <text x="695" y="144" text-anchor="middle" fill="#fcd34d" font-size="13" font-weight="700">$59</text>
  <line x1="650" y1="152" x2="743" y2="152" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5"/>
  <text x="748" y="148" fill="#f59e0b" font-size="10" font-weight="600">FLOOR</text>
  <text x="695" y="290" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="600">Week 10</text>
  <text x="695" y="305" text-anchor="middle" fill="#f59e0b" font-size="10">Volume drops</text>
  <polyline points="115,70 231,90 347,108 463,124 579,138 695,152" fill="none" stroke="#475569" stroke-width="1.5" stroke-dasharray="6" opacity="0.5"/>
  <rect x="58" y="330" width="684" height="56" rx="6" fill="#1c1917" stroke="#f59e0b" stroke-width="1"/>
  <text x="400" y="352" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="600">Stop dropping when volume falls or CPA climbs back -- that is your account's real floor</text>
  <text x="400" y="370" text-anchor="middle" fill="#94a3b8" font-size="11">A floor above the client's acceptable CPA means an offer or landing page problem, not a bidding problem</text>
  <text x="778" y="412" text-anchor="end" fill="#334155" font-size="10">creeksidemarketingpros.com</text>
</svg>
<figcaption>Target CPA reduction ladder: starting at current CPA and dropping 10% every two weeks until the account floor is reached.</figcaption>
</figure>

For a full overview of how bid strategy choices fit into your broader campaign architecture, see our guide on [Google Ads bidding strategies and how to choose the right one](/blog/google-ads-bidding-strategies-explained-how-to-choose-the-right-one-for-your-campaign-goals).

---

## What About Demand Gen Remarketing?

Consider demand gen remarketing once you are in Maximize Conversions, not before. The clicks are cheap, but based on our experience running these campaigns, roughly 95 to 99% of them will not convert directly. The purpose is not lead generation. It is brand awareness.

The mechanism: a prospect sees your ad on YouTube, Gmail, or Google Display before actively searching for your service. When they eventually search and your ad appears, they recognize the brand. That recognition increases click-through rate and can improve conversion rate on the search campaign over time.

We structure demand gen campaigns with a remarketing list (website visitors) plus a narrow lookalike audience built from that same list. The lookalike expands reach beyond the small direct-visitor pool while keeping the targeting anchored to an audience that has already shown relevant interest. Budget allocation is typically 10-20% of total account spend, only after the search campaign is stable in Max Conversions.

The reason demand gen does not work before Max Conversions: the volume of cheap, largely non-converting clicks can distort account data during the learning phases in ways that mislead the algorithm's optimization.

---

## The Actual Decision Framework: Data, Not Calendar

Every threshold in this playbook is a data milestone, not a date. In a low-volume niche where expensive clicks make 10 per day impossible at a realistic budget, 30 days may not produce enough data to move forward safely. In a high-intent, high-volume niche, you might hit the 30-conversion threshold in three weeks instead of six.

The timeline is a framework. The data is what actually gates each transition. The most common mistake we see is treating the timeline as a rigid calendar and switching bid strategies on schedule regardless of what the numbers show. That produces the same outcome as switching too early: campaigns that stall and require a restart.

The experiment feature exists specifically because Google knows bid strategy changes carry risk. Use it.

---

## FAQ

**What if the account already has conversion history from a previous campaign?**

You can often compress the timeline because you have prior knowledge of what converts. If the prior account has 60 or more relevant recent conversions, you may be able to start in Maximize Conversions directly or skip the full 30-day Max Clicks phase. The 30-conversion-per-month threshold still applies as a health check within the new structure.

**Can I run PMAX from day one on a new account?**

Technically yes, but we do not recommend it without conversion data. Without meaningful audience signals and conversion history, PMAX will optimize for cheap traffic rather than conversion-likely users. The 30-day search-first phase builds both the audience data and conversion signal that makes PMAX effective.

**When does Target ROAS replace Target CPA?**

Target ROAS is appropriate for e-commerce accounts where purchase values vary significantly by order. For lead generation, where each conversion has roughly equal downstream value, Target CPA is the right tool. If you track actual deal or call values, ROAS becomes worth evaluating.

**What if the campaign tanks after switching to Max Conversions?**

If performance collapses and does not recover within two to three weeks, creating a new campaign is usually the faster path. A campaign stuck in a failed learning phase is very difficult to stabilize. This is exactly why the Phase 2 experiment approach exists. Test first, commit second.

**Does this framework apply to Google Ads for e-commerce?**

The broad structure applies, but conversion volume thresholds are often reached faster due to higher purchase frequency. The bid strategy sequence stays the same (Max Clicks to Max Conversions to Target ROAS); the timeline compresses based on actual data volume.

---

## Get a Second Opinion on Your Campaign Structure

If your campaigns are stuck somewhere in this progression and you are not sure whether to switch bid strategies, add PMAX, or adjust your CPA targets, the [free $10K profit audit](/10k-profit-audit/) gives you a specific diagnosis based on your actual account. We look at your bid strategy timing, data thresholds, and campaign structure and tell you exactly what needs to change and why. No obligation.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google and Meta ad spend for small and mid-size businesses across dental, home services, legal, and e-commerce verticals.
