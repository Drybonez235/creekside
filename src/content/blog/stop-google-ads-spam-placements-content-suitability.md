
---
title: "Why Your Google Ads Are Showing Up on Mobile Games (And How to Block 99% of Spam Placements)"
description: "Stop wasting ad spend on spam placements. Step-by-step Google Ads Content Suitability setup from a manager of $20M+ in spend. Under 5 minutes."
date: "2026-07-26"
image: "article-images/stop-google-ads-spam-placements-content-suitability.avif"
category: "Google Ads"
tags: ["Google Ads", "Performance Max", "Display Ads", "Ad Placements", "Spam Leads"]
---

> **TL;DR:** Google Ads Performance Max, Display, and Demand Gen campaigns routinely show your ads on mobile game apps, clickbait websites, and below-the-fold banner positions where users accidentally click. The fix is a 5-minute Content Suitability setup. Excluding embedded YouTube, below-the-fold placements, parked domains, and all 140 app categories blocks the overwhelming majority of spam. Run specific exclusions first. Limited Inventory is the last resort, not the first step.

| Metric | Value |
|--------|-------|
| App categories to exclude | 140 |
| Estimated spam reduction | ~99% after all exclusions |
| Campaign types affected | Performance Max, Demand Gen, Display |
| Setting location | Google Ads: Tools > Content Suitability |
| Recommended sequence | Specific exclusions first, Limited Inventory last |


If you are running Performance Max, Demand Gen, or Display campaigns and wondering why your cost per lead keeps climbing while conversion quality drops, Google Ads spam placements are likely a major factor. A portion of your budget is going to mobile game apps, clickbait websites, and ad positions where accidental clicks are the norm rather than the exception.

