---
title: "The Google Ads Keyword Research Template We Use to Vet Every Keyword Before Launch"
description: "How we fill out a Google Ads keyword research spreadsheet using SEMrush and Keyword Planner, 6 data points per keyword, every campaign, every time."
date: "2026-09-11"
image: "article-images/blog-card-target.svg"
category: "Google Ads"
tags: ["Google Ads", "Keyword Research", "SEMrush", "Campaign Setup", "Google Keyword Planner"]
---

> **TL;DR:** Before building any Google Ads campaign, we fill out a keyword research spreadsheet with 6 data points per keyword pulled from SEMrush and Google Keyword Planner. We create one tab per ad group and export negative keywords before the campaign goes live. Every ad group gets its own research pass, every time.

| Metric | Value |
|, , |, , -|
| Data points tracked per keyword | 6 (position, volume, traffic %, PKD, CPC, intent flag) |
| Volume cross-check method | Average SEMrush volume with Google Keyword Planner volume |
| Negative keyword source | SEMrush Keyword Strategy Builder, exported before launch |
| Minimum location size for volume data | DMA region (not individual suburb) |
| Starting keyword method | Client's top organic keyword from SEMrush domain overview |
| Keyword redundancy check | Keyword Planner bar graph pattern comparison |

## What Is a Google Ads Keyword Research Template?

