---
title: "Google Ads Click to Call Conversion Tracking: The Tag Manager Setup That Catches Every Call Lead"
description: "How to set up Google Ads click to call conversion tracking using Google Tag Manager: the exact steps we follow on every service-business account."
date: "2026-10-03"
image: "article-images/blog-card-bars.svg"
category: "Google Ads"
tags: ["Google Ads", "Conversion Tracking", "Google Tag Manager", "Click to Call", "Service Business"]
---

> **TL;DR:** Setting up Google Ads click to call conversion tracking requires Google Ads, Google Tag Manager, and Tag Assistant. Create the conversion action in Google Ads (category: Contact, count: one), build a tag in GTM using conversion ID and label, set the trigger to fire on Click URL containing "tel:", publish, then verify in Tag Assistant. Total time: 15-20 minutes.

| Metric | Value |
|, -|, -|
| Tools required | Google Ads, Google Tag Manager, Tag Assistant |
| Setup time | 15-20 minutes |
| Trigger string | `tel:` (matches all phone number links) |
| Conversion category | Contact |
| Enhanced conversions | Must be enabled before saving |
| Conversion count | One per click (not "every") |

Most service businesses running Google Ads have a blind spot. Form submissions get tracked. Calls from the ad itself get tracked. But the click to call button right on the website landing page? Google Ads click to call conversion tracking is missing entirely, and every optimization decision the algorithm makes is working off incomplete data.

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Tracking Clicks to Call on Website as Conversions in Google Ads](https://www.youtube.com/watch?v=1YS6oFo1gfo). It walks through the exact setup from start to finish.

## Why Most Service Business Accounts Are Missing Call Data

If you're running Google Ads for a business that books by phone, your call data is almost certainly incomplete. Form submissions get a thank-you page trigger. Calls from ads get tracked through call extensions. But when someone clicks the phone number directly on the website, most accounts miss it entirely.

That missing data matters for Smart Bidding. The algorithm optimizes based on what conversions it can see. When it can't see phone clicks, it treats those sessions as zero-conversion visits and adjusts bids accordingly. The result is a bidding strategy that undervalues the exact users most likely to call (which tends to be mobile users on service-business landing pages).

We inherit accounts like this regularly. The conversion tracking looks complete on the surface, but digging in reveals that the click-to-call event was never wired up.

## What You Need Before You Start

Before creating anything in Google Ads, you need two things confirmed: an active Google Ads account and a Google Tag Manager container that is installed on the website and that you can actually log into. Missing either one stops the setup before it starts.

The GTM access part is easy to overlook. If a previous agency, a web developer, or the client's IT team set up the container, you need their credentials or permissions to add tags. We've seen setups where the conversion action was created in Google Ads, the instructions were sent to the client, and months went by without anyone actually installing the tag. The account ran dark on calls the whole time.

Also check enhanced conversions before you start. If they're off, the save screen will flag it, so enable them first rather than backtrack mid-setup.

If you don't have a GTM container at all, set that up first. There's a separate video on the Creekside Marketing YouTube channel for that.

## How to Create the Click to Call Conversion Action in Google Ads

Creating the conversion action in Google Ads is the first step. Go to Goals, click New Conversion Action, select Website. Enter your domain and click Scan. When the option appears, click Add a Conversion Action Manually. This is where you configure the specific event you want to track.

**Go to Goals, click New Conversion Action, select Website. Enter your domain, click Scan, then click Add a Conversion Action Manually when that option appears.**

On the configuration screen:

- **Category**: Contact
- **Name**: Be specific. We use "Click to Call [Client Name]" so anyone looking at the account knows exactly what this tracks and who installed it. "Phone Call" is too generic when an account has multiple call conversion types
- **Value**: Enter the estimated dollar value of a phone call to the business if you know it. If you don't, enter 1. See the section below on why this matters
- **Count**: One conversion per click. Not "every." A single call click shouldn't inflate conversion counts just because the user tapped the number twice
- **Enhanced conversions**: Confirm this is turned on before saving

Click Done, then Save and Continue. The next screen gives you two options for how to install the tag. Select "Use Google Tag Manager." Google Ads will display a Conversion ID and a Conversion Label. Copy both.

## How to Set Up the Tag and Trigger in Google Tag Manager

**In Google Tag Manager, create a new tag. Choose Google Ads under tag configuration, then Google Ads Conversion Tracking. Paste in the Conversion ID and Conversion Label from Google Ads. Enter the same conversion value you used in the previous step.**

Leave the remaining tag fields at their defaults.

Now set the trigger. This is the step most guides either skip or explain vaguely.

Click on Triggering, then the plus button, then configure the trigger. Select "Just Links." This scopes the trigger to link clicks only, not general page views or other interactions.

From there:
1. Select "Some Link Clicks"
2. Under condition, choose the built-in variable "Click URL"
3. Leave the operator as "Contains"
4. In the value field, type: `tel:`

That `tel:` string is the entire mechanism. Every phone number link on every website starts with `tel:`. When a user taps a phone number link, the browser fires a request beginning with `tel:5551234567`. The trigger catches it regardless of which page the user is on, which phone number appears, or what device they're using.

Name the trigger "Click to Call Trigger." Save it.

Name the tag "Google Ads Click to Call Conversion Tracking." Save it.

Click Submit. Name the version (we use "Click to Call Google Ads Conversion Tracking" so version history stays readable). Click Publish.

The container is now live. The tag will fire the next time someone clicks a phone number on the site.

## How to Verify the Setup Is Working

Verifying the tag works before you rely on the data is non-negotiable. Back in Google Ads, click Done on the conversion action, then click Troubleshoot. Enter the website URL and click Connect. Your site opens with Tag Assistant running alongside it, and you can click the phone button in real time to confirm the tag fires.

**Back in Google Ads, click Done on the conversion action, then click Troubleshoot. Enter the website URL you tagged and click Connect. Your site should open in a new window with the Tag Assistant panel visible.**

Before clicking anything, look for a warning sign in Tag Assistant. If it flags a container issue, follow the instructions it gives before moving forward. Common causes: the GTM snippet wasn't added to the page template, the container ID was entered incorrectly, or the published version hasn't propagated yet.

Once the debug view is active, scroll to the call button and click it. Immediately check the Tag Assistant panel.

You're looking for "Google Ads Click to Call Conversion Tracking" to appear under Tags Fired. That green check means the conversion signal was sent and recorded.

If the tag does not fire, two things to check:

1. The GTM container update wasn't published. A saved-but-unpublished tag does nothing.
2. The trigger was configured incorrectly. The `tel:` condition needs to exactly match the link format used on the website. Check the actual href value in the page source to confirm it starts with `tel:`.

After successful verification, go back to Google Ads and reload the page. The conversion action will show "No recent conversions." That is correct. It is not an error. Per our testing, that message is what a working, freshly installed conversion action displays: it means Google Ads received the verification signal and will record real conversions as they happen.

## Setting a Conversion Value: Why Leaving It at 1 Costs You

Skipping a real conversion value is one of the most common setup mistakes on service-business accounts. When every conversion is set to 1, Smart Bidding treats a phone call and a blog visit the same way. That's not how any business owner thinks about their leads, and it's not how the bidding algorithm should think about them either.

Here's the thing: Smart Bidding uses conversion values to allocate budget toward users most likely to generate the most revenue. When every conversion is worth 1, the algorithm treats a form submit and a phone call as identical signals. When you assign a real value to each type (say $150 for a click-to-call and $50 for a newsletter signup), the algorithm has something meaningful to optimize against.

Getting to a real number doesn't require an accountant. Ask the client how many calls turn into paying customers and what an average job is worth. A roofing company that books 1 in 8 calls at $7,500 per job can put roughly $940 on each call. A dental office booking 1 in 5 calls for an exam worth $400 can put $80 on it. An approximate figure is significantly better than 1.

If the client genuinely can't produce an estimate, start with a reasonable placeholder and revisit it after 60 days of real conversion data.

## What This Connects to in a Full Conversion Setup

Click-to-call tracking is one source in a complete conversion setup. Service-business accounts we manage also track form submissions, call extensions directly from the ad, and in some cases, calls from users who dialed manually using a dynamic number insertion tool.

The click-to-call tag installed in this setup captures calls that originate from a phone number link on the website. It does not capture a call placed by someone who saw the number and dialed without clicking. That requires a separate DNI approach.

For a complete view of conversion health, the [Google Ads Conversion Check troubleshooting guide](/blog/google-ads-conversion-check-troubleshooting-guide/) covers what every status warning in the conversions interface actually means. The [Google Ads conversion tracking settings post](/blog/google-ads-conversion-tracking-settings/) goes deeper on primary versus secondary actions and which sources to include in Smart Bidding targets.

We cover the full conversion setup process as part of every new account onboarding. Details on what that looks like are on our [Google Ads management services page](/digital-advertising/google-ads/).

## After Installation: What to Watch For

Once the tag is live and verified, it runs without maintenance in most cases. Call conversion tags are more fragile than form submission tags because they depend on both the GTM configuration and how phone number links are coded in the website theme. A few things can break them silently, with no alert in Google Ads:

- A GTM container update that accidentally overwrites the trigger
- A website redesign that changes how phone number links are coded (e.g., switching from `tel:` links to a click-to-call JavaScript button)
- Enhanced conversions being turned off at the account level

We recommend running a quick verification check monthly: just click the call button in Tag Assistant debug mode and confirm the tag still fires. It takes two minutes and catches any silent breakage before it affects bidding.

Google Ads won't alert you if a conversion tag stops recording. The account keeps running. The data just disappears.

## FAQ

**Does this tag track calls from all traffic, or only from paid search?**

The tag fires on all click-to-call events site-wide. Google Ads attribution (crediting the conversion to a specific ad click) applies only when the session came from a Google Ads click within the attribution window. The tag doesn't discriminate by source.

**What if the client has multiple phone numbers on the site?**

The `tel:` trigger catches them all. Every phone link fires the tag regardless of which number it dials. If separate tracking per number is needed, use multiple triggers with specific phone number patterns in the Click URL condition.

**Why does Google Ads show "No recent conversions" after I verified it worked in Tag Assistant?**

That message is correct. It means the conversion action was verified and is waiting for real user activity. It is not an error state.

**Do I need to republish the GTM container every time I make a change?**

Yes. Every tag, trigger, or variable change in GTM must be published to take effect. Saved drafts do not run.

**Can I track form submissions using the same setup?**

Not with this specific trigger. Form submissions typically use a Thank You page trigger (Page URL contains "/thank-you") or a Form Submission event trigger. The `tel:` approach here is specific to click-to-call links.

---

*Based on $20M+ in managed ad spend across service businesses, we set up click to call conversion tracking on every account before any other optimization work. Incomplete conversion data is the fastest way to destroy a Smart Bidding strategy.*

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author:** Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency managing Google Ads and Meta Ads campaigns for service businesses, dental practices, home services, and e-commerce brands. Creekside manages $20M+ in annual ad spend.