This is one of the most consistent budget leaks we find when auditing new accounts at Creekside Marketing. The fix does not require a budget increase or a campaign rebuild. It takes less than five minutes in Google Ads. This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Avoiding Spam Leads On Google Ads](https://www.youtube.com/watch?v=X5ZKmfwP7xs).

---

## What Are Google Ads Spam Placements and Why Do They Happen

Google's Display, Performance Max, and Demand Gen campaigns use machine learning to distribute your ads across websites, apps, and video players. The algorithm optimizes for the signals it can measure. It does not distinguish between genuine purchase intent and an accidental tap.

Based on Creekside Marketing's analysis across $20M+ in managed ad spend, spam placements reliably cluster around a few predictable placement types:

**Mobile app placements.** Your ad appears as a banner inside a mobile app, most commonly a game. The user is actively playing. A banner appears. They reach for the X button to close it, miss, and tap your ad. They return to the game immediately. You get charged for that click. Google's network includes 140 distinct app categories, and the accidental click dynamic applies broadly across them.

**Below-the-fold banner positions.** These are fixed banner ads anchored to the bottom of mobile websites and apps. According to Creekside Marketing's analysis, this is the single most common source of wasted spend in Display and Performance Max campaigns. Users scrolling or navigating accidentally tap these banners constantly.

**Embedded YouTube videos.** Third-party websites often embed YouTube videos. Your ads can appear inside those embeds. The viewer intent and attention quality are fundamentally different from someone watching content on YouTube.com. As Peterson explained in the source video: "There are billions of hours of YouTube content being consumed every day. We don't want to waste time with people who are getting shown a quick 5-second video on some type of mobile website that all they're trying to do is attract attention for their own ads."

**Parked domains.** These are placeholder pages that exist primarily to collect ad revenue from networks like Google Display. No real audience. No purchase intent.

**Content not yet labeled.** If Google has not crawled and categorized a site, it cannot make a reasonable placement decision for your ads. Allowing your ads to serve on unlabeled content is letting the algorithm guess blindly.

<figure role="img" aria-label="Google Ads placement types ranked by spam risk based on Creekside Marketing analysis of accounts with $20M+ in managed spend">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bg1)" rx="10"/>
  <text x="40" y="44" fill="#f1f5f9" font-size="17" font-weight="700">Google Ads Spam Placement Risk Profile</text>
  <text x="40" y="64" fill="#64748b" font-size="12">Relative spam risk by placement type — Creekside Marketing analysis ($20M+ managed spend)</text>
  <text x="40" y="104" fill="#cbd5e1" font-size="13" font-weight="600">Mobile App Placements</text>
  <text x="40" y="120" fill="#64748b" font-size="11">"Worst placements ever" — accidental clicks on game banners (140 categories)</text>
  <rect x="40" y="128" width="575" height="18" rx="4" fill="#ef4444" opacity="0.85"/>
  <text x="625" y="141" fill="#fca5a5" font-size="12" font-weight="700">96%</text>
  <text x="40" y="176" fill="#cbd5e1" font-size="13" font-weight="600">Below-the-Fold Banner Positions</text>
  <text x="40" y="192" fill="#64748b" font-size="11">"Most common place for wasted spend" — accidental taps while scrolling or navigating</text>
  <rect x="40" y="200" width="528" height="18" rx="4" fill="#f97316" opacity="0.85"/>
  <text x="578" y="213" fill="#fed7aa" font-size="12" font-weight="700">88%</text>
  <text x="40" y="248" fill="#cbd5e1" font-size="13" font-weight="600">Parked Domains</text>
  <text x="40" y="264" fill="#64748b" font-size="11">Placeholder pages built to collect ad revenue — no real audience or purchase intent</text>
  <rect x="40" y="272" width="492" height="18" rx="4" fill="#eab308" opacity="0.85"/>
  <text x="542" y="285" fill="#fef08a" font-size="12" font-weight="700">82%</text>
  <text x="40" y="320" fill="#cbd5e1" font-size="13" font-weight="600">Unlabeled / Uncrawled Content</text>
  <text x="40" y="336" fill="#64748b" font-size="11">Google has not categorized these pages — algorithm makes blind placement decisions</text>
  <rect x="40" y="344" width="450" height="18" rx="4" fill="#3b82f6" opacity="0.85"/>
  <text x="500" y="357" fill="#bfdbfe" font-size="12" font-weight="700">75%</text>
  <text x="40" y="392" fill="#cbd5e1" font-size="13" font-weight="600">Embedded YouTube (on third-party sites)</text>
  <text x="40" y="408" fill="#64748b" font-size="11">Much lower viewer intent than watching on YouTube.com — "too many levels"</text>
  <rect x="40" y="416" width="408" height="18" rx="4" fill="#8b5cf6" opacity="0.8"/>
  <text x="458" y="429" fill="#ddd6fe" font-size="12" font-weight="700">68%</text>
  <text x="760" y="444" fill="#334155" font-size="10" text-anchor="end">creeksidemarketingpros.com</text>
</svg>
<figcaption>Google Ads placement types ranked by spam risk, based on Creekside Marketing analysis of accounts with $20M+ in managed spend. Percentages reflect relative spam risk, not absolute click volume.</figcaption>
</figure>

---

## The Right Approach: Specific Exclusions Before Limited Inventory

Here is where most advertisers get this wrong. When they discover spam placements, the first instinct is to enable Limited Inventory. That setting does reduce spam, but it restricts your ads to a smaller pool of premium placements and removes some genuinely good inventory along with the bad.

Peterson's approach, developed across dozens of client accounts: run the specific exclusions first. Targeted exclusions are surgical. They remove the problematic placement types without restricting the inventory tiers where your ads perform well.

Only after specific exclusions are in place, and only if spam persists, should you enable Limited Inventory.

Navigate to: **Tools > Content Suitability** in your Google Ads account. Everything that follows lives inside this menu.

---

## Step 1: Exclude High-Spam Placement Categories

In Content Suitability, you will see a list of content types and placement categories. Start by excluding these:

**Embedded YouTube videos.** Your ads should appear to viewers watching content on YouTube.com, not to people encountering a YouTube embed on a random third-party site. The intent and attention quality are not comparable. There are billions of hours of YouTube content consumed on the platform every day. Show up there, not in someone else's embedded player on a site that exists to attract ad impressions.

