---
title: "Why Google Is Stealing Your Brand Conversions in Performance Max (And the Two Fixes That Take 20 Minutes)"
description: "Two overlooked Performance Max optimizations: blocking bad placements via Content Suitability and excluding brand keywords Google hijacks for easy conversions."
date: "2026-08-27"
image: "article-images/blog-card-trend.svg"
category: "Google Ads"
tags: ["Performance Max", "Google Ads", "PMax Optimization", "Negative Keywords"]
---

**TL;DR:** Most Performance Max campaigns waste money in two silent ways: showing on irrelevant placements (B2B software sites, mobile games, below-the-fold inventory) and capturing brand conversions that were already going to happen without any ad. These two 20-minute fixes, placement exclusions via Content Suitability and brand keyword exclusions in PMax search terms, reduce wasted spend without touching campaign structure or bidding.

| Metric | What Happens Without These Fixes |
|, -|, -|
| Wasted impressions | Showing on mobile games, B2B software sites, parked domains |
| Inflated ROAS | Brand searches triggering PMax ads, claiming easy conversions |
| Time to fix both | Under 20 minutes total |
| Tools required | Google Ads reporting + Content Suitability (no scripts needed) |

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Quick Ways To Optimize a Pmax Campaign in Google Ads](https://www.youtube.com/watch?v=PVTAdC0yjnQ).

## The Two Problems Inflating Your PMax Costs Right Now

Performance Max campaigns waste budget in two specific places most advertisers never address: irrelevant placements (gaming sites, B2B software platforms, parked domains) and brand keyword conversions Google claims without earning. Both problems inflate ROAS without producing incremental results, and both can be fixed in about 20 minutes without touching campaign structure or bidding.

Google controls where PMax ads run and which search terms trigger them. Most advertisers accept this as a fixed constraint and focus only on assets and bid targets. That leaves two significant money-wasting patterns completely untouched, and both directly affect the accuracy of the data Google uses to optimize your campaign.

## Fix 1: Pull the PMax Placement Report and Block Bad Inventory

The PMax placement report shows every site where your ads are appearing. Most advertisers do not know it exists. To access it, go to Reports inside your PMax campaign and search for "Performance Max placement." Add impressions as your column, set your date range to the last 30 days, and sort from highest to lowest. What you find will likely be surprising.

In a new account Peterson reviewed in this video, the placement report surfaced impressions on a B2B software company site and on gaming platforms. Neither placement is relevant to the advertiser's audience. Without pulling this report, there is no way to know this is happening.

Once you identify bad placements, excluding them takes two steps. Copy the placement URL from the report. Go to Tools, then Content Suitability, then Excluded Placements, and paste it in. That removes the specific site. For ongoing management, the blanket Content Suitability settings handle the bulk of low-quality inventory without requiring site-by-site identification.

### The Content Suitability Settings Worth Enabling

According to Creekside Marketing's analysis across $20M+ in managed ad spend, these Content Suitability configurations consistently reduce wasted spend:

**Inventory level: Limited or Standard (minimum).** For most businesses, Limited inventory blocks the most problematic placements by default. Standard is a reasonable middle ground if you want slightly broader reach while still avoiding the worst inventory.

**Sensitive content: Exclude.** Websites in this category do not produce high-quality conversions for most advertisers. The conversion rates from these placements reflect the low purchase intent of the traffic.

**Parked domains: Exclude.** Google noted a recent update may make this automatic. Confirm it is active in your account either way.

**Content not yet labeled: Exclude.** This is inventory Google's algorithm has not yet classified. Brand safety is unverified and audience quality is unknown. The risk-adjusted value of this inventory is low for the vast majority of advertisers.

**Below-the-fold display: Test, do not auto-exclude.** This is the one setting that requires judgment. Below-the-fold positions on mobile generate accidental clicks from scrolling users who do not intend to engage. But Peterson's direct observation in the video is that these placements also deliver very cheap impressions, which can matter for brand awareness goals at low CPM. His approach: exclude it in conversion-focused campaigns, test it when impression volume matters.

**Religious content: Exclude.** Peterson's direct assessment: people visiting religious content sites are generally not high-intent buyers for most products or services.

<figure>
<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif" role="img" aria-labelledby="svg1-title svg1-desc">
  <title id="svg1-title">PMax Content Suitability Audit Settings</title>
  <desc id="svg1-desc">Table showing six Content Suitability settings for Performance Max: Inventory Level (enable limited or standard), Sensitive Content (exclude), Parked Domains (exclude), Content Not Yet Labeled (exclude), Below-the-Fold Display (test), and Religious Content (exclude).</desc>
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg1)" rx="12"/>
  <text x="400" y="42" text-anchor="middle" fill="#f1f5f9" font-size="18" font-weight="700">PMax Content Suitability Audit</text>
  <text x="400" y="64" text-anchor="middle" fill="#94a3b8" font-size="13">Six settings that reduce wasted spend in Performance Max</text>
  <text x="60" y="100" fill="#64748b" font-size="12" font-weight="600">SETTING</text>
  <text x="500" y="100" fill="#64748b" font-size="12" font-weight="600">ACTION</text>
  <text x="620" y="100" fill="#64748b" font-size="12" font-weight="600">WHY</text>
  <line x1="40" y1="110" x2="760" y2="110" stroke="#334155" stroke-width="1"/>
  <rect x="40" y="118" width="720" height="44" rx="6" fill="#1e3a5f" fill-opacity="0.4"/>
  <text x="60" y="144" fill="#e2e8f0" font-size="13">Inventory Level</text>
  <rect x="490" y="128" width="90" height="24" rx="12" fill="#22c55e" fill-opacity="0.25"/>
  <text x="535" y="144" text-anchor="middle" fill="#86efac" font-size="12" font-weight="600">ENABLE</text>
  <text x="620" y="144" fill="#94a3b8" font-size="11">Set to Limited or Standard</text>
  <rect x="40" y="168" width="720" height="44" rx="6" fill="#1e293b" fill-opacity="0.3"/>
  <text x="60" y="194" fill="#e2e8f0" font-size="13">Sensitive Content</text>
  <rect x="490" y="178" width="90" height="24" rx="12" fill="#ef4444" fill-opacity="0.2"/>
  <text x="535" y="194" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">EXCLUDE</text>
  <text x="620" y="194" fill="#94a3b8" font-size="11">Low conversion quality</text>
  <rect x="40" y="218" width="720" height="44" rx="6" fill="#1e3a5f" fill-opacity="0.4"/>
  <text x="60" y="244" fill="#e2e8f0" font-size="13">Parked Domains</text>
  <rect x="490" y="228" width="90" height="24" rx="12" fill="#ef4444" fill-opacity="0.2"/>
  <text x="535" y="244" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">EXCLUDE</text>
  <text x="620" y="244" fill="#94a3b8" font-size="11">Zero purchase intent</text>
  <rect x="40" y="268" width="720" height="44" rx="6" fill="#1e293b" fill-opacity="0.3"/>
  <text x="60" y="294" fill="#e2e8f0" font-size="13">Content Not Yet Labeled</text>
  <rect x="490" y="278" width="90" height="24" rx="12" fill="#ef4444" fill-opacity="0.2"/>
  <text x="535" y="294" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">EXCLUDE</text>
  <text x="620" y="294" fill="#94a3b8" font-size="11">Unverified brand safety</text>
  <rect x="40" y="318" width="720" height="44" rx="6" fill="#1e3a5f" fill-opacity="0.4"/>
  <text x="60" y="344" fill="#e2e8f0" font-size="13">Below-the-Fold Display</text>
  <rect x="490" y="328" width="90" height="24" rx="12" fill="#f59e0b" fill-opacity="0.2"/>
  <text x="535" y="344" text-anchor="middle" fill="#fcd34d" font-size="12" font-weight="600">TEST</text>
  <text x="620" y="344" fill="#94a3b8" font-size="11">Cheap CPM vs. accidental clicks</text>
  <rect x="40" y="368" width="720" height="44" rx="6" fill="#1e293b" fill-opacity="0.3"/>
  <text x="60" y="394" fill="#e2e8f0" font-size="13">Religious Content</text>
  <rect x="490" y="378" width="90" height="24" rx="12" fill="#ef4444" fill-opacity="0.2"/>
  <text x="535" y="394" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">EXCLUDE</text>
  <text x="620" y="394" fill="#94a3b8" font-size="11">Low purchase intent</text>
  <text x="760" y="440" text-anchor="end" fill="#475569" font-size="10">creeksidemarketingpros.com</text>
