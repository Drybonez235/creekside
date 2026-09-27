---
title: "Google Ads Location Exclusions: Why We Block 20+ Areas Before Any Campaign Goes Live"
description: "Adding location exclusions before launch prevents Google from burning budget outside your service area. Here's the exact process we run on every new account."
date: "2026-09-07"
image: "article-images/blog-card-dots.svg"
category: "Google Ads"
tags: ["Google Ads", "Location Targeting", "Location Exclusions", "Campaign Setup", "Local Advertising"]
---

> **TL;DR:** Most Google Ads campaigns add a target location and stop. We add 20-plus location exclusions before launch on every account because Google's default settings actively enable impressions outside your service area. Off-target impressions lower CTR, hurt Quality Score, and drain budget with no upside. Two real setup walkthroughs below.

| Metric | Value |
|, , |, , -|
| Default setting risk | Worldwide impression eligibility for local searches |
| Consequence of skipping exclusions | Cheap off-target clicks, near-zero conversions |
| CTR impact | Off-target impressions lower Quality Score, raising cost per click |
| Exclusions per typical local setup | 20+ location blocks before first impression |
| Ad spend managed by Creekside | $20M+ across accounts |

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Location Targeting for Google Ads Campaigns](https://www.youtube.com/watch?v=FaMsWcD4f2A).

## The Default Google Ads Location Setting Lets Google Spend Your Budget Anywhere

Most Google Ads campaigns skip location exclusions entirely. Advertisers add a target location, assume the work is done, and Google's default settings do the rest, meaning they are one dropdown choice away from paying for clicks from overseas with no warning from the platform.

When you add a location in Google Ads, the default targeting option reads: **"Presence or interest: People in, regularly in, or interested in your targeted locations."** This allows Google to show your ads to anyone, anywhere in the world, as long as they search for something tied to your target area. Someone in a foreign country searching "Nashville plumber" can trigger your ad. Click farms targeting location-based terms can trigger your ad. You pay for every click.

The result: high click volume at a cheap rate, nearly zero conversion value from those clicks, and a dashboard that looks active while your actual pipeline stays empty.

The fix is one setting change. In your campaign location settings, open the dropdown and switch it to **"Presence: People in or regularly in your targeted locations."** Do this before anything else on every new account. Based on Creekside Marketing's analysis across $20M+ in managed ad spend, this single setting is the most impactful change you can make at launch on a local campaign.

## Two Location Setup Scenarios That Require Different Approaches

Once the targeting option is corrected, the actual setup depends on two factors: the size of the service area and whether it follows a natural geographic shape.

**Scenario 1: Local and Regional Areas Under Roughly 100 Miles (County-Based Targeting)**

For businesses serving a defined metro or regional market, county-based targeting outperforms radius targeting. A radius creates a geometric circle. Real service areas rarely follow circles, and the mismatch produces impressions in places you do not serve.

Using a Greater Nashville area business as an example, the process inside Advanced Search looks like this: switch the view to "Show by county," identify the counties you actually serve, and click Include for each one individually. For the Nashville example, this means including Davidson (Nashville proper), Williamson (Brentwood and Franklin), and Rutherford (Murfreesboro). That is the geographic footprint this business actually operates in.

This granularity is only possible through Advanced Search. The basic location input box approximates your area. Advanced search lets you control it.

**Scenario 2: Metro and Drive-Time Businesses With a Fixed Service Radius**

For a business in Houston where customers routinely drive 40 miles to shop, county boundaries do not define the service area. In that case, a radius makes more sense than trying to approximate a circle with county selections.

The setup: choose Radius from the location selector, enter the business address (more precise than a city name), set the distance, and click Include. Google creates a clean circle centered on that point.

The important thing to understand is that radius targeting does not eliminate the need for exclusions. It only changes the shape of the inclusion. The exclusion process runs identically in both scenarios.

## Google Ads Location Exclusions: The Step We Add Before Any Impression Goes Live

After building out inclusions, most advertisers stop. That is exactly where the budget starts leaking.

Google's geo-targeting is imperfect, and Google is well known for trying to spend ad budgets as quickly as possible regardless of whether the resulting clicks are valuable for the business. The combination of imprecise geo signals and an incentive to maximize spend means impressions will appear outside your defined area if you do not actively block them.

The exclusion sequence we run on every new account:

1. Zoom out in the location map until surrounding states are visible
2. Switch to congressional district view to work with larger geographic blocks first
3. Exclude districts that extend significantly outside your target area
4. Type each surrounding state into the search field and click Exclude
   - Nashville example: exclude Kentucky, exclude Alabama
   - Houston example: exclude Louisiana, Oklahoma, and other adjacent states; also exclude Mexico
5. Zoom back in and use county-level exclusions around the border of your target area

Some people call this overkill. Here is why it is not: every impression from outside your service area that does not result in a click lowers your click-through rate. Google uses CTR as a relevance signal. A lower CTR lowers your Quality Score. A lower Quality Score raises your cost per click across the entire campaign. The cost of a few off-target impressions compounds over time in a way that is difficult to trace back to the source.

Taking one to two minutes to add exclusions before launch eliminates this problem permanently. Apply exclusions at the campaign level, not the ad group level. Ad group exclusions are easy to miss when building out additional ad groups later, which is how gaps open up over time.

For other settings that need to be locked down at the campaign level, see [Fix These Four Google Ads Conversion Tracking Settings Before Smart Bidding Makes Everything Worse](/blog/google-ads-conversion-tracking-settings/).

## The Difference Between a Location You Serve and a Location You Target With Ad Spend

There is a nuance in the exclusion process that matters for businesses with natural catchment traffic from outside their primary market.

For the Nashville business in the example, customers may drive in regularly from Lebanon, Tennessee, about 30 miles east. Those customers convert. The business services them. But the business does not want to allocate ad spend toward actively targeting Lebanon.

The correct handling is to leave Lebanon out of both inclusions and exclusions.

Do not include it: you are not spending to target it. Do not exclude it: you do not want to block an impression from someone who happens to be physically in Lebanon when they search but regularly comes into Nashville for your service.

This distinction cannot be derived from the platform. It requires knowing where the business actually serves versus where it wants to spend money attracting customers. Getting this wrong in either direction costs money, either by underserving a real market or by paying to attract traffic you already get organically. Understanding this split is part of every location targeting conversation we have when onboarding a new client.

## Splitting Target Locations Into Sections for Long-Term Optimization

For larger coverage areas, breaking the target into multiple sub-regions creates a performance advantage as the account accumulates data.

Instead of a single Houston-wide radius, break the same geographic coverage into four or five overlapping sections of roughly equal size. Each section becomes its own location target inside the campaign.

After 60 to 90 days of data, performance by section typically diverges. One zone may produce conversions at half the cost-per-lead of another. With a single target area, you see aggregate numbers and cannot act on the difference. With distinct sections, you can reduce spend in underperforming zones and redirect budget toward the areas actually generating leads.

This scales with budget. A small daily budget spread across five sections may not generate enough conversion data per section within 30 days to make a meaningful decision. A larger budget fills each section faster, making the optimization more actionable. A practical rule: target enough budget to get meaningful conversion data from each section within one reporting period.

You do not need separate location sections to view performance by geography. Google's location reports show performance breakdowns regardless of how your targets are structured. But separate sections make it easier to take action directly from the campaign structure rather than going through reports. For guidance on when you have enough data to act on any performance difference, see [When to Make Changes in Google Ads: Why 27 Clicks Is the Wrong Sample Size](/blog/google-ads-when-to-make-changes-statistical-significance/).

## FAQ

**What does the default Google Ads location setting actually do?**
The default "Presence or interest" setting allows Google to show your ads to anyone who searches terms connected to your target location, regardless of where they are physically located. For a Nashville business, this includes overseas users and click farms targeting Nashville-specific search terms. Clicks are cheap. Conversions from those clicks are nearly zero.

**How many location exclusions should a local Google Ads campaign have?**
According to Creekside Marketing's analysis across $20M+ in managed spend, a typical local campaign setup involves 20 or more location exclusions added before the first impression. This includes surrounding counties, neighboring states, and in some cases international borders. The exclusions take one to two minutes to add and protect the account permanently.

**When should I use county targeting versus radius targeting?**
Use county targeting for defined metro and regional markets under roughly 100 miles where the service area follows county boundaries. Use radius targeting for metro businesses where customers come from any direction and the service area is more accurately represented as a circle around a fixed point. When the service area is irregular or follows non-circular geography, county targeting gives more precise control.

**Do location exclusions reduce the potential audience for my ads?**
Not in a meaningful way. Location exclusions only block areas where your business does not serve customers. Traffic from those locations was not going to convert regardless. Removing it improves your CTR, which benefits your Quality Score and ultimately your cost per click.

**Why does click-through rate matter for location targeting decisions?**
Every off-target impression that does not result in a click lowers your overall CTR. Google interprets a lower CTR as lower ad relevance. Lower relevance translates to a lower Quality Score. A lower Quality Score means Google charges you more per click across the campaign. Off-target impressions from a loose location setup are not neutral, they are actively degrading your campaign economics.

---

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in Google Ads and Meta Ads spend. Creekside works with service businesses, e-commerce brands, and professional practices across the United States.