**Below-the-fold placements.** These banner positions generate accidental clicks at a disproportionate rate. Excluding them is often the single highest-impact action in this entire setup.

**Parked domains.** Verify this is checked and excluded. Parked domains are placeholder pages built to collect ad revenue. They have no real visitors with purchase intent.

**Content not yet labeled.** Google needs to have crawled and categorized a site before it can make a sensible placement decision. Excluding unlabeled content stops blind placements.

**Live streaming videos** is situational. Peterson describes it as "50/50." Exclude it if you are seeing spam from live stream placements specifically.

---

## Step 2: Exclude All 140 App Categories

App placements deserve separate attention because of their scale and the mechanics of how accidental clicks happen.

The mechanism is consistent: a banner ad appears while a user is engaged with a mobile app, typically a game. They try to close the ad. They miss the X button. They tap your ad. They leave immediately and return to whatever they were doing. You pay for the click.

Google's network spans 140 app categories. Excluding them individually is genuinely tedious. The efficient approach is to paste all 140 placement exclusions at once into the Google Ads placement exclusions field. A complete copy-paste list is in the description of the [source video](https://www.youtube.com/watch?v=X5ZKmfwP7xs).

Once excluded, app placements are removed from your campaign eligibility entirely.

---

## Step 3: Content Themes and Keyword Exclusions (Situational)

The Content Suitability menu also includes content theme controls and excluded content keywords. These are not required for every account.

**Content themes:** If specific content categories are clearly misaligned with your brand or audience, exclude them. This is situational. Review these settings only if you are in a sensitive vertical or after the high-priority exclusions above are in place.

**Excluded content keywords:** If you are repeatedly showing up on placements centered on a specific keyword, you can exclude that keyword to block the pattern. This is a precision tool for persistent, specific placement problems, not a routine first step.

---

## Step 4: Limited Inventory (Last Resort Only)

After implementing the specific exclusions above, run your campaigns for a full week and review placement quality. If spam placements are still a material problem, enable Limited Inventory.

This restricts your ads to Google's highest-quality inventory tier. Combined with the specific exclusions in Steps 1 through 3, Creekside Marketing's analysis puts estimated spam reduction at approximately 99%.

The reason Peterson reserves this step for last: Limited Inventory removes some legitimate placements alongside the bad ones. The specific exclusions in the earlier steps are targeted. Limited Inventory is a blanket restriction. Use the precise tool before the broad one.