</svg>
<figcaption>Content Suitability settings and recommended actions for Performance Max. Source: Creekside Marketing analysis across $20M+ in managed ad spend.</figcaption>
</figure>

For a deeper breakdown of the placement exclusion process, see our guide on [blocking Google Ads spam placements](/blog/stop-google-ads-spam-placements-content-suitability/).

## Fix 2: Stop Google From Claiming Your Brand Conversions

Google routinely shows Performance Max ads to people who are already searching for your brand name. When those people click and convert, Google records it as a PMax win. The problem is those users were already going to find you, the ad did not drive incremental business. It claimed credit for a conversion your existing brand reputation already earned.

Inside every PMax campaign, the Insights tab surfaces the search terms actually triggering your ads. Scroll to the bottom of that page and you will see what people searched before your ads appeared. In Peterson's experience reviewing PMax accounts, brand names appear there regularly in accounts that have not specifically addressed this.

As Peterson explains directly in this video: "Google will a lot of times essentially steal easily converted people that were already looking up your website and they will show an ad to them instead. You may see a conversion in Google Ads, but those people were already going to convert." That is not incremental growth, it is borrowed credit on a conversion that was already going to happen.

The same logic applies to competitor brand terms. PMax may surface your ads on searches for competitors. But without controlled bidding and targeted messaging at the campaign level, this is spend without the intent structure to convert it well.

