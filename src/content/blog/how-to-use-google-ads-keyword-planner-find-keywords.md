---
title: "How to Use Google Ads Keyword Planner: The DMA Rule and Graph Test We Run Before Adding a Single Keyword"
description: "The Keyword Planner workflow we use on every new campaign: DMA region targeting, the duplicate graph test, and the website URL method."
date: "2026-09-10"
image: "article-images/blog-card-target.svg"
category: "Google Ads"
tags: ["Google Ads", "Keyword Research", "Keyword Planner", "Campaign Setup"]
---

Knowing how to use Google Ads Keyword Planner correctly is one of those things that separates a campaign that starts clean from one that needs three months of negative keyword work before it stops wasting budget. This walkthrough covers the access path, the two research methods, and two specific tests we run before adding a single keyword to an ad group.

> **TL;DR:** Google Ads Keyword Planner gives you two entry points, by keyword and by website URL. Always target a DMA region minimum; suburbs under ~300,000 people produce unreliable volume data. When two keywords show identical trend graphs in Keyword Planner, they map to the same search terms, adding both to an ad group splits your data without expanding reach. Start with the keyword method, switch to website URL when results cycle.

| What | Detail |
|, -|, -|
| Access path | Tools → Keyword Planner → Discover New Keywords |
| Minimum target area | DMA region (several million people) |
| Example area that is too small | Franklin, TN (~300,000 people) |
| Recommended starting rows | ~30, filtered by average monthly searches |
| Entry methods | By keyword (iterative) or by website URL |
| Identical trend graph = | Same search terms, only one keyword needed |

---

## How to Access Google Ads Keyword Planner

Google Ads Keyword Planner lives under Tools in your Google Ads account. Navigate there, then click "Discover New Keywords." If a setup wizard intercepts you when you are working in a new account, the practical fix is to duplicate the browser tab and use that second tab to navigate directly to Tools. That bypasses the wizard and drops you into the full interface. Once there, you are ready to start entering keywords or a website URL.

Most people access Keyword Planner when building a new campaign for the first time. The tool gives you actual search volume from Google's own data, which makes it more reliable for the local and regional demand estimates you need before committing to a campaign structure.

---

## Start With the Most Obvious Keyword, Then Let Google Expand It

Enter the single most obvious keyword that describes what you sell. For a skydiving company targeting customers in Chattanooga, Alabama, Tennessee, and Georgia, that starting keyword is "skydiving." Google Keyword Planner returns a set of suggestions based on that input, and from there the process becomes iterative, you feed the high-volume results back into the tool as new inputs, letting the platform surface adjacent search intent you might not have identified on your own.

This iterative approach works because you are pulling on real search behavior rather than guessing at synonyms. Keep running additional keyword inputs until you notice the results cycling back to the same terms you have already seen. That repetition signals that you have found the outer edge of what Keyword Planner can give you through keywords alone. At that point, switch to the website URL method (covered below).

---

## The DMA Rule: Why Your Target Area Changes Every Number You See

Running Keyword Planner against a small geographic area produces data that looks plausible but is not reliable. Peterson walks through a concrete example in the video: Franklin, Tennessee is a suburb outside Nashville with around 300,000 people. That population is not enough search volume for Keyword Planner to return data you can trust for campaign planning.

The minimum usable targeting area is the DMA (Designated Market Area) region centered on the nearest major city. A DMA covers the full metropolitan radius and gives you several million people in the search pool. For the Franklin example, that means targeting the Nashville DMA instead, even though the actual campaign will serve a tighter area. You use the DMA for research purposes, then set your campaign's geographic targeting to the precise area you actually want to reach.

Getting the area wrong before you look at any numbers means every volume estimate is suspect. A keyword might appear low-volume in a narrow geography and still be worth targeting. Or it might look strong in the DMA but barely reach your actual service area. Establish the DMA baseline first, then validate against your real target geography.

| Location Example | Population | Keyword Planner Reliability |
|, -|, -|, -|
| Franklin, TN (suburb) | ~300,000 | Too small, data is unreliable |
| Nashville DMA region | Several million | Reliable baseline for planning |
| Multi-state (Alabama + Tennessee + Georgia) | Large enough | Works for state-level campaigns |

The skydiving company in the video example is already using the multi-state approach, which is appropriate for a business with physical locations or coverage across those three states.

---

## The Duplicate Graph Test: How to Stop Diluting Your Campaign Data

When Keyword Planner displays trend graphs next to your keyword results, compare them visually across the list. If two keywords show an identical graph shape, they are mapping to the same search terms. Adding both to one ad group does not increase your reach, both keywords trigger ads for the same searches. The only effect is that your performance data gets split between them.

Peterson gives the example in the video: if "tandem jump skydiving" and "tandem parachute" show the exact same graph, there is no need to include both. They represent the same search terms. Including both means each keyword gets half the clicks, half the conversions, and half the signal. That makes it harder to reach statistical significance on either, which in turn slows down Smart Bidding and makes it harder to identify what is actually working.

The quality control here is simple: before you add a keyword to your list, check whether its graph matches anything already on that list. One unique graph pattern earns one spot in the ad group. This is one of the cleaner discipline rules we apply from the start of a campaign because fixing it after the fact means resetting learning cycles.

---

## The Website URL Method: A Second Pass When Keyword Research Cycles

Once keyword-first research starts returning the same results repeatedly, switch to "Start with a Website" inside Keyword Planner. Instead of entering search terms as your input, you enter a URL. Google surfaces keyword ideas based on what that page is actually about.

Peterson describes two use cases for this in the video. If you are building keywords for a specific ad group tied to one service, enter that service page URL. Keyword Planner will return ideas matched to that page's content. If you want broader keyword ideas across the whole business, use the homepage or root domain.

For the skydiving business, using the full website URL surfaced keyword categories that the keyword-first approach had not produced:

- **Location-based keywords:** Terms tied to specific cities in the target region (for example, Atlanta, Georgia-area searches)
- **Emerging trend terms:** At the time of the video, Halo parachuting was appearing as a rising search category, not something that would have shown up by typing "skydiving" into the keyword field
- **Pricing intent:** Terms like "skydiving how much does it cost" and "skydiving prices", people actively looking for cost information before booking

These are different intent categories from the general skydiving searches you get through keyword-first research. Whether to add them depends on your ad group structure. Pricing intent keywords are worth including if your landing page addresses pricing directly. Location keywords may warrant their own separate ad groups if you have the budget to segment by city or metro area.

---

## Selecting Which Keywords Belong in the Ad Group

Filter your Keyword Planner results by average monthly searches. Peterson's recommendation from the video is to work with around 30 rows as your starting set, enough volume to identify the primary intent signals without filling the ad group with too many variables before you have data.

From those 30 candidates, apply two filters sequentially:

**Filter 1: Graph uniqueness.** Apply the duplicate graph test described above. Remove any keyword whose graph matches one you have already accepted onto the list.

**Filter 2: Intent alignment.** Does this keyword represent the intent you are trying to capture in this specific ad group? A tandem-jump ad group should not include solo skydiving or equipment searches, those belong in separate ad groups or as negatives. Keep only keywords whose searcher is actually a potential buyer of what this specific ad group is selling.

The result is a tight keyword list built on real search volume data and cleaned of duplicates before the campaign ever goes live. That starting structure means the first weeks of data are clean and actionable rather than diluted across redundant terms.

For the negative keyword side of this process, what to exclude before launch and why that work needs to happen before you go live, see our breakdown of [how to add negative keywords from search terms in Google Ads](/blog/how-to-add-negative-keywords-google-ads-search-term-review/) and the [full keyword list and negative keyword plan workflow using SEMrush and Keyword Planner](/blog/how-to-build-a-google-ads-keyword-list-and-negative-keyword-plan-using-semrush-keyword-planner/).

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Using Google Ads Keyword Planner To Find Keywords](https://www.youtube.com/watch?v=5DG59txtIB4).

---

## Frequently Asked Questions

**Where is Google Ads Keyword Planner?**

Inside Google Ads, click the wrench icon (Tools) in the top navigation bar and select Keyword Planner. If a new account setup wizard intercepts you, duplicate the browser tab and navigate to Tools in the second tab, that bypasses the wizard and puts you directly into the full interface.

**What area should I target when using Google Ads Keyword Planner for a local business?**

The minimum area that produces reliable data is a DMA (Designated Market Area) region centered on the nearest major city. A suburb or small city with around 300,000 people does not generate enough search volume for the data to be useful. Target the DMA for research, then narrow your campaign's geographic targeting to your actual service area.

**What does it mean when two keywords have the same graph in Keyword Planner?**

Identical trend graphs mean both keywords trigger ads for the same underlying searches. Adding both to one ad group does not expand your reach, it splits your clicks and conversions across two keywords, reducing the signal available for each. Keep only one keyword when the graphs match.

**Should I use "Discover New Keywords" or "Start with a Website" in Keyword Planner?**

Both, in order. Start with the keyword method, enter your most obvious keyword, pull in high-volume suggestions, and repeat until results cycle. Then switch to "Start with a Website" and enter your domain or a specific service page. The website method surfaces location-based terms, emerging searches, and pricing intent queries that keyword-first research tends to miss.

**How many keywords should I start with in an ad group?**

Filter Keyword Planner results by average monthly searches and work from around 30 candidates. After applying the duplicate graph test and intent filter, your actual starting keyword list will typically be much smaller, which is the goal. Clean, concentrated data from a tight keyword list makes the first month of optimization significantly easier.

---

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid ads agency managing $20M+ in Google Ads and Meta Ads spend across active client accounts. He publishes practical breakdowns on campaign structure, keyword strategy, and account management. For help building a cleaner Google Ads campaign from the ground up, learn about our [Google Ads management service](/digital-advertising/google-ads/).