<figure role="img" aria-label="Google Ads Content Suitability setup sequence: four steps from specific exclusions to Limited Inventory as last resort">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 360" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="800" height="360" fill="url(#bg2)" rx="10"/>
  <text x="400" y="38" fill="#f1f5f9" font-size="17" font-weight="700" text-anchor="middle">Content Suitability Setup: Run in Order, Stop When Spam Is Resolved</text>
  <text x="400" y="58" fill="#64748b" font-size="12" text-anchor="middle">Tools > Content Suitability in Google Ads</text>
  <rect x="28" y="78" width="160" height="210" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="108" y="108" fill="#93c5fd" font-size="26" font-weight="800" text-anchor="middle">01</text>
  <text x="108" y="132" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">Exclude</text>
  <text x="108" y="149" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">Placement Types</text>
  <text x="108" y="174" fill="#94a3b8" font-size="11" text-anchor="middle">Embedded YouTube</text>
  <text x="108" y="191" fill="#94a3b8" font-size="11" text-anchor="middle">Below-the-fold</text>
  <text x="108" y="208" fill="#94a3b8" font-size="11" text-anchor="middle">Parked domains</text>
  <text x="108" y="225" fill="#94a3b8" font-size="11" text-anchor="middle">Unlabeled content</text>
  <rect x="53" y="262" width="110" height="20" rx="4" fill="#1d4ed8" opacity="0.7"/>
  <text x="108" y="276" fill="#bfdbfe" font-size="11" text-anchor="middle">START HERE</text>
  <text x="205" y="186" fill="#475569" font-size="26" text-anchor="middle">&#8594;</text>
  <rect x="220" y="78" width="160" height="210" rx="8" fill="#1e3a2f" stroke="#22c55e" stroke-width="1.5"/>
  <text x="300" y="108" fill="#86efac" font-size="26" font-weight="800" text-anchor="middle">02</text>
  <text x="300" y="132" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">Exclude All</text>
  <text x="300" y="149" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">App Categories</text>
  <text x="300" y="174" fill="#94a3b8" font-size="11" text-anchor="middle">All 140 categories</text>
  <text x="300" y="191" fill="#94a3b8" font-size="11" text-anchor="middle">Paste list at once</text>
  <text x="300" y="208" fill="#94a3b8" font-size="11" text-anchor="middle">Mobile games + apps</text>
  <text x="300" y="225" fill="#94a3b8" font-size="11" text-anchor="middle">Accidental click zones</text>
  <rect x="245" y="262" width="110" height="20" rx="4" fill="#15803d" opacity="0.7"/>
  <text x="300" y="276" fill="#bbf7d0" font-size="11" text-anchor="middle">HIGH IMPACT</text>
  <text x="397" y="186" fill="#475569" font-size="26" text-anchor="middle">&#8594;</text>
  <rect x="412" y="78" width="160" height="210" rx="8" fill="#2d1e3a" stroke="#a855f7" stroke-width="1.5"/>
  <text x="492" y="108" fill="#d8b4fe" font-size="26" font-weight="800" text-anchor="middle">03</text>
  <text x="492" y="132" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">Content Themes</text>
  <text x="492" y="149" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">and Keywords</text>
  <text x="492" y="174" fill="#94a3b8" font-size="11" text-anchor="middle">Situational only</text>
  <text x="492" y="191" fill="#94a3b8" font-size="11" text-anchor="middle">Incompatible themes</text>
  <text x="492" y="208" fill="#94a3b8" font-size="11" text-anchor="middle">Recurring keyword</text>
  <text x="492" y="225" fill="#94a3b8" font-size="11" text-anchor="middle">placement patterns</text>
  <rect x="437" y="262" width="110" height="20" rx="4" fill="#6b21a8" opacity="0.7"/>
  <text x="492" y="276" fill="#e9d5ff" font-size="11" text-anchor="middle">OPTIONAL</text>
  <text x="589" y="186" fill="#475569" font-size="26" text-anchor="middle">&#8594;</text>
  <rect x="604" y="78" width="168" height="210" rx="8" fill="#3a1e1e" stroke="#ef4444" stroke-width="1.5"/>
  <text x="688" y="108" fill="#fca5a5" font-size="26" font-weight="800" text-anchor="middle">04</text>
  <text x="688" y="132" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">Limited</text>
  <text x="688" y="149" fill="#f1f5f9" font-size="13" font-weight="700" text-anchor="middle">Inventory</text>
  <text x="688" y="174" fill="#94a3b8" font-size="11" text-anchor="middle">Only if steps 1-3</text>
  <text x="688" y="191" fill="#94a3b8" font-size="11" text-anchor="middle">don't resolve spam</text>
  <text x="688" y="208" fill="#94a3b8" font-size="11" text-anchor="middle">Restricts some</text>
  <text x="688" y="225" fill="#94a3b8" font-size="11" text-anchor="middle">good placements too</text>
  <rect x="633" y="262" width="110" height="20" rx="4" fill="#991b1b" opacity="0.7"/>
  <text x="688" y="276" fill="#fecaca" font-size="11" text-anchor="middle">LAST RESORT</text>
  <text x="400" y="320" fill="#94a3b8" font-size="12" text-anchor="middle">Combined result after all applicable steps: ~99% spam placement reduction</text>
  <text x="760" y="350" fill="#334155" font-size="10" text-anchor="end">creeksidemarketingpros.com</text>
</svg>
<figcaption>The four-step Content Suitability sequence. Most accounts resolve spam placements after Steps 1 and 2. Limited Inventory is the last resort only.</figcaption>
</figure>

---

## Why Spam Placements Exist: The Economic Reality Behind Clickbait Sites

Most Google Ads tutorials explain the how-to without the why. Understanding the economic incentive behind spam placements is useful context for why this problem will not self-correct.

Many of the sites your ads land on were built specifically for this purpose. Their business model is attracting large volumes of traffic, any traffic, and monetizing it through ad networks. The content on the site is a vehicle for ad impressions and clicks, not something that serves a real audience with real intent.

As Peterson described it in the source video: "A lot of times these are just really clickbait websites that are just trying to get people to click on their websites and spend some time there so they can show ads like yours on them, even though people have no intent of making any purchases or care about your ads at all."

Google's algorithm does not penalize these sites for delivering poor advertiser ROI. It pays them for generating clicks. That economic misalignment is structural and will not disappear on its own. The only fix is account-level exclusions configured by the advertiser.

---

## Content Suitability vs. Negative Keywords: Two Different Problems

Content Suitability controls where your ads appear. Negative keywords control what searches trigger your ads. Both matter. They solve different problems.

If your issue is spam placements, accidental clicks, and low-quality display inventory, the fix is Content Suitability. If your issue is ads triggering on searches with wrong intent, the fix is [building and maintaining a strong negative keyword strategy](/blog/how-to-review-search-terms-and-add-negative-keywords-without-tanking-your-google-ads-account/).

For Performance Max campaigns specifically, both problems often coexist. PMax runs across Search, Display, Shopping, and YouTube simultaneously. The Content Suitability settings in this post target the Display component. We covered how [Performance Max campaigns waste budget through other mechanisms](/blog/the-easiest-way-to-stop-performance-max-from-wasting-your-google-ads-budget/) in a separate breakdown.

---

## Frequently Asked Questions

**Do Content Suitability settings apply account-wide or per campaign?**

Content Suitability in Google Ads is an account-level control. When you exclude a placement type or content category, the exclusion applies across all campaigns in that account running Display, Demand Gen, or Performance Max formats. One configuration, account-wide coverage.

**Will excluding app categories reduce reach significantly?**

For most lead generation and local service accounts, app placements deliver low-quality traffic. Excluding them typically improves cost per lead without meaningfully reducing volume from high-intent placements. The clicks you lose are the ones you did not want.

**How quickly will I see results after enabling these exclusions?**

Most accounts see a reduction in spam click volume within a few days as Google's serving engine updates placement eligibility. Allow a full week before evaluating the full impact on performance metrics.

**Should I exclude all content themes by default?**

No. Only exclude themes clearly incompatible with your brand or audience. Over-excluding can restrict reach unnecessarily. Complete Steps 1 and 2 first and revisit content themes only if spam persists afterward.

**What if spam placements continue after all these steps?**

Enable Limited Inventory as a final measure. This restricts your ads to Google's premium inventory tier. Combined with the specific exclusions above, Creekside Marketing's analysis indicates approximately 99% spam reduction.

**Does this setup work for Search campaigns too?**

Content Suitability applies to Display, Demand Gen, and Performance Max campaigns. Standard Search campaigns do not use placement-based targeting, so these settings do not affect them. Search spam is a separate problem addressed through negative keywords and audience adjustments.

---

## The Bottom Line

Google Ads spam placements are a structural feature of Display, Demand Gen, and Performance Max networks. They will not self-correct. The fix is in your account settings.

The sequence: exclude the specific placement categories first, then exclude all 140 app categories, apply content theme exclusions if needed, and enable Limited Inventory only if spam persists after all targeted exclusions are in place. Five minutes of setup. Measurable improvement in how your budget is allocated toward placements that generate actual buyer intent.

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

*Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend. He works with service-based businesses and e-commerce brands on performance-driven paid advertising strategies.*