<figure>
<svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif" role="img" aria-labelledby="svg2-title svg2-desc">
  <title id="svg2-title">How Brand Keyword Exclusions Fix PMax Conversion Inflation</title>
  <desc id="svg2-desc">Two-column flow diagram. Without exclusion: branded search triggers PMax ad, user converts, Google claims the conversion. With exclusion: brand search blocked by negative keyword, user converts via organic, PMax shows only incremental results.</desc>
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <marker id="arrow-red" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
    </marker>
    <marker id="arrow-green" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#22c55e"/>
    </marker>
  </defs>
  <rect width="800" height="420" fill="url(#bg2)" rx="12"/>
  <text x="400" y="38" text-anchor="middle" fill="#f1f5f9" font-size="17" font-weight="700">Brand Keyword Exclusions in PMax</text>
  <text x="200" y="70" text-anchor="middle" fill="#ef4444" font-size="13" font-weight="600">WITHOUT Brand Exclusion</text>
  <rect x="50" y="82" width="300" height="46" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="200" y="106" text-anchor="middle" fill="#94a3b8" font-size="11">User searches: "[Your Brand Name]"</text>
  <text x="200" y="121" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Branded Search Query</text>
  <line x1="200" y1="128" x2="200" y2="153" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
  <rect x="50" y="153" width="300" height="46" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1"/>
  <text x="200" y="177" text-anchor="middle" fill="#fca5a5" font-size="11">PMax ad intercepts above organic result</text>
  <text x="200" y="192" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">Google PMax Ad Appears</text>
  <line x1="200" y1="199" x2="200" y2="224" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
  <rect x="50" y="224" width="300" height="46" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="200" y="248" text-anchor="middle" fill="#94a3b8" font-size="11">User clicks and converts on your site</text>
  <text x="200" y="263" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Conversion Recorded</text>
  <line x1="200" y1="270" x2="200" y2="295" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)"/>
  <rect x="50" y="295" width="300" height="56" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1.5"/>
  <text x="200" y="317" text-anchor="middle" fill="#fca5a5" font-size="12" font-weight="600">PMax Claims the Conversion</text>
  <text x="200" y="333" text-anchor="middle" fill="#fca5a5" font-size="11">ROAS inflated, no incremental value</text>
  <text x="200" y="346" text-anchor="middle" fill="#7f1d1d" font-size="10">Person was already going to convert</text>
  <line x1="400" y1="62" x2="400" y2="378" stroke="#334155" stroke-width="1" stroke-dasharray="6,4"/>
  <text x="600" y="70" text-anchor="middle" fill="#22c55e" font-size="13" font-weight="600">WITH Brand Exclusion</text>
  <rect x="450" y="82" width="300" height="46" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="600" y="106" text-anchor="middle" fill="#94a3b8" font-size="11">User searches: "[Your Brand Name]"</text>
  <text x="600" y="121" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Branded Search Query</text>
  <line x1="600" y1="128" x2="600" y2="153" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-green)"/>
  <rect x="450" y="153" width="300" height="46" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1"/>
  <text x="600" y="177" text-anchor="middle" fill="#86efac" font-size="11">PMax skips, brand keyword excluded</text>
  <text x="600" y="192" text-anchor="middle" fill="#86efac" font-size="12" font-weight="600">Negative Keyword Blocks PMax</text>
  <line x1="600" y1="199" x2="600" y2="224" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-green)"/>
  <rect x="450" y="224" width="300" height="46" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="600" y="248" text-anchor="middle" fill="#94a3b8" font-size="11">User clicks organic result, converts</text>
  <text x="600" y="263" text-anchor="middle" fill="#e2e8f0" font-size="12" font-weight="600">Organic Conversion, No Ad Cost</text>
  <line x1="600" y1="270" x2="600" y2="295" stroke="#22c55e" stroke-width="2" marker-end="url(#arrow-green)"/>
  <rect x="450" y="295" width="300" height="56" rx="8" fill="#052e16" stroke="#22c55e" stroke-width="1.5"/>
  <text x="600" y="317" text-anchor="middle" fill="#86efac" font-size="12" font-weight="600">PMax Shows Accurate Data</text>
  <text x="600" y="333" text-anchor="middle" fill="#86efac" font-size="11">Budget spent on actual new acquisition</text>
  <text x="600" y="346" text-anchor="middle" fill="#14532d" font-size="10">Bidding targets reflect real performance</text>
  <text x="760" y="410" text-anchor="end" fill="#475569" font-size="10">creeksidemarketingpros.com</text>
