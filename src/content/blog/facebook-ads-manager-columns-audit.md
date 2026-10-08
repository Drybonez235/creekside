---
title: "The 12 Facebook Ads Manager Columns We Check in Every Account Audit"
description: "Default Meta Ads Manager columns miss frequency, quality rankings, and landing page views entirely. Here is the exact 12-column setup we use on every account."
date: "2026-09-16"
image: "article-images/blog-card-target.svg"
category: "Facebook Ads"
tags: ["Facebook Ads", "Meta Ads Manager", "Ad Performance Tracking", "Facebook Ads Audit"]
---

> **TL;DR:** Default Facebook Ads Manager columns are not enough. We audit 12 specific metrics on every account: reach, impressions, results, cost per result, frequency, budget, amount spent, link clicks, quality ranking, conversion rate ranking, engagement ranking, and landing page views. Missing even one of these means managing blind on a key performance signal.

| Metric | Why It Matters |
|, -|, -|
| Reach | Audience breadth vs. impression saturation |
| Impressions | Raw delivery volume |
| Results | Objective-specific outcomes |
| Cost per Result | CPC All + link CPC for traffic campaigns |
| Frequency | Ad fatigue early warning |
| Budget | Overspend and underspend detection |
| Amount Spent | Pacing vs. ceiling |
| Link Clicks | Mid-funnel engagement |
| Quality Ranking | Ad quality vs. industry competitors |
| Conversion Rate Ranking | Post-click conversion competitiveness |
| Engagement Ranking | Interaction rate vs. peers |
| Landing Page Views | Actual website arrivals (not inflated by Facebook browser) |

---

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Facebook Ads Audit | Columns](https://www.youtube.com/watch?v=2ipV9qRmzHQ). It covers one part of a broader Facebook ads audit series, specifically the column setup that precedes any optimization work.

When we audit a Facebook Ads account for the first time, one of the first things we check is whether the columns have been customized. Default settings are not adequate. The default view shows enough data to make an account look like it's being managed, but it's missing the metrics that actually drive decisions.

Here's the thing: before you can optimize anything, you need to see everything. Columns are how you set up that visibility.

## Why Default Facebook Ads Manager Columns Fall Short

Default columns give you impressions, reach, and spend, a surface read. That's it. **No frequency data means you won't catch ad fatigue until your cost per result is already climbing. No quality rankings means you have no idea whether your ads are competitive in your market. No landing page views means you'll spend time trying to reconcile Facebook attribution with Google Analytics, and the numbers will never match.** The gap between what you need to see and what the default view shows is wide enough to miss real problems for weeks.

Go to Ads Manager, click "Customize Columns," and add the following.

## The 12 Facebook Ads Manager Columns to Add

**Add these in the Customize Columns panel, apply them, and save the view as a preset.** Work through the list in order, each metric addresses a specific gap in the default view, and together they give you a complete read on delivery, engagement, competitive positioning, and attribution. Here's what each one does and why it's non-negotiable.

### 1. Reach

Reach counts unique people who saw your ad at least once. **This is your audience breadth metric. If impressions are growing but reach is flat, you're hitting the same people repeatedly, and that's a frequency problem, not a delivery problem.** Type "reach" in the column search, check the box, and move on.

### 2. Impressions

Impressions tracks total ad views, including multiple views from the same person. **You need both reach and impressions to understand delivery. Reach tells you how wide; impressions tells you how often.** Most accounts have this selected by default but verify it before you assume.

### 3. Results

Results reflects your campaign objective. Lead gen campaigns show leads. Traffic campaigns show clicks. **The results column is only meaningful if you know what objective the campaign is running.** This sounds obvious. We still see accounts where clients don't know what their campaign objective is, they just see "results" going up and assume things are working.

### 4. Cost Per Result (and Cost Per Click for Traffic Campaigns)

Type "CPC" in the column search and select "CPC All." That's your cost per result across most campaign types. **For traffic campaigns specifically, add both CPC All and Cost Per Click. They measure different things.** CPC All accounts for all click types. Cost Per Click isolates link clicks to external destinations. If you're running a traffic objective and only watching one of these, you're missing half the picture.

### 5. Frequency

**Frequency is the average number of times each person in your audience has seen your ad. It's your ad fatigue signal.** Cold audiences start to degrade at frequency 3-4 in most niches. When frequency climbs past that and you haven't refreshed creative, your cost per result will follow it upward. Default columns don't include frequency, which means you'll miss the warning.

### 6. Budget

This column shows the campaign-level budget. **Overspend indicates a billing configuration issue. Underspend means your audience targeting, bid structure, or creative is limiting delivery.** Both are problems. We've audited accounts where campaigns had been underspending by 30-40% for weeks because no one was tracking budget against actual spend. The client thought the ads were running fine.

### 7. Amount Spent

Amount Spent is the running total for your selected date range. **Budget sets the ceiling; Amount Spent tells you where you are against it.** Together, these two columns let you pace your campaigns. Underspending is often a larger operational problem than overspending, it means the budget you committed to a client isn't being used to reach the audience you planned for.

### 8. Link Clicks

**Link Clicks shows how many people clicked a link within your ad. It's a mid-funnel engagement signal.** High impressions with low link clicks means your creative or copy isn't generating enough pull. Low cost per link click with weak downstream conversions points to a landing page problem rather than an ads problem. This split tells you where to investigate.

### 9. Quality Ranking

Quality Ranking is one of the most underutilized signals in Meta Ads. **It compares your ad's quality to other ads competing for the same audience and objective. It appears at the campaign level, ad set level, and ad level.** Above Average and Below Average show up as explicit labels. If the column shows nothing, blank, that means your ad is performing at average for its competitive set. Not below, not above. Average.

Below Average quality ranking is an immediate signal to test new creative. We've seen accounts run the same Below Average ads for six months without anyone catching it because the column wasn't visible. Based on our work across $20M+ in managed ad spend, Below Average quality ranking at the ad set level is one of the most consistent early indicators of scaling difficulty.

### 10. Conversion Rate Ranking

**Conversion Rate Ranking compares your post-click conversion rate to other advertisers running similar objectives to similar audiences. It's separate from Quality Ranking.** An ad can earn Above Average quality (people click the ad) but Below Average conversion rate (people don't complete the action on your site). That specific combination tells you the landing page is the problem, not the ad itself.

