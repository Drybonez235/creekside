---
title: "How to Track Email Clicks in Google Ads With Google Tag Manager (And Why 'No Recent Conversions' Doesn't Mean Broken)"
description: "Track email link clicks as Google Ads conversions using GTM. Set up the Contact conversion action, configure the mailto: trigger, and verify it works."
date: "2026-10-04"
image: "article-images/blog-card-trend.svg"
category: "Google Ads"
tags: ["Google Ads", "Conversion Tracking", "Google Tag Manager"]
---

**TL;DR:** Tracking email link clicks in Google Ads requires two components: a Contact conversion action in Google Ads (to get your Conversion ID and Label) and a Google Ads Conversion Tracking tag in GTM with a Click URL "contains mailto:" trigger. Once live, Google Ads shows "no recent conversions," which confirms setup is correct, not broken.

| Component | Detail |
|, , , -|, , |
| Google Ads conversion category | Contact |
| Conversion count setting | 1 |
| GTM tag type | Google Ads Conversion Tracking |
| GTM trigger type | Click Just Links |
| Trigger filter | Click URL contains "mailto:" |
| Verification tool | Google Ads Tag Assistant |
| Success indicator | Green checkmark on email click |
| Post-setup status | "No recent conversions" = working |

# How to Track Email Clicks in Google Ads With Google Tag Manager

How to track email clicks in Google Ads is one of those setups businesses skip because it looks complicated from the outside. It is not. If you have Google Tag Manager running on your site and a Google Ads account, you have everything you need.