</svg>
<figcaption>Without brand exclusions, PMax claims credit for branded search conversions it did not earn. With exclusions, brand traffic converts via organic and PMax data reflects only incremental new-acquisition results. Source: Creekside Marketing.</figcaption>
</figure>

### How to Add Brand Keyword Exclusions to PMax

In your PMax campaign, go to Campaign Settings, find the Negative Keywords section, and add your brand terms there.

Use phrase match. Exact match only blocks the precise query you enter and misses variations. Broad match blocks too aggressively and can inadvertently filter legitimate non-brand searches containing a similar word. Phrase match blocks the brand term and its close variations while leaving unrelated searches untouched. Peterson uses phrase match across client accounts for exactly this reason.

One timing note: do not add brand exclusions in the early weeks of a new PMax campaign. Branded searches provide conversion signals that help the campaign's machine learning build a performance baseline. Once the campaign has consistent conversion data across several weeks, that is the right time to exclude brand terms and push the campaign toward genuinely incremental traffic.

## Why Data Quality Comes Before Bidding Changes

Adjusting PMax bids before fixing placement and brand conversion issues means optimizing against inaccurate data. If your reported ROAS includes brand conversions Google did not earn and impressions from irrelevant sites that never convert, the number you are bidding toward does not reflect real campaign performance. Changing bids based on it does not solve the underlying problem.