This split is more common than agencies admit. The ad team builds strong creative, the conversion rate drops, and everyone points at the ads. Conversion Rate Ranking makes it visible.

### 11. Engagement Ranking

**Engagement Ranking compares how often people interact with your ad (likes, comments, shares, video views) relative to ads competing for the same audience.** It's a secondary quality signal. Below Average engagement ranking often precedes declining delivery because Meta's algorithm interprets low engagement as a relevance problem. You want to catch this before it starts affecting spend.

### 12. Landing Page Views

This one solves a problem that trips up almost every Meta advertiser at some point.

You're running traffic campaigns and getting link clicks. But your Google Analytics shows far fewer sessions than Facebook reports. The numbers don't reconcile, and you can't figure out why.

**The answer is the Facebook in-app browser. When someone clicks an ad from within the Meta app, the click registers in Facebook's system. But if the person's browser doesn't fully load your page, or if the Meta app browser doesn't pass data the same way as a standard browser, your external analytics platform never sees that session.** Meta captures those clicks because its platform counts clicks at the tap point. Landing Page Views counts only the people who actually left Meta and loaded your website.

Landing Page Views is always lower than link clicks for this reason. The difference isn't a discrepancy, it's telling you exactly how many people Facebook counted but your site never received as a measurable session. For any campaign where you're trying to reconcile Facebook data with Google Analytics, this column is mandatory.

## Saving the View

Once you've added all 12 columns, click Apply and save the preset. Name it something that identifies the account or your standard audit view. **Don't rebuild this from scratch every time you pull reporting.** If you're managing multiple accounts or working with a team, a saved column view also ensures everyone is looking at the same data. Inconsistent column setups across team members create reporting confusion.

## Reading These Columns Together

No single metric explains performance. The signal is in how these numbers relate:

| Pattern | Diagnosis |
|, -|, -|
| High frequency + rising cost per result | Ad fatigue, rebuild creative |
| Link clicks strong, landing page views low | Facebook browser friction, check mobile experience |
| Below Average quality ranking | Creative isn't competitive, test new angles |
| Good quality ranking, poor conversion ranking | Landing page problem, not ad problem |
| Budget unspent at pace | Audience too narrow, bid too low, or creative limiting delivery |
| Below Average engagement ranking | Relevance problem, audience or creative mismatch |

This is how we diagnose accounts in the first 30 days after onboarding. The columns create the visibility. The pattern recognition comes from running them consistently.

For more on how we structure the full Facebook ads audit process, see our post on [Meta Ads for med spas](/blog/meta-ads-for-med-spas-how-to-fill-consultation-slots/) for a niche example, or [how we choose between Google Ads and Facebook Ads](/blog/how-to-choose-google-ads-vs-facebook-ads-freelancer/) for new accounts.

## FAQ

These are the questions that come up most often when we walk new clients through column setup for the first time.

**Why doesn't Facebook show these columns by default?**
Default views are designed for accessibility, not optimization depth. Meta's default column set gives you enough to see that an ad is running and spending. The diagnostic metrics that help you improve performance, frequency, quality rankings, landing page views, require customization because they're only relevant once you're actively managing and testing.

**How often should I review these columns?**
Frequency, cost per result, and landing page views should be checked weekly. Quality and conversion rankings can be reviewed every two weeks unless performance is dropping. Budget and amount spent should be part of daily checks on any active campaign.

**My quality ranking is Below Average. What do I do first?**
Test new ad creative. Fresh imagery, a different copy angle, or a tighter audience definition are the three first moves. Below Average quality ranking means Meta is comparing your ad to competitors running to the same audience and rating yours lower on perceived relevance and user experience.

**What if I'm not running traffic campaigns? Do I still need Cost Per Click?**
For lead generation and conversion campaigns, CPC All is sufficient. Add Cost Per Click separately only when the campaign objective is traffic, since that objective is specifically optimizing for link clicks and the two metrics behave differently for it.

---

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**Peterson Rainey** manages $20M+ in paid ad spend across Google and Meta for service businesses and ecommerce brands at Creekside Marketing. He has run paid campaigns across dental practices, home services, ecommerce, law firms, med spas, and mortgage companies.