A Google Ads keyword research template is a structured spreadsheet that captures the data points you need to decide which keywords belong in each ad group before a campaign goes live. It records organic position, monthly search volume, traffic percentage, personal keyword difficulty, cost per click, and intent classification. This post walks through the exact process we use at Creekside Marketing, including how we use it to build a negative keyword list before the first dollar of spend. The walkthrough below is based directly on the video Peterson published to the Creekside Marketing YouTube channel: [How To Use The Google Ads Keyword Research Sheet](https://www.youtube.com/watch?v=Rv49nUo8qi8).

---

## The First Rule: One Research Tab Per Ad Group

The keyword research template applies to one ad group at a time, not one per campaign. According to Creekside Marketing's campaign setup process, you need to do this keyword research for every single ad group you create. If a campaign has three ad groups, you need three copies of the sheet or three duplicated tabs within the same spreadsheet. The practical implication is straightforward: keywords that belong in your "tandem skydiving" ad group may be negatives in your "solo skydiving" ad group. Running one research pass for the whole campaign means you lose that level of control before you even launch.

---

## How to Find Your Starting Keyword

The anchor keyword is the first keyword you enter into the research sheet, and it sets the direction for the entire ad group. Creekside Marketing's method for identifying it is to find the client's top organic keyword for the target ad group using SEMrush domain overview. The process: paste in the client's domain, set the location to the most specific geography that makes sense (not worldwide), scroll to the top organic keywords, and identify the highest-volume keyword that is relevant to the ad group you are building. In the skydiving example from the video, "skydiving" showed up as the top organic keyword with 49,500 average monthly searches and 12.4% of the site's organic traffic. That became the anchor keyword for the ad group. The logic is that the client's landing page is already aligned with that query, which supports Quality Score and ad relevance from the start.

---

## The 6 Data Points We Fill In Per Keyword

Once you have an anchor keyword, the template collects six data points before you make any launch decision. The first four come from SEMrush: organic position, monthly search volume, traffic percentage, and PKD. The fifth and sixth come from a cross-check in Google Keyword Planner, where you confirm volume and flag seasonal trends.

### 1. Organic Position

From SEMrush domain overview: where does the client rank organically for this keyword? A position of 8 means the site has established topical relevance. A position of 45 means Google barely connects the page to that query, which is worth knowing before committing paid budget to it.

### 2. Monthly Search Volume (SEMrush)

The average monthly searches as reported by SEMrush. This is your first volume estimate. Write it down. You will return to it when you cross-check with Google Keyword Planner and calculate an average. For the skydiving example, SEMrush reported 49,500.

### 3. Traffic Percentage

The percentage of the client's total organic traffic that this keyword drives. In the example, "skydiving" accounted for 12.4% of all organic site traffic. Higher percentages mean the keyword is core to the site's content. That is useful context when deciding how much budget to allocate against it in your initial bids.

### 4. PKD (Personal Keyword Difficulty)

This comes from SEMrush Keyword Magic Tool. Enter the keyword and paste in the client's domain to generate the PKD score. Personal Keyword Difficulty measures how difficult it is for that specific site to rank organically for the keyword, as opposed to the general keyword difficulty across all sites. According to Creekside Marketing's analysis, organic difficulty affects ad performance because landing page relevance (which correlates with how well Google connects the page to the keyword) influences Quality Score. A lower PKD signals better organic alignment, which tends to mean better ad relevance.

### 5. CPC (Cost Per Click)

Also available in Keyword Magic Tool. What are advertisers paying on average per click? For "skydiving," the CPC was $1.09. This sets budget expectations. A keyword with a $12 CPC needs a significantly higher conversion rate to justify inclusion versus a keyword with a $1.09 CPC. Knowing this before launch prevents surprises in week one.

### 6. Commercial or Transactional Intent Flag

If SEMrush assigns a "commercial" or "transactional" classification to the keyword, mark the checkbox. These tags indicate that searchers are closer to a purchase decision. Informational queries educate. Commercial and transactional queries convert. Flagging this column lets you prioritize keywords that are more likely to generate leads or sales from the start of the campaign.

---

## Building the Negative Keyword List Before Launch

This step is often skipped on first campaigns. It should not be. SEMrush's Keyword Strategy Builder shows you which sub-topics your target keyword will likely trigger under broad match, so you can exclude the irrelevant ones before they generate wasted clicks.

The process: go to Keyword Strategy Builder, enter your target keyword, wait for the sub-topic clusters to generate, review each cluster, and uncheck the ones that do not belong in this ad group. Then export to Excel or CSV and paste those keywords into the negative keyword section of the ad group in Google Ads.

One specific lesson from the video worth noting: always open each sub-topic cluster and check the individual keywords before excluding the entire group. In the skydiving example, a cluster labeled for solo parachuting included "tandem skydiving" as one of the keywords inside it. Excluding the whole cluster without checking would have inadvertently blocked a high-value commercial keyword. Spending 30 seconds reviewing the cluster contents prevents that mistake.

Also: if you find multiple clusters to exclude, you can combine all the exported keywords before pasting. The negatives apply to the entire ad group, not just the keyword you researched, so every keyword in that ad group benefits from the exclusions.

---

## Cross-Checking Volume With Google Keyword Planner

Google Keyword Planner provides a second monthly volume estimate. According to Creekside Marketing's workflow, this number is often more accurate than SEMrush because Google is working from its own search data rather than a third-party sample. The spreadsheet averages the two numbers.

For "skydiving," SEMrush reported 49,500 in monthly searches while Google Keyword Planner, filtered to Tennessee, Alabama, and Georgia, showed 6,600. The spreadsheet averages those two numbers to produce a working volume estimate. The geographic filter matters: Keyword Planner was set to three specific states rather than the full US, which accounts for the difference from SEMrush's national-level number.

One specific rule on location targeting in Keyword Planner: if you are targeting a local market, do not enter a suburb or small city directly. A suburb with 300,000 residents does not generate enough search data for the volume numbers to be meaningful. Instead, enter the nearest major city and select the DMA (Designated Market Area) region. A DMA includes a much larger radius of population, which produces statistically useful data. For a client in a Nashville suburb, enter Nashville and select the DMA region, not the suburb name alone.

Keyword Planner also reveals something valuable that SEMrush does not show as clearly: keyword redundancy. If two keywords display identical bar graphs in Keyword Planner, they trigger for the same searches. Adding both to your ad group does not give you more reach. It just makes your reporting harder to read. In the skydiving example, "skydiving" and "Skydive" had identical graphs. Similarly, "parachuting near me," "parachute jump near me," and "Skydive near me" all had identical graphs, meaning only one of those variations was needed in the ad group. This is not obvious from a keyword list alone. It requires the visual check in Keyword Planner.

---

## Recording Seasonal Trends Per Keyword

The final section of the research sheet tracks the seasonal pattern for each keyword using the bar chart in Google Keyword Planner. Keyword volume is not flat across the year. Knowing when a keyword peaks and when it drops gives you a basis for budget planning that does not depend on in-campaign learning.

For each keyword, record two values: peak months (highest average monthly searches) and valley months (lowest). For "skydiving," peak months were July and August. The valley was November. This tells you when to expect the most competition and highest CPCs, and when to expect a natural slowdown that is not a campaign problem.

Knowing this before launch prevents a common mistake: cutting budget in July when performance is high because CPCs ticked up, or panicking in November when volume drops are seasonal, not structural. If you have keywords with opposite seasonal patterns, you can plan budget allocation across the year instead of reacting to it month by month.

---

## What This Process Prevents

Running this template before launch prevents two specific problems that cost real money in early campaigns. Both problems are predictable and avoidable. The first is spending on redundant keywords that trigger for the same searches. The second is paying for clicks on searches that have no chance of converting for this ad group.

First, it catches keyword redundancy before spend. Because you are checking Keyword Planner bar graphs, you find out before launch that "skydiving" and "Skydive" trigger the same searches. Adding redundant keywords does not give you more traffic. It just adds noise to your data during the learning phase, when clarity matters most.

Second, it blocks obvious negative keyword failures before day one. By running the Keyword Strategy Builder and exporting negatives before launch, you are not learning from spend. You are preventing the wasted clicks on irrelevant sub-topics from the start. A campaign that launches with a clean negative keyword foundation learns faster because the data it collects is cleaner.

---

## Frequently Asked Questions

**How many keywords should I research per ad group?**
Research as many as you plan to include, plus enough to identify the right ones to exclude. Start with the anchor keyword from SEMrush, then use Keyword Planner to find additional candidates. Any two keywords with identical Keyword Planner graphs only need one representative. According to Creekside Marketing's process, quality of keyword selection matters more than volume of keywords.

**Should I use SEMrush or Google Keyword Planner?**
Use both. SEMrush gives you PKD, CPC, organic position, traffic percentage, and intent classification that Keyword Planner does not offer. Keyword Planner gives you more accurate monthly volume estimates and the bar graph pattern check for keyword redundancy. The two tools serve different purposes in the same workflow.

**How do I handle negative keywords if I am targeting a small geographic area?**
The negative keyword research process is the same regardless of geographic targeting. The SEMrush Keyword Strategy Builder works at the keyword level, not the location level. The location targeting in Google Keyword Planner affects volume data, not negative keyword discovery.

**What if a keyword has a low PKD but also a low CPC?**
That is often a good sign. Low PKD means your page aligns well with the keyword organically. Low CPC means competition is lighter. Combined with adequate monthly search volume, that combination typically produces favorable early campaign performance. Weigh it against the traffic percentage column: if the keyword also drives a meaningful share of organic traffic, it is worth prioritizing.

---

If you want more breakdowns like this, I write a weekly newsletter about what is actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

For more on how we structure campaigns after keywords are selected, see [The Google Ads 90-Day Bid Strategy Ladder: When to Switch from Max Clicks to Target CPA](/blog/google-ads-bid-strategy-progression-90-day-plan/).

For more on how we maintain keyword quality once campaigns are live, see [How to Add Negative Keywords From Search Terms in Google Ads](/blog/how-to-add-negative-keywords-google-ads-search-term-review/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid ads agency managing $20M+ in Google Ads and Meta Ads spend. He writes about campaign strategy, keyword research, and the operational workflows that keep performance consistent across 30+ client accounts.