This walkthrough is based on a tutorial Peterson published on the Creekside Marketing YouTube channel: [How to Track Emails as Conversions in Google Ads](https://www.youtube.com/watch?v=vHiqgQtgKyw). We turned it into a written reference so you can follow each step without pausing the video.

---

## What You Need to Track Email Clicks in Google Ads

To track email clicks in Google Ads using Google Tag Manager, two conditions must be true before you touch any settings: your Google Tag Manager container must be fully set up and publishing to your website, and your website must have a real clickable email link, not just an email address displayed as text or as an image.

The GTM requirement is non-negotiable. If the container isn't installed and actively publishing to your site, no tag you create inside GTM will ever fire on your pages. Get GTM set up first and come back once it's working.

The clickable email link is the condition most people miss. Your contact page might show your email address as plain text or as a graphic. Neither is something GTM can detect a click on. You need an actual HTML anchor element with a `mailto:` attribute.

Here is how to check: hover over the email address on your contact page. Look at the bottom left corner of your browser. If a `mailto:youraddress@yourdomain.com` URL appears in the status bar, you have a proper link. If nothing appears, the email is not clickable. Contact your web designer and ask them to wrap the email address in a proper mailto: link. There is no GTM workaround for this. Once both conditions are met, the rest of the setup is straightforward.

---

## Step 1: Create the Contact Conversion Action in Google Ads

To create a contact conversion action for email click tracking, go to Goals in the left sidebar, click "New conversion action," then select "Website." Scan your domain, then manually add a conversion action using the Contact category. You will get a Conversion ID and Conversion Label to use in GTM in the next step.

Enter your website domain and click Scan. On the results page, scroll down and click "Add a conversion action manually." A category selector appears. Choose Contact.

For the conversion name, be specific. "Click to Email [Your Business Name]" is a clear format that stays identifiable in reports months later. Generic names like "Email" cause confusion when an account has multiple conversion actions.

The conversion value field is optional. Creekside Marketing's experience across $20M+ in managed ad spend is that knowing what a contact event is worth, even roughly, is useful for making budget decisions later. If you have a number in mind, put it in. If not, leave it. The tracking works either way.

Set Count to 1. Leave everything else at the default settings. Click Done, then Save and Continue.

On the next screen, select "Use Google Tag Manager." Google Ads will display your Conversion ID and your Conversion Label. Keep this browser tab open. You will need both values in GTM.

---

## Step 2: Set Up the Google Ads Conversion Tracking Tag in GTM

Setting up the GTM tag for email click tracking requires a Google Ads Conversion Tracking tag type with a "Click Just Links" trigger filtered to Click URLs containing "mailto:". This trigger condition is the part most setups get wrong. Get it right and the tag fires on every email link click across your site automatically.

Open Google Tag Manager. Go to Tags in the left sidebar and click New. Click into Tag Configuration and navigate to Google Ads, then choose "Google Ads Conversion Tracking."

Fill in three fields:

- **Conversion ID**: copy this from the Google Ads tab you kept open
- **Conversion Label**: copy from the same place
- **Conversion Value**: enter the same number you put in Google Ads, or leave blank if you skipped that

Leave the remaining tag fields at their defaults.

Scroll to Triggering and click the plus sign to create a new trigger. Choose "Click Just Links" as the trigger type. Then select "Some Link Clicks" rather than "All Link Clicks."

Set the filter condition: **Click URL** contains **mailto:**

If "Click URL" is not available in the variable dropdown, you need to enable it. Click "Choose built-in variable," find Click URL under the Clicks section, and check the box. Save, return to your trigger, and Click URL will now appear in the dropdown.

Name the trigger "Click to Email Trigger" and save.

Back in the tag window, name the tag "Click to Email Google Ads Conversion Tracking." Save it.

Click the blue Submit button at the top of GTM. Give the version a clear name, like "Click to Email Google Ads Conversion Tracking," and click Publish.

---

## How to Verify Email Click Conversion Tracking Is Working

To verify the email conversion tag, use Google Ads Tag Assistant: enter your website URL in the Troubleshoot flow, navigate to your contact page, and click the email link. A green checkmark in Tag Assistant confirms the GTM tag fired correctly. A caution symbol means something is misconfigured, and Tag Assistant will tell you specifically what to fix.

Return to Google Ads. Find the conversion action you created and click "Troubleshoot." Enter your full website URL, including https, and click Connect.

This opens Tag Assistant on your website. Navigate to a page that has your email link.

Before clicking anything: hover over the email address and look at the browser's status bar. If a `mailto:` URL appears there, the link is properly set up. If nothing appears, the link is not clickable and the trigger will never detect it. Fix the link first.

If the mailto: URL shows: click the email. Your mail client will open. Close it immediately. You do not need to actually send anything.

Watch the Tag Assistant panel. A green checkmark should appear right away. That is your confirmation. The tag fired, the conversion recorded, and the setup is working. If a caution symbol appears instead, follow the specific instructions Tag Assistant shows. The most common cause is a trigger condition that was typed incorrectly or a GTM variable that was not enabled.

---

## What "No Recent Conversions" Actually Means After Setup

After publishing and verifying the tag, your Google Ads conversion action will show "no recent conversions." This status is correct and expected. It means Google is reading the conversion action and no real user has clicked your email link yet since the tag went live. This is not a failure.

Here's the thing most people get wrong: they see that phrase and assume the setup is broken. They pull the conversion action out and start over.

The green checkmark from Tag Assistant is your actual proof of correct setup. What Google Ads is waiting for is real user activity. Once a real visitor clicks your email link, the conversion records and the status updates.

That phrasing comes directly from how we walk through this: "no recent conversions, which means it's working." The status is not an error. It is a fresh conversion action with zero recorded data, which is exactly where you should be at this point.

---

## FAQ: Email Click Conversion Tracking in Google Ads

**Why does the conversion action show "Inactive" right after I create it?**
New conversion actions created via Google Tag Manager start as Inactive in Google Ads. That is expected. Clicking "Troubleshoot" is what opens the Tag Assistant verification flow so you can manually confirm the tag fires. Inactive status updates once real conversion data comes in from actual users on your site.

**Does leaving the conversion value blank affect whether clicks are tracked?**
No. The value field is for reporting and budget planning purposes only. The conversion records identically whether the value is set, left blank, or set to 1. If you know what an email inquiry is worth to the business, add a number. If not, leave it for now and update it later.

**Click URL is not showing up in my GTM trigger dropdown. What do I do?**
You need to enable it. In GTM, go to Variables in the left sidebar, click Configure, and look for "Click URL" under the Clicks group. Check the box next to it. Save, return to your trigger, and Click URL will now be available in the condition dropdown.

**What if I see a caution symbol in Tag Assistant instead of a green checkmark?**
Follow the specific instructions Tag Assistant provides. It will show you exactly what is misconfigured. Common causes include the mailto: condition typed incorrectly, Click URL not enabled as a variable, or a GTM container version that was not published after you made changes.

**The email on my site shows up but hovering reveals nothing in the status bar. What does that mean?**
The email is displayed as text or as an image, not as a real clickable link. GTM triggers can only fire on actual link clicks. Ask your web designer to wrap the email address in a standard anchor tag: `<a href="mailto:info@yourdomain.com">info@yourdomain.com</a>`. Once that is deployed, redo the Tag Assistant verification.

---

Conversion tracking needs to be right before any optimization decision you make carries real weight. For a broader view of how we audit conversion setup before touching bidding, the [Google Ads conversion tracking settings walkthrough](/blog/google-ads-conversion-tracking-settings/) covers account-level vs. campaign-level settings and which defaults to change. If you are working through status warnings across multiple conversion actions, the [5-minute conversion health check we run on every client account](/blog/google-ads-conversion-check-troubleshooting-guide/) walks through what each indicator actually means.

---

If you want more breakdowns like this, I write a weekly newsletter about what is actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**Peterson Rainey** is the founder of Creekside Marketing, a paid advertising agency managing $20M+ in ad spend across Google Ads and Meta Ads for service businesses, dental practices, med spas, and ecommerce brands.