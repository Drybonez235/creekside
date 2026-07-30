---
title: "Good Data In, Good Results Out: The Google Ads Framework Behind Our Medical Practice CPAs"
description: "How we drove sub-$40 Google Ads cost per conversion for a naturopathic medical practice. CRM setup, Search vs. Performance Max, and 220+ negative keywords."
date: "2026-07-24"
image: "article-images/google-ads-medical-practice-low-cost-per-conversion.avif"
category: "Google Ads"
tags: ["Google Ads", "Medical Practice", "Healthcare Marketing", "Cost Per Conversion", "CRM Integration"]
---

*Based on our Google Ads video walkthrough: [Low Cost Per Conversion Google Ads For Medical Practice](https://www.youtube.com/watch?v=w56K-9Q4KHI)*

**TL;DR:** We took over Google Ads for a Sacramento naturopathic practice that was underperforming under a previous agency. CRM-linked conversions, a Search-only approach (Performance Max dropped after testing), a 60-second call floor, and 220+ negative keywords brought cost per conversion to $36 with a target of $30.

---

## The Numbers Before We Get Into the How

| Metric | Value |
|---|---|
| Current cost per conversion | ~$36 |
| Target CPA | $30 |
| Minimum call duration (conversion) | 60 seconds |
| Negative keywords in account | 220+ |
| Campaign type | Search only |
| Market | Naturopathic medicine, Sacramento CA |

![Google Ads campaign structure for medical practice CPA framework](/article-images/google-ads-medical-practice-low-cost-per-conversion-campaign-structure.svg)

---

## Start Here: CRM-Linked Conversions or You Are Wasting Budget

The single most important structural decision in any Google Ads account is how you define a conversion. If you get this wrong, the algorithm optimizes for the wrong thing and your cost per acquisition will always be higher than it should be.

For this naturopathic practice, we connected Google Ads directly to the CRM so that a conversion only counts when a patient inquiry goes into the system. We also set a 60-second minimum call duration before a phone call registers as a conversion. These two filters together mean Google's smart bidding is learning from real patient intent signals, not from accidental clicks or 10-second hang-ups.

Most agencies skip the CRM integration because it takes setup time. The result is that they're optimizing for form fills or any call, including the ones where someone called the wrong number. When you run on bad conversion data, you are fighting the algorithm instead of working with it.

The setup here is not complicated. Connect your CRM via a webhook or a native integration. Set your call conversion window to require 60 seconds minimum. Then verify in Google Ads that the conversion action is marked as the primary conversion and that it's receiving data. If your conversions column in the dashboard is pulling from the right source, everything downstream (bidding, ad rotation, audience signals) starts making better decisions.

---

## Why Google Ads Search Campaigns Outperform Performance Max for Medical Practices

We tested Performance Max alongside standard Search for this account. Performance Max got dropped.

The core issue is targeting transparency. Performance Max decides where your ads show up, combining Search, Display, YouTube, Gmail, and Maps into a single campaign. For a medical practice with a constrained budget, that breadth is a liability. You end up paying for impressions on display and YouTube that have nothing to do with someone actively searching for a naturopathic doctor in Sacramento.

Standard Search campaigns, by contrast, show your ads only when someone types a query that matches your keywords. When you are spending $2,350 per month and you need every dollar to reach patients in your service area with demonstrated intent, Search gives you the control you need.

The other issue is negative keyword application. In Search, your negative keyword list applies cleanly. [In Performance Max, negative keywords work differently](/blog/google-ads-performance-max-explained/) and the system has more latitude to serve impressions outside your exclusions. Over 220 negative keywords built up in this account, and they apply with precision only in standard Search.

We also turned off Search Partners and the Display Network within the Search campaign settings. Both are on by default and both dilute your data with lower-quality traffic. Search Partners includes sites like AOL and Ask.com that show Google Ads. The quality of those clicks is lower. Turning them off tightens your data set and keeps your conversion metrics clean.

---

## Keyword Structure When Budget Is the Constraint

This account runs approximately 15 active keywords. That is not a typo.

When your monthly budget is around $2,000-$2,500, you do not have the spend volume to support dozens of keyword variations all bidding against each other. Spreading budget across too many keywords means none of them gets enough impressions to generate statistically meaningful conversion data, and the algorithm cannot learn efficiently.

We focused on the highest-intent, most specific terms: phrases like "naturopathic doctor near me," "naturopathic doctor Sacramento," "holistic doctor near me," and women's health-adjacent terms where the practice has strong outcomes. Location-specific terms consistently outperform broad wellness searches in this account. "Naturopathic doctor Sacramento" converts at $13.39 per conversion. "Medical wellness" as a broader term costs $35.79.

We use broad match on these core keywords, which feels counterintuitive but works here because of the negative keyword discipline paired with it. Broad match lets Google find relevant search variations we would not have thought to add as exact or phrase match terms. The negative keyword list then prevents the irrelevant expansions from showing.

The combination of focused keyword set, broad match, and aggressive negatives is a deliberate system, not a compromise.

---

## Headlines That Match What Patients Are Actually Searching For

We use Dynamic Keyword Insertion (DKI) as the first headline in most ad groups. The syntax looks like this: `{KeyWord:Naturopathic Doctor Sacramento}`.

What DKI does is pull the actual search query into the headline when it fits within character limits. If someone searches "naturopathic doctor near me," they see "Naturopathic Doctor Near Me" as the first headline. This lifts click-through rate because the headline mirrors exactly what the patient typed.

The fallback text ("Naturopathic Doctor Sacramento") shows when the search query is too long to fit. It defaults to our highest-converting keyword, so even the fallback is relevant.

The remaining headlines focus on specific services: functional medicine, women's hormone health, sports medicine, and the practice's location. We test these at the ad group level and cut the ones that underperform.

For a medical practice, specificity in headlines matters more than cleverness. Patients searching for a holistic doctor are not looking for a catchy slogan. They want confirmation that you offer what they searched for. Match their query. Lead with the service. The CTR data consistently validates this approach -- the top keyword in this account has an 18.6% click-through rate, which is exceptional for healthcare search.

---

## The Negative Keyword Discipline That Separates Real Google Ads Management from the Rest

[Negative keywords are the most underrated lever in Google Ads](/blog/google-ads-negative-keywords-complete-guide/). In this account, we have added over 220 of them since taking over, and we add more every week.

Negative keywords prevent your ads from showing on irrelevant searches. For a naturopathic practice, the obvious negatives are terms like "free," "jobs," "school," "program," and "degree" (people looking to study naturopathy, not see a doctor). But the list goes well beyond those.

We exclude searches for specific practitioners by name (other doctors in the area). We exclude insurance-related queries when the practice is cash-pay. We exclude searches for specific conditions where the practice does not specialize. We exclude geographic terms for cities outside the service area.

The process is the same every week: pull the search terms report, look at every query that spent money or generated clicks, and ask whether that search represents a patient the practice can serve. If not, add it as a negative. Over time, the account becomes more and more efficient because you are trimming the budget waste continuously.

Most agencies set up negatives at launch and forget about them. After 90 days of weekly refinement, the difference between an account that was maintained and one that was set-and-forgot is significant.

---

## How to Set a Target CPA Without Choking the Algorithm

[Google's Target CPA bidding strategy](/blog/google-ads-bidding-strategies-explained/) is powerful when set correctly and destructive when set wrong.

The mistake we see most often is setting a target CPA that is too aggressive too quickly. If your account is currently converting at $60 per lead and you set the target CPA to $25, the algorithm will not suddenly find ways to get you $25 conversions. It will restrict impressions so aggressively that your conversion volume collapses. You will get fewer, not cheaper, conversions.

Our rule is the 20% floor: never set a target CPA more than 20% below your current actual CPA. In this account, our actual CPA is around $36. We have set the target at $30, which is approximately a 17% reduction. That is within the safe range.

We move the target down incrementally. Once the algorithm consistently achieves $30, we evaluate whether to push to $27. Each step requires two to three weeks of data to confirm stability before moving again.

The other key: make sure you have at least 30-50 conversions per month before switching to Target CPA. Below that threshold, there is not enough data for the algorithm to learn from, and you will see erratic performance. If volume is low, stay on Maximize Conversions until the data is sufficient.

---

## The Results When the System Runs Right

When these structural decisions are in place together -- CRM-linked conversions, Search-only, network exclusions, focused keywords, aggressive negatives, disciplined Target CPA -- the math changes.

This account is at $36 per conversion with a $2,350 monthly budget. At that CPA, the practice is getting roughly 65 patient inquiries per month from Google Ads. For a service with a typical first-visit value of several hundred dollars and potential multi-year patient relationships, that is a strong return.

The case study for this practice, Integrity Naturopathic in Sacramento, shows the keyword-level breakdown. The top keywords convert at $13-$18 per conversion. The broader wellness terms come in at $35-$36. The blended average sits at $36 and is moving toward $30.

![Healthcare Google Ads CPA benchmark: industry average vs. Creekside results](/article-images/google-ads-medical-practice-low-cost-per-conversion-results.svg)

Healthcare Google Ads is often quoted at $50-$100+ per conversion as a benchmark. We are consistently under that range for this account because the structural decisions compound. Each one individually helps. Together, they create an account that performs significantly better than the industry average.

The framework is not secret. CRM integration, Search-only with networks off, tight keyword set, 220+ negatives, and disciplined Target CPA. The work is in the execution and the weekly maintenance. That is what separates accounts that improve over time from accounts that plateau.

---

## Frequently Asked Questions

**How long does it take to see results from Google Ads for a medical practice?**

Expect 60-90 days before you have enough conversion data to optimize intelligently. The first month is data collection. The second month is initial optimization based on what you find. By month three, you should have a clear picture of which keywords and ad variations are driving patient inquiries at acceptable CPAs.

**Should a naturopathic practice use Performance Max or Search campaigns?**

Based on our experience, standard Search campaigns outperform Performance Max for most local medical practices. Search gives you control over where your ads appear, clean negative keyword application, and transparent data on what search queries are triggering your ads. Performance Max's broader reach across Display, YouTube, and Gmail tends to dilute budget for practices with modest monthly spend.

**What is a realistic cost per conversion for healthcare Google Ads?**

Industry benchmarks put healthcare Google Ads CPAs at $50-$100+ per conversion. With strong account structure (CRM-linked conversions, Search-only, aggressive negatives, disciplined bidding), we have consistently achieved $14-$40 per conversion for medical practice clients. The range depends on service type and competitive landscape in your market.

**How many negative keywords does a medical practice need?**

More than you think. We typically build to 100+ negative keywords within the first 90 days and continue adding through the account's lifetime. At 220+ negatives in this account, we are still finding new terms to exclude monthly. Negative keywords are a maintenance task, not a one-time setup.

**What conversion tracking setup does Creekside use for medical practices?**

We connect Google Ads to the practice's CRM (GoHighLevel, in most cases) so that a conversion requires a patient inquiry to enter the system. We also set a 60-second minimum call duration for phone call conversions. This ensures the algorithm is learning from genuine patient intent signals, not form spam or misdials.

---

*Watch the full Google Ads walkthrough for this medical practice on YouTube: [Low Cost Per Conversion Google Ads For Medical Practice](https://www.youtube.com/watch?v=w56K-9Q4KHI)*

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a Google Ads and Meta Ads agency that has managed over $20 million in ad spend for local service businesses and medical practices. He specializes in direct-response campaign architecture, CPA optimization, and building systems that consistently generate qualified patient inquiries. [Read the Integrity Naturopathic case study](/case-study-digital-marketing/integrity-naturopathic/) to see full campaign data.

---

**Ready to see what this framework looks like applied to your practice?**

We offer a free [10K Profit Audit](/10k-profit-audit/) where we walk through your current Google Ads setup and identify specific structural changes that would reduce your cost per conversion. No pitch -- just a detailed look at where budget is being wasted and what to do about it.
