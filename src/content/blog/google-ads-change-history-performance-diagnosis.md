---
title: "How to Use Google Ads Change History to Diagnose Performance Drops (Our Bi-Weekly Agency System)"
description: "A step-by-step system for using Google Ads Change History to find and undo the specific changes tanking your campaign performance."
date: "2026-10-18"
image: "article-images/blog-card-trend.svg"
category: "Google Ads"
tags: ["Google Ads", "Change History", "Campaign Management", "Performance Troubleshooting", "Account Optimization"]
---

**TL;DR:** We pull a 16-week performance window on every Google Ads account every 2 weeks and check conversions plus cost-per-conversion by campaign. When we spot a sustained drop, we go to Change History, find the exact date performance changed, undo all changes from that date, then watch for 2-4 weeks before reintroducing changes one at a time to find the culprit.

| Step | What We Do |
|, , |, , , -|
| Review cadence | Every 2 weeks per campaign |
| Performance window | 16 weeks (~3-4 months) |
| Primary metrics | Conversions + Cost per Conversion |
| Review level | Per campaign, not total account |
| Response to sustained drop | Undo all changes from problem date |
| Recovery window | 2-4 weeks before reintroducing changes |

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Reviewing Historic Campaign Performance to Find & Undo Poor Performing Changes In Change History](https://www.youtube.com/watch?v=X3zN_zDsToo).

## Why the Change History Tab Is the Most Underused Diagnostic Tool in Google Ads

Most advertisers check Change History only after something breaks badly. That's too late. According to Creekside Marketing's analysis, using Google Ads Change History on a consistent bi-weekly cadence, cross-referenced against a 16-week performance window, lets you catch declining campaigns weeks before they become serious problems. The tab shows you exactly what changed and when, so a sustained drop in conversions becomes traceable, not mysterious.

Here's the thing: Google Ads performance doesn't break all at once. It degrades. A bad change you made three weeks ago might not show up as a real pattern until you're looking at a month of data. By then, you've made six more changes on top of it and have no idea which one did the damage.

We manage $20M+ in ad spend at Creekside Marketing. One thing we've learned from that volume is that the interval of your performance review determines whether you catch problems when they're still fixable. Most advertisers either check performance daily (creating noise-driven decisions) or wait until something obviously breaks (usually too late). The right cadence is every two weeks. That's long enough for real trends to separate from weekly variance. Short enough to catch problems before they compound.

---

## The 16-Week Performance Window: What Patterns Actually Matter

Set your date range to approximately 16 weeks (3-4 months) and look at two metrics side by side: conversions and cost per conversion. You're reading a trend, not a snapshot. A healthy account shows conversions holding steady or growing, with cost per conversion flat or declining.

The patterns worth investigating:

**A sustained conversion drop over two or more consecutive weeks.** Not a single bad week. Two data points that don't recover. If conversions dip for a week and bounce back to average, that's normal. If they dip and stay low, something changed and it's worth finding.

**A cost-per-conversion spike that holds.** If your CPA went from $45 to $80 and stayed there for three weeks, something in your account is causing it. That's not variance.

**Partial data points.** This one trips up a lot of advertisers. If your most recent data point looks like a sharp drop, check whether it represents a full week or just a few days. A Monday-through-Wednesday read can look catastrophic by midweek and be fine by Friday. Don't pull changes based on incomplete data.

The patterns that don't warrant investigation: a single-week drop that recovers, a spike upward that returns to average, and anything where the trend line, if you drew a straight line through all the data, is still pointing in the right direction. Chasing these is how you create unnecessary account churn.

---

## Why You Must Check by Campaign, Not by Total Account

Looking at total account performance to diagnose a problem is like checking your overall health by averaging your left and right hand temperatures. One strong campaign will mask a weak one every time. Check by campaign first, always.

We see this constantly in accounts we take over: one campaign is performing well and trending up, the other is quietly deteriorating. The aggregate looks acceptable. But when you break it down by campaign, you see that Campaign B has had a 40% drop in conversions over four weeks while Campaign A picks up the slack. The total account number hides everything.

This matters especially for accounts running multiple campaign types. A Performance Max campaign and a Search campaign can move in opposite directions. Looking at the combined account numbers tells you almost nothing about which one to fix or which one to leave alone.

Set your data view to show campaigns separately. Review each one on the same 16-week window. Only then do you have the precision to make the right diagnostic call.

---

## How to Use Change History to Find the Exact Problem Date

Once you've spotted a sustained drop in a specific campaign, using Google Ads Change History to find the problem date is straightforward. Go to the Change History tab, then filter to the week before through the week of the performance drop you identified in the chart. The tab marks changes with triangles on a timeline.

Start by going back to the conversion chart and finding the week where performance began declining. Note the approximate start date. Now go to Change History and filter to that range. A cluster of triangles right before your performance drop is your target.

Filter further to the exact date (or two to three days around it) where the drop began. What you'll find is a list of every change made that day: keyword pauses, match type adjustments, bid changes, ad group modifications.

Here's the part that frustrates people: you can't tell which of those changes caused the problem. When you've made eight changes in a single session and performance drops two weeks later, there's no clean way to isolate the culprit by looking at the list. They all become suspects. The solution to that isn't more analysis. It's the method below.

---

## The Undo-All-and-Watch Method

We undo all the changes from the problem date and watch for 2-4 weeks. Not just the ones that look suspicious. All of them. The logic is simple: you had a performance level before those changes. Removing all of them should return you to that level. Then you can reintroduce them slowly and find the one that caused harm.

This applies even if some of those changes were probably fine. A broad match keyword that was paused might have been a reasonable optimization. But if it's sitting in a list of eight changes made the same day performance dropped, you're not going to spend two weeks testing them one at a time. Undo the batch, let the account stabilize, then do the testing properly.

One technical note: Change History sometimes shows "changes can't be undone," which means there's no one-click undo button for those entries. That doesn't mean you're stuck. It means you need to go back into the campaign manually and reverse the changes yourself. Change History gives you the exact values that were changed and the ad group they were in. That's enough to do it manually.

After undoing, wait 2-4 weeks. If conversions recover, the problem was in that batch of changes. If they don't, the cause is external: a budget interruption, a competitor entering the market, a tracking break, or something else that won't appear in your Change History at all.

---

## Reintroducing Changes Without Breaking the Account Again

Once performance recovers, go back to the list of changes you undid and start reintroducing them in small batches. A few changes at a time per week. If you paused 12 keywords in a group, reactivate three of them the first week. Three more the second week. Watch performance after each batch.

The moment performance dips after a specific batch, you've found your culprit. You can then decide whether to pause just the problematic elements out of that batch or adjust them differently.

This is why we make changes in slow increments to begin with. The more changes you stack in a single session, the harder the diagnosis becomes if something goes wrong. Small batches protect your ability to find the root cause. According to Creekside Marketing's analysis, this matters most with keyword match type changes. Pausing a large group of broad match keywords in one session can disrupt Google's algorithm in ways that take several weeks to surface. The impact isn't always immediate, and it isn't always traceable unless your change history is clean.

---

## The Bi-Weekly Review as a Standing Process

Run this review on every active campaign every two weeks. Most cycles, nothing needs investigating. The value isn't in finding a problem every time. It's in catching problems when they're one week old rather than one month old.

The full process:

1. Open each campaign on a 16-week date range
2. Check conversions and cost per conversion side by side
3. Identify any sustained drops (two or more consecutive weeks below average) or persistent CPA spikes
4. For any issue found: note the approximate start date from the chart
5. Go to Change History, filter to the week before through the week of the drop
6. Filter down to the specific date(s) where the change cluster appears
7. Document every change made in that window
8. Undo all of them (via the UI where possible, manually where not)
9. Set a two-week check-in to review recovery
10. Once performance recovers, reintroduce changes 3-5 at a time per week

If you're running a regular [Google Ads management weekly checklist](/blog/google-ads-management-checklist-weekly-system/), this bi-weekly Change History review fits naturally as a recurring item on that checklist. Also relevant: [when to make changes in Google Ads based on statistical significance](/blog/google-ads-when-to-make-changes-statistical-significance/).

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

## FAQ: Google Ads Change History

**How far back does Google Ads Change History go?**

Google Ads stores Change History for up to two years. For diagnosing performance issues, you typically need only the past 2-3 months, which aligns with the 16-week performance window.

**Can I undo changes made by Google's automated recommendations?**

Some automated changes (Smart Bidding adjustments, auto-applied recommendations) appear in Change History but can't be reversed with a single click. You'll need to manually restore the previous values. Change History shows you exactly what the previous value was, which makes manual reversal straightforward once you find the right setting.

**What if the drop doesn't line up with any Change History entries?**

Then the cause is external. Change History only tracks changes you made inside the account. External causes include: a competitor entering the market, a seasonal demand shift, a budget interruption (credit card issues are more common than most advertisers realize), a conversion tracking break, or a landing page problem. If you've ruled out account changes, start with your conversion tracking setup next.

**Should I run this at the ad group level too?**

For initial diagnosis, campaign-level data is faster and usually sufficient. If you've confirmed a problem exists in a campaign and Change History doesn't point to a clear answer, drill down to the ad group level where the change was made. Change History tracks changes at the ad group level as well, which helps isolate whether a single ad group's changes are pulling down the whole campaign's numbers.

---

**About the Author**

Peterson Rainey is the founder of Creekside Marketing, a Google Ads and Meta Ads agency managing $20M+ in annual ad spend across dental practices, medical spas, reverse mortgage lenders, home service companies, and ecommerce brands. He writes about what's working and what's not inside real client ad accounts at [creeksidemarketingpros.com](https://creeksidemarketingpros.com).
