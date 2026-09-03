---
title: "The Google Ads Placement Review Our Agency Runs on Every Account (And the ClickFarm Pattern We Catch Every Time)"
description: "The exact placement review our agency runs on Google Ads PMax and Display accounts. Find ClickFarms, spot error pages, and know when to escalate."
date: "2026-08-17"
image: "article-images/blog-card-trend.svg"
category: "Google Ads"
tags: ["Google Ads", "Performance Max", "Display Ads", "Ad Placements", "Audit"]
---

> **TL;DR:** We run a placement review on every Google Ads PMax and Display account, working through the top 30-50 URLs sorted by impressions over the last 5-6 days. The process catches ClickFarms (random-number domains, non-standard TLDs), error pages that consume budget with no real content, and structural traffic pattern problems that require escalation rather than individual URL exclusions.

| Metric | Value |
|--------|-------|
| Placements reviewed per session | Top 30-50 by impressions |
| Date range | Last 5-6 days |
| Sort order | Impressions, descending |
| Exclusion path | Tools > Content Suitability > Excluded Placements |
| Escalation trigger | Mobile apps dominant, or Google-owned properties not ranked #1 |
| Review frequency | Weekly for active accounts |

---

# The Google Ads Placement Review Our Agency Runs on Every Account (And the ClickFarm Pattern We Catch Every Time)

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [How to Manage Ad Placements in Google Ads](https://www.youtube.com/watch?v=bUN41Rx46FQ).

Most agencies skip the google ads placement review because it is tedious: you click a URL, wait for it to load, and repeat 50 times. But based on $20M+ in managed ad spend, skipping this review means accepting unknown risk on where your budget is actually running. ClickFarm sites, error pages, and parked domains show up in placement reports across every industry we work in. The algorithm does not self-filter them.

Here is exactly how we run this review.

## Where to Find the Google Ads Placement Report

For PMax campaigns, the placement data lives in the Report Editor under PMAX Placement. For Display, it is in the campaign view under Where Ads Showed. Both reports give you the same core columns: placement URL, impressions, clicks, cost, and conversions. Start there before doing anything else.

These two locations matter because they are not interchangeable. PMax campaigns do not expose placement data in the standard campaign UI. If you are managing a PMax account and looking for placement data anywhere other than the Report Editor, you will not find it. The PMAX Placement report is the only path.

For Display campaigns, Where Ads Showed is accessible within the individual campaign view. Set up your columns to show impressions, clicks, cost, and conversions before you start working through the list.

## How to Set Up the Review

Set your date range to the last 5-6 days. This window is short enough to reflect what the algorithm is actively running right now, but long enough to generate meaningful impression data across placements. Anything shorter misses pattern-level data. Anything longer buries current issues in historical noise.

Sort by impressions descending. This puts the highest-exposure placements at the top, which is where your budget concentration is. Work from top to bottom. Stop when impressions drop to single digits. At that threshold, the budget in play drops enough that review time outweighs recovery value.

Target: top 30 to 50 placements per review cycle. Filter to enabled campaigns only to avoid time on paused inventory.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 470" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bg1pr" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <marker id="arrowpr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
      <polygon points="0 0, 10 4, 0 8" fill="#475569"/>
    </marker>
  </defs>
  <rect width="800" height="470" fill="url(#bg1pr)"/>
  <text x="400" y="30" text-anchor="middle" fill="#f1f5f9" font-size="14" font-weight="700" letter-spacing="0.5">GOOGLE ADS PLACEMENT REVIEW WORKFLOW</text>
  <rect x="180" y="48" width="440" height="52" rx="8" fill="#1d4ed8" fill-opacity="0.85"/>
  <text x="400" y="70" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="600">Step 1: Open Placement Report</text>
  <text x="400" y="88" text-anchor="middle" fill="#bfdbfe" font-size="11">PMax: Report Editor &gt; PMAX Placement  |  Display: Where Ads Showed</text>
  <line x1="400" y1="100" x2="400" y2="116" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <rect x="180" y="116" width="440" height="48" rx="8" fill="#1d4ed8" fill-opacity="0.85"/>
  <text x="400" y="136" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="600">Step 2: Set Date Range and Sort</text>
  <text x="400" y="153" text-anchor="middle" fill="#bfdbfe" font-size="11">Last 5-6 days  |  Sort by impressions, descending  |  Enabled campaigns only</text>
  <line x1="400" y1="164" x2="400" y2="180" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <rect x="180" y="180" width="440" height="48" rx="8" fill="#1d4ed8" fill-opacity="0.85"/>
  <text x="400" y="200" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="600">Step 3: Work Through Top 30-50 Placements</text>
  <text x="400" y="217" text-anchor="middle" fill="#bfdbfe" font-size="11">Stop when impressions drop to single digits</text>
  <line x1="400" y1="228" x2="400" y2="248" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <polygon points="400,248 490,282 400,316 310,282" fill="#7c3aed" fill-opacity="0.85"/>
  <text x="400" y="277" text-anchor="middle" fill="#ede9fe" font-size="11" font-weight="600">Escalation</text>
  <text x="400" y="292" text-anchor="middle" fill="#ede9fe" font-size="11" font-weight="600">flags present?</text>
  <line x1="490" y1="282" x2="578" y2="282" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <text x="533" y="274" text-anchor="middle" fill="#fbbf24" font-size="10" font-weight="600">YES</text>
  <rect x="578" y="260" width="138" height="44" rx="6" fill="#7f1d1d" fill-opacity="0.9"/>
  <text x="647" y="278" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="600">Escalate to</text>
  <text x="647" y="293" text-anchor="middle" fill="#fca5a5" font-size="11">Account Manager</text>
  <line x1="400" y1="316" x2="400" y2="336" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <text x="415" y="328" fill="#fbbf24" font-size="10" font-weight="600">NO</text>
  <rect x="180" y="336" width="440" height="48" rx="8" fill="#065f46" fill-opacity="0.85"/>
  <text x="400" y="356" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="600">Step 4: Click Through Each URL</text>
  <text x="400" y="373" text-anchor="middle" fill="#a7f3d0" font-size="11">Check for spam content, error pages, ClickFarm URL patterns</text>
  <line x1="400" y1="384" x2="400" y2="399" stroke="#475569" stroke-width="2"/>
  <line x1="205" y1="399" x2="595" y2="399" stroke="#475569" stroke-width="2"/>
  <line x1="255" y1="399" x2="255" y2="414" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <text x="187" y="412" fill="#f87171" font-size="10" font-weight="600">Bad URL</text>
  <rect x="110" y="414" width="290" height="38" rx="6" fill="#7f1d1d" fill-opacity="0.9"/>
  <text x="255" y="430" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">Exclude via Content Suitability</text>
  <text x="255" y="445" text-anchor="middle" fill="#fca5a5" font-size="10">Tools &gt; Content Suitability &gt; Excluded Placements</text>
  <line x1="545" y1="399" x2="545" y2="414" stroke="#475569" stroke-width="2" marker-end="url(#arrowpr)"/>
  <text x="573" y="412" fill="#4ade80" font-size="10" font-weight="600">Clean</text>
  <rect x="400" y="414" width="290" height="38" rx="6" fill="#14532d" fill-opacity="0.9"/>
  <text x="545" y="430" text-anchor="middle" fill="#bbf7d0" font-size="12" font-weight="600">Move to Next Placement</text>
  <text x="545" y="445" text-anchor="middle" fill="#86efac" font-size="10">Continue down the list</text>
  <text x="792" y="463" text-anchor="end" fill="#334155" font-size="9">creeksidemarketingpros.com</text>
</svg>

## What the Red Flags Actually Look Like

Every URL you click is answering one question: is this a real place where real people spend time? ClickFarms pass that test at the URL level but reveal themselves the moment you land on the page. Error pages and parked domains waste budget without delivering content to any real screen.

The three red flag categories:

**ClickFarm URL signals (exclude immediately).** Random strings of numbers in the domain name is the most consistent pattern we see. A domain like "mortgage34xyz1093.click" is not a real publisher. Non-standard TLDs (.click, .xyz, .info) paired with high-volume financial or health keywords are another reliable signal. When you land: a grid of outbound ad links, thin scraped content with no author or date, or a click-through maze of unrelated ads. Exclude immediately.

**Error page signals (exclude immediately).** The page fails to load entirely (browser timeout), you get a gray error screen saying "This site can't be reached," or you land on a blank parked domain. Sometimes the URL looks completely valid in the placement report but the destination no longer exists. A valid-looking URL that produces an error page still gets excluded. Budget ran there; nothing was there to receive it.

**Traffic pattern flags (escalate, do not self-fix).** These are not individual URL problems. They are account-wide signals that a structural campaign issue is driving poor placement distribution. Individual URL exclusions will not fix them.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bg2rf" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="400" fill="url(#bg2rf)"/>
  <text x="400" y="30" text-anchor="middle" fill="#f1f5f9" font-size="14" font-weight="700" letter-spacing="0.5">PLACEMENT REVIEW: RED FLAG SIGNALS</text>
  <rect x="18" y="48" width="240" height="320" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="138" y="74" text-anchor="middle" fill="#f87171" font-size="13" font-weight="700">ClickFarm URL Signals</text>
  <text x="138" y="90" text-anchor="middle" fill="#94a3b8" font-size="10">Exclude immediately</text>
  <rect x="32" y="104" width="212" height="34" rx="5" fill="#450a0a" fill-opacity="0.8"/>
  <text x="138" y="121" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="500">Random numbers in domain name</text>
  <text x="138" y="133" text-anchor="middle" fill="#fca5a5" font-size="10">e.g. mortgage34xyz1093.click</text>
  <rect x="32" y="146" width="212" height="34" rx="5" fill="#450a0a" fill-opacity="0.8"/>
  <text x="138" y="163" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="500">Non-standard TLD or unusual</text>
  <text x="138" y="175" text-anchor="middle" fill="#fca5a5" font-size="10">domain structure</text>
  <rect x="32" y="188" width="212" height="34" rx="5" fill="#450a0a" fill-opacity="0.8"/>
  <text x="138" y="205" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="500">Low-quality content on click</text>
  <text x="138" y="217" text-anchor="middle" fill="#fca5a5" font-size="10">Built for impressions, not users</text>
  <rect x="32" y="230" width="212" height="34" rx="5" fill="#450a0a" fill-opacity="0.8"/>
  <text x="138" y="247" text-anchor="middle" fill="#fca5a5" font-size="11" font-weight="500">Click-through grid of unrelated</text>
  <text x="138" y="259" text-anchor="middle" fill="#fca5a5" font-size="10">ads or content on the page</text>
  <line x1="50" y1="280" x2="226" y2="280" stroke="#334155" stroke-width="1"/>
  <text x="138" y="297" text-anchor="middle" fill="#64748b" font-size="10">Exclusion path:</text>
  <text x="138" y="311" text-anchor="middle" fill="#64748b" font-size="10">Tools &gt; Content Suitability</text>
  <text x="138" y="325" text-anchor="middle" fill="#64748b" font-size="10">&gt; Excluded Placements &gt; paste URL</text>
  <rect x="280" y="48" width="240" height="320" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="400" y="74" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="700">Error Page Signals</text>
  <text x="400" y="90" text-anchor="middle" fill="#94a3b8" font-size="10">Exclude immediately</text>
  <rect x="294" y="104" width="212" height="34" rx="5" fill="#451a03" fill-opacity="0.8"/>
  <text x="400" y="121" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="500">Page fails to load entirely</text>
  <text x="400" y="133" text-anchor="middle" fill="#fed7aa" font-size="10">Browser timeout or connection refused</text>
  <rect x="294" y="146" width="212" height="34" rx="5" fill="#451a03" fill-opacity="0.8"/>
  <text x="400" y="163" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="500">Gray error screen on click</text>
  <text x="400" y="175" text-anchor="middle" fill="#fed7aa" font-size="10">"This site can't be reached"</text>
  <rect x="294" y="188" width="212" height="34" rx="5" fill="#451a03" fill-opacity="0.8"/>
  <text x="400" y="205" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="500">Blank or parked domain page</text>
  <text x="400" y="217" text-anchor="middle" fill="#fed7aa" font-size="10">No real content after load</text>
  <rect x="294" y="230" width="212" height="34" rx="5" fill="#451a03" fill-opacity="0.8"/>
  <text x="400" y="247" text-anchor="middle" fill="#fed7aa" font-size="11" font-weight="500">URL looks valid in the report</text>
  <text x="400" y="259" text-anchor="middle" fill="#fed7aa" font-size="10">but destination does not work</text>
  <line x1="312" y1="280" x2="488" y2="280" stroke="#334155" stroke-width="1"/>
  <text x="400" y="297" text-anchor="middle" fill="#64748b" font-size="10">Exclusion path:</text>
  <text x="400" y="311" text-anchor="middle" fill="#64748b" font-size="10">Same as ClickFarm: paste URL</text>
  <text x="400" y="325" text-anchor="middle" fill="#64748b" font-size="10">into Content Suitability Excluded</text>
  <rect x="542" y="48" width="240" height="320" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.7"/>
  <text x="662" y="70" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="700">Traffic Pattern Flags</text>
  <text x="662" y="84" text-anchor="middle" fill="#a78bfa" font-size="12" font-weight="700">(Escalate, Do Not Self-Fix)</text>
  <rect x="556" y="100" width="212" height="48" rx="5" fill="#2e1065" fill-opacity="0.8"/>
  <text x="662" y="119" text-anchor="middle" fill="#ddd6fe" font-size="11" font-weight="600">Mobile apps = majority</text>
  <text x="662" y="133" text-anchor="middle" fill="#c4b5fd" font-size="10">of top-30 impressions</text>
  <text x="662" y="144" text-anchor="middle" fill="#94a3b8" font-size="9">Structural campaign targeting issue</text>
  <rect x="556" y="158" width="212" height="48" rx="5" fill="#2e1065" fill-opacity="0.8"/>
  <text x="662" y="177" text-anchor="middle" fill="#ddd6fe" font-size="11" font-weight="600">Google-owned properties</text>
  <text x="662" y="191" text-anchor="middle" fill="#c4b5fd" font-size="10">not ranked #1 by impressions</text>
  <text x="662" y="202" text-anchor="middle" fill="#94a3b8" font-size="9">YouTube / Gmail should lead</text>
  <rect x="556" y="216" width="212" height="48" rx="5" fill="#2e1065" fill-opacity="0.8"/>
  <text x="662" y="235" text-anchor="middle" fill="#ddd6fe" font-size="11" font-weight="600">3rd-party sites dominating</text>
  <text x="662" y="249" text-anchor="middle" fill="#c4b5fd" font-size="10">over Google inventory</text>
  <text x="662" y="260" text-anchor="middle" fill="#94a3b8" font-size="9">Over-indexing on low-quality supply</text>
  <line x1="574" y1="280" x2="750" y2="280" stroke="#334155" stroke-width="1"/>
  <text x="662" y="297" text-anchor="middle" fill="#64748b" font-size="10">These require account manager</text>
  <text x="662" y="311" text-anchor="middle" fill="#64748b" font-size="10">review before any changes.</text>
  <text x="662" y="325" text-anchor="middle" fill="#64748b" font-size="10">Individual exclusions won't fix them.</text>
  <text x="793" y="393" text-anchor="end" fill="#334155" font-size="9">creeksidemarketingpros.com</text>
</svg>

## Why Some Problems Require Escalation Instead of Exclusions

Individual URL exclusions are the right tool for individual bad placements. But some placement problems are symptoms of a campaign structure issue, and excluding URLs one by one will not fix the underlying cause. Recognizing the difference is the most important judgment call in this review process.

Two traffic patterns that require escalation rather than self-fixing:

**Mobile apps dominating the top 30 placements.** If the majority of high-impression placements in your PMax report are mobile app inventory rather than web domains, adding individual app exclusions will not solve the problem. The algorithm is prioritizing in-app inventory because something in the campaign's signal mix is pointing it there. That requires account manager review of the asset mix, audience signals, or bid strategy. Excluding apps one at a time is treating symptoms of a deeper targeting issue.

**Google-owned properties not ranking first.** In a healthy PMax account, YouTube and Gmail should be the top two placements by impressions. Google serves its own premium inventory first under normal conditions. If YouTube or Gmail are absent from the top of your list, or ranked below unfamiliar third-party domains, the algorithm has found a reason to prefer third-party supply. According to Creekside Marketing's analysis of accounts we manage, this pattern correlates with broader signal quality issues that URL exclusions alone cannot correct.

The principle: exclusions work for discrete bad URLs. Structural traffic distribution problems require structural fixes at the campaign or audience level. Escalate these rather than patching them.

## How to Add Placement Exclusions in Google Ads

The exclusion path is the same for every bad URL you identify: Tools, then Content Suitability, then Excluded Placements, then paste the URL. This creates an account-level block that persists across all campaigns, including campaigns you create in the future. It is more durable than campaign-level exclusions and requires no ongoing maintenance as you add new campaigns.

Account-level exclusions via Content Suitability are different from placement exclusions inside individual campaigns. Campaign-level exclusions block a placement in that one campaign only. If you create a new campaign next month, that bad URL can start receiving impressions again. Account-level exclusions prevent this entirely.

For more on account-level content controls, including how we use category-level blocks on top of individual URL exclusions, see our guide on [stopping spam placements with Google Ads Content Suitability](/blog/stop-google-ads-spam-placements-content-suitability/).

## How Often to Run This Review

We run google ads placement reviews weekly for all active accounts. For PMax campaigns in the first 60 to 90 days, we run them more frequently because the algorithm's learning phase pushes it to explore a wider range of inventory, including lower-quality supply it will later deprioritize on its own once it finds better-converting placements.

For Display campaigns specifically, run Where Ads Showed after any significant bid change or audience update. Both events can push the algorithm into inventory buckets that have not been reviewed. Changes that look like bid-only adjustments can shift placement distribution significantly.

If you are auditing an account for the first time without a prior placement review on record, start with a 30-day window instead of 5-6 days. After that initial cleanup, switch to the weekly 5-6 day cadence. The 30-day lookback catches everything the algorithm has explored historically. The shorter weekly window keeps the review manageable afterward.

## What a Healthy Placement Report Looks Like

In a well-functioning PMax account, YouTube and Gmail should rank first and second by impressions. These are Google-owned properties, and Google serves premium inventory there before pushing budget into third-party supply. If YouTube or Gmail are not leading the impression count, the algorithm has found a reason to prefer third-party inventory instead.

Below Google-owned properties, a healthy report shows major publisher domains relevant to your audience, then a gradually tapering long tail of smaller publishers. Impression counts should decrease steadily as you move down the list.

What we do not want to see: the top 5 to 10 placements are a mix of unfamiliar domains with numeric strings, non-standard TLDs, or mobile app inventory with no brand recognition. This is a signal the algorithm is feeding on low-cost, low-quality supply rather than premium publisher inventory.

Once your placement distribution looks healthy, conversion tracking accuracy is the next variable to audit. The conversion signals you give the algorithm directly influence where it chooses to serve. See our guide on [auditing Google Ads conversion tracking and catching broken tags](/blog/the-fastest-way-to-audit-google-ads-conversion-tracking-and-catch-broken-tags/) for the specific checks we run.

## Running This Across a Client Book

The pattern recognition this review requires is repeatable and teachable. Anyone on your team can learn to identify ClickFarm URL signals and error pages using the criteria above. The judgment calls around escalation, where structural campaign problems are behind poor placement distribution, are where senior review adds the most value.

The review itself does not require access to bid settings or campaign configuration. It requires the placement report, a browser, and the Content Suitability tool. Which means it can be delegated with a clear checklist and escalation protocol. The account manager reviews anything flagged for structural escalation rather than clicking through every URL personally.

For accounts managed by Creekside Marketing, this review is part of the standard weekly account management cadence, based on $20M+ in managed ad spend across Google Ads. Not every account surfaces ClickFarm problems in every session. But every account that skips placement review is accepting unknown risk on where its budget is actually running.

---

**Want an agency to run this for your account?** Creekside Marketing offers a free $10,000 Profit Audit that covers placement health alongside 40+ other account factors. [Request yours here.](/10k-profit-audit/)

---

**About the Author**

**Peterson Rainey** is the founder of Creekside Marketing, a Google Ads and Meta Ads agency managing $20M+ in annual ad spend. He writes about paid advertising strategy, account management, and what actually works in competitive ad markets.