The standard PMax troubleshooting playbook leads with bidding: raise the target ROAS, lower it, switch strategies, increase budget. This is not wrong advice, but the sequencing is off. Bidding changes compound data problems. Fixing placement inventory and brand keyword noise first creates a clean baseline. Then you evaluate what the campaign is actually producing on new-acquisition traffic, and bid adjustments made against that number mean something.

Creekside Marketing's practice across $20M+ in managed Google Ads spend: clean the data before touching bids. The improvement in decision quality makes every subsequent optimization more reliable.

For more on how PMax fits into a full campaign structure and how to give Google the right learning signals, see our post on [Performance Max signals and setup](/blog/performance-max-signals-setup-framework/).

## How Often to Run Each Audit

The placement report review should happen monthly. New placements appear as PMax campaigns run, and inventory that was acceptable in month one can shift or produce poor results over time. Build this into standard monthly account maintenance so bad placements do not accumulate across a full quarter without being caught.

Brand keyword exclusions are a one-time setup with a quarterly spot-check. Once brand terms are excluded in a campaign, they stay excluded. Review every three months to confirm the exclusion list still reflects your current brand naming and that no new brand variations are slipping through.

## FAQ

**How do I find the Performance Max placement report?**
In Google Ads, open your PMax campaign, go to Reports, and search for "Performance Max placement." Add impressions as a column, set a 30-day date range, and sort from highest to lowest. The report shows every site where your PMax ads are generating impressions.

**Can I exclude placements in bulk?**
Yes. Select multiple placements from the report and exclude them together. You can also upload a bulk exclusion list to Content Suitability. The blanket Content Suitability settings handle the majority of low-quality inventory automatically.

**Does excluding brand keywords in PMax reduce total conversions?**
Overall conversions typically stay flat or shift to organic attribution rather than declining. Brand traffic continues to convert through organic search rather than a paid PMax ad. What changes is that PMax data now reflects only incremental new-acquisition results, making bid optimization significantly more accurate.

**How do I confirm Google is claiming brand conversions in my PMax campaign?**
Go to the Insights tab inside your PMax campaign. Scroll to the search terms section at the bottom. If your brand name, your domain, or close variations appear there, those are branded searches triggering PMax ads. That traffic should almost certainly be excluded.

**When is it too early to add brand keyword exclusions?**
In the first several weeks of a new PMax campaign, branded search conversions help build the campaign learning baseline. Wait until the campaign has consistent conversion data before adding brand exclusions. A campaign still in the learning phase that loses branded conversion volume may struggle to exit that phase properly.

## The 20-Minute Audit

Two checks, under 10 minutes each, on any PMax campaign that has been active for more than a month.

**Placement audit (10 minutes):** Open the PMax placement report for the last 30 days and sort by impressions. Identify placements that cannot convert for your business and exclude them via Content Suitability. Confirm Content Suitability is set to Limited or Standard inventory with sensitive content, parked domains, and unlabeled content excluded.

**Brand keyword audit (10 minutes):** Go to the Insights tab in your PMax campaign. Scroll to search terms. Look for your brand name and domain. If brand terms appear, add them as phrase match negative keywords in Campaign Settings.

No scripts. No third-party tools. No campaign restructuring required.

---

If your Performance Max campaign needs a full review beyond these two fixes, [request your free 10K profit audit](/10k-profit-audit/) and we will walk through the account with you.

---

**About the Author: Peterson Rainey**

Peterson Rainey is the founder of Creekside Marketing, a paid ads agency managing $20M+ in Google and Meta ad spend across industries including dental, medical, home services, and ecommerce. Creekside Marketing specializes in Google Ads and Meta Ads management for businesses generating $50K-$500K per month. Learn more about our [Google Ads management services](/digital-advertising/google-ads/).