---
title: "Stop Guessing With Performance Max: The Signal Setup Framework That Feeds Google the Right Data"
description: "How to set up Performance Max campaign signals correctly: 20+ search themes, audience signals, and the demographic rules we use on $20M+ in managed ad spend."
date: "2026-08-09"
image: "article-images/blog-card-arrow.svg"
category: "Google Ads"
tags: ["Performance Max", "Google Ads", "Campaign Setup", "Audience Signals", "Google Ads Strategy"]
---

> **TL;DR:** Most Performance Max campaigns underperform because of thin signal setup, not budget. Fill search themes to 20+ minimum, layer website visitors, customer lists, and lead lists in that order, and apply specific demographic exclusions based on your buyer profile. This framework is based on Creekside Marketing's analysis across $20M+ in managed ad spend.

| Setting | Recommendation |
|---------|---------------|
| Search themes minimum | 20+ (up to 50 available) |
| Audience signal priority | Website visitors first, customer list second, lead list third |
| Gender exclusion | Only when split is 80/20 or more extreme |
| Age exclusion (B2B) | Exclude 18-24 as a default starting point |
| Household income exclusion | Exclude bottom 50% for premium and B2B products |
| Asset group structure | Split by distinct service or product when budget allows |

Performance Max campaign signals are the inputs that tell Google what a high-value user looks like for your business. Set them up correctly and the algorithm has clear material to work with. Set them up thin and you are asking a pattern-recognition system to find patterns in a nearly empty dataset.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Optimizing Performance Max Campaigns: Effective Signal Setup](https://www.youtube.com/watch?v=i6BzJa8lma4). It covers signal setup on a live account, including search themes, audience signals, and demographic exclusions in detail.

## What Performance Max Campaign Signals Are (and Why Thin Setup Hurts Performance)

Performance Max signals are not targeting restrictions. They are directional hints. When you add a search theme, you are not limiting the campaign to only show for that query. You are giving Google a reference point and telling the algorithm what kind of user intent you want to attract.

This distinction matters in practice. Many advertisers keep their signal inputs small because they are thinking like traditional campaign managers, where tighter inputs means more control. In Performance Max, the algorithm needs data to find patterns. More accurate signal data gives it better material to work with, which is why campaigns with well-populated signals consistently outperform campaigns with minimal input.

The three signal categories available in the asset group are search themes, audience signals, and demographics. Each plays a different role in guiding the algorithm toward the right users.

## Search Themes: Why 20 Is the Floor, Not the Ceiling

Performance Max allows up to 50 search themes per asset group. According to Creekside Marketing's analysis across $20M+ in managed ad spend, 20+ themes is the minimum worth targeting for any active campaign. The reason is straightforward: each search theme is a data point that tells Google what type of user intent you want to attract. Ten themes give the algorithm a rough sketch. Twenty or more themes give it a detailed picture.

Two methods consistently produce the best search theme lists:

**Pull from existing Search campaign data.** If the account already runs a Search campaign targeting similar keywords, go into the search terms report for the relevant ad group. Use the actual queries that drove conversions or strong engagement as the starting point for Performance Max search themes. You are taking proven intent signals and feeding them directly into the campaign rather than guessing.

**Use ChatGPT to identify gaps.** Ask it what people commonly search for when looking for your specific service or product. For example: "What are common searches people make when looking for a property lines map?" The goal is to capture the full range of how a potential customer might phrase their problem. Longtail variants belong here too, even when they sound nearly identical to shorter terms. A broader list gives the algorithm more surface area to match against.

One structural decision has an outsized impact on performance: whether to use a single asset group for the entire account or split by distinct service or product. Based on Creekside Marketing's workflow, splitting asset groups by distinct service is the stronger approach when budget allows. It lets you write ad copy that directly matches the search themes in each group, which improves relevance and, by extension, conversion rates. If budget is limited and running multiple campaigns is not practical, a comprehensive single asset group still works. Pursue the split approach once spend volume makes it feasible.

See also: [Stop Performance Max from Wasting Your Google Ads Budget](/blog/the-easiest-way-to-stop-performance-max-from-wasting-your-google-ads-budget) for how to handle placement exclusions once your signals are in place.

## Audience Signals: The Three-Layer Approach That Works for Any Account

Audience signals tell Google what a qualified user looks like based on behavioral data you already have. The priority order in Creekside Marketing's accounts is website visitors first, customer lists second, and lead lists third.

**Website visitors are the baseline.** If the account has any pixel history, upload website visitor audiences to the signal. For accounts structured around a full-funnel approach with separate campaigns, the top-of-funnel campaign uses visitors who spent 60 or more seconds on the site. The bottom-of-funnel campaign uses purchasers or sales-qualified leads from a customer list. This separation keeps the messaging targeted to where each group sits in the buying process.

If you are running a single Performance Max campaign, start with all website visitors as your audience signal. It is the minimum viable input for any account with pixel history.

**Customer lists are the strongest signal available.** A list of actual customers tells Google exactly what a converted user looks like. This gives the algorithm the clearest possible pattern to optimize toward. Upload a customer list whenever one exists.

**Lead lists come third.** If the business has a list of people who submitted a form, booked a call, or entered any qualification process, that data is worth uploading. Even if not every person on the list converted to a customer, they demonstrated intent that general website visitors did not.

The point of layering all three is to give Google a complete description of what a qualified user looks like. The more complete that description is, the more efficiently the algorithm can find more people like them.

For accounts with enough budget to separate top-of-funnel and bottom-of-funnel campaigns, the messaging difference matters as much as the signal difference. Users at different stages in the buying process need different information to move forward. Top-of-funnel users need awareness and context. Bottom-of-funnel users need a specific reason to convert now. Separate campaigns allow you to optimize creative for each stage independently.

See also: [How to Use Google Ads Audience Segments the Right Way](/blog/how-to-use-google-ads-audience-segments-the-right-way-observation-vs-targeting) for observation versus targeting mode in standard Search and Display campaigns.

## Demographics: The Rules We Follow Across $20M in Managed Ad Spend

Demographics in Performance Max are optional exclusions. The rules Creekside Marketing applies are specific and based on consistent patterns seen across accounts in multiple industries.

**Gender:** Do not exclude a gender unless you have clear evidence of an 80/20 or more extreme split. If your product skews toward one gender but 20% of actual buyers are the other, excluding that 20% is a real revenue cost. The threshold for exclusion is that the business genuinely does not serve one group, not that it simply skews one way. In e-commerce selling products explicitly designed for one gender, exclusions are more common. In services, this situation is rare. The default should be leaving both genders enabled.

**Age for B2B accounts:** Excluding the 18-to-24 age range is standard in Creekside Marketing's B2B campaigns. The reasoning is that purchasing decisions in business contexts, including software selection, vendor selection, and service procurement, are rarely made by people under 25. This is a starting default that gets overridden only when a client's own data shows younger buyers are actually converting.

**Household income:** Excluding the bottom 50% of household income is a common setting in accounts targeting premium services or B2B clients. If you are selling a product that requires discretionary income or business authority, reaching people who are unlikely to afford it is a waste of spend. Some advertisers specifically target the bottom 50% when their product is designed for price-sensitive buyers. Make the decision based on what your product costs and who can realistically purchase it.

## The Audience Signal Mistake That Expands Your Targeting in the Wrong Direction

The most common misunderstanding in Performance Max demographics is how interest targeting stacks with the audience signals you have already set.

Many advertisers assume that adding an interest category to their demographics filters or refines the audience signal. That is not how it works. The interest category is an OR condition, not an AND condition. Performance Max can show to your website visitors OR to anyone in the interest category, not just website visitors who also happen to match the interest.

According to Creekside Marketing's analysis, this is why adding a broadly defined interest category can dramatically increase impression volume without increasing conversion volume. If you are seeing high spend alongside low conversion rates in a Performance Max campaign, check whether broad interest categories are in the demographics section.

The fix: remove broad interest categories and let the search themes and audience signals do the directional work. Only add an interest category if it directly and specifically describes your actual buyer. A category that sounds related but captures a broader population than your real customer base will cost you spend without a proportional return in conversions.

## Frequently Asked Questions About Performance Max Campaign Signals

**How many search themes should I add to a Performance Max campaign?**

Twenty is the minimum worth targeting, and filling out all 50 available themes is reasonable if you can generate relevant variations. Each theme gives Google more pattern-matching material. Campaigns with five to ten themes are asking the algorithm to make decisions from a limited dataset. Using historical search term data from existing Search campaigns and ChatGPT brainstorming are the two fastest ways to build a list of 20 or more relevant themes.

**Should I split Performance Max asset groups by service or product?**

Yes, when budget allows. Separate asset groups let you write ad copy that directly matches the search themes for that specific service. That alignment between intent and creative improves relevance and typically improves conversion rates. A single asset group covering everything works as a starting point when budget is the limiting factor.

**What audience signals should I prioritize in a Performance Max campaign?**

Website visitors first, customer lists second, and lead lists third. This order reflects the strength and accuracy of each signal. Website visitors establish a behavioral baseline. Customer lists show Google exactly what a converted user looks like. Lead lists add a layer of intent data beyond general visitors. Upload all three whenever they exist.

**Should I always exclude age ranges in Performance Max?**

Not always. For B2B campaigns, excluding the 18-to-24 age range is a reasonable default based on who typically makes purchasing decisions in business contexts. For consumer products, the decision depends on whether younger buyers are actually in the real customer base. Never exclude an age group without data suggesting they do not convert for your specific offer.

**Are interest categories in Performance Max the same as audience targeting?**

No, and this distinction is critical. Interest categories expand your reach to anyone in that category, regardless of whether they have visited your site. They function as an additional targeting pool, not as a filter on your existing audience signals. Use them only when the category directly and specifically matches your actual buyer profile. When in doubt, leave interests empty and rely on search themes and audience signals.

---

## Want More Like This?

Want to see what running ads at this level actually looks like week to week? I share what's working and what's not from the accounts we manage in a weekly newsletter. Real numbers, real results.

[Subscribe to the Creekside Newsletter](/newsletter/)

---

**About the Author**

Peterson Rainey is the founder of [Creekside Marketing](/digital-advertising/google-ads/), a Google Ads and Meta Ads management agency that manages $20M+ in annual ad spend across clients in healthcare, B2B, e-commerce, home services, and professional services.