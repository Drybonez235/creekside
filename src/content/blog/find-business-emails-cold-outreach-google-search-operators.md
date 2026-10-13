---
title: "Stop Paying for Apollo: How to Find Business Emails for Cold Outreach Using Google Search Operators"
description: "Skip the expensive data tools. Here's how to scrape targeted business emails from Google using search operators and a custom Node.js scraper."
date: "2026-09-18"
image: "article-images/blog-card-target.svg"
category: "Google Ads"
tags: ["Lead Generation", "Cold Outreach", "Google Search Operators", "B2B Prospecting"]
---

**TL;DR:** Most paid B2B prospecting tools pull data from Google anyway. Our custom Node.js scraper cuts out the middleman and collects targeted business emails and phone numbers directly from Google search results using search operators, avoid keywords, and city-by-city location rotation. Keep search phrases under 15 words, run no more than 10 cities per session, and stay at your screen to handle CAPTCHAs within the 30-second window. Output is a CSV ready to upload to any outreach tool.

| Metric | Value |
|, -|, -|
| Search phrase word limit before Google ignores | ~15 words |
| Recommended max city count per session | 10 |
| CAPTCHA manual response window | 30 seconds |
| Output format | CSV (website, email, phone, page name) |

---

When you're trying to find business emails for cold outreach at scale, most tools charge you for access to data that came directly from Google in the first place. We built a custom Node.js scraper that skips the markup and goes straight to the source. This post walks through how to use it effectively, including the specific operator patterns and configuration settings that produce clean, targeted contact lists.

This is based on a video Peterson published on the Creekside Marketing YouTube channel: [Stop Paying For Crappy Leads Thru Apollo - Effective Use of our Email Scraping Tool](https://www.youtube.com/watch?v=Krfhoifv8n8). The scraper requires a one-time setup covered in the prior video. This tutorial assumes you already have it installed.

---

## The Two Code Variants: Which One You Run First Determines Whether You Get Any Data

The scraper has two active versions, and using the wrong one means the tool runs the entire session without collecting a single contact. Before anything else, you need to confirm which version Google is serving for your search.

Open a terminal and run `node run_google_next.js`. This version is built for Google's numbered pagination style, where search results show a row of page numbers (1, 2, 3...) and a "Next" button at the bottom. Watch the automated browser that opens. If numbers appear at the bottom of the page and the "Next" button is clicked automatically, you're on the right version.

If Google shows a "More Results" button instead of numbered pages, stop the code immediately with `Ctrl+C` and switch to `node run_google_more_results.js`. That version handles Google's scroll-and-load format.

Two minutes of verification here prevents a completely wasted 30-minute run. Different searches on the same Google account can return different pagination styles depending on the query and Google's current interface state. Always check first.

One note on the other files in the folder: the versions without underscores in the filename (`run.js` and similar) are early test builds. They'll technically work, but not reliably. Use the underscore versions for any real session.

---

## How to Find Business Emails for Cold Outreach: Writing Search Operators That Actually Work

This is where most people leave performance on the table. The search terms field in your settings file controls exactly what Google returns, and basic keywords without operators produce low-quality, noisy results.

Start with a clear niche keyword and watch what Google returns on the first test run. For example, a basic search for "auto repair" sometimes pulls in auto insurance websites (because "auto" matches) and mower repair shops (because "repair" matches). Neither is useful. The `intext:` operator fixes this directly. Using `intext:"auto repair"` tells Google to only return websites where the exact phrase "auto repair" appears somewhere in the page text. That one change removes most of the irrelevant results without narrowing your targeting too aggressively.

Stack minus operators to exclude categories you don't want. If insurance sites keep appearing, add `-insurance`. If social media directories are showing up, add `-social`. Each minus term removes one category. You can stack as many as you need.

Here's the most important operator most people miss: always include the phrase "contact email" somewhere in your search string. According to Creekside Marketing's testing with this tool, adding "contact email" to the search phrase causes Google to prioritize contact pages in the results. Contact pages are where email addresses actually live. Without this phrase, you're scraping general pages that frequently have no useful contact information at all.

One counterintuitive finding from direct use: after approximately 15 words in your search phrase, Google starts ignoring the extra terms. Being overly specific past that threshold actually makes your results less precise, not more. The operators start canceling each other out. Keep your total phrase under 15 words. That's a ceiling we hit repeatedly in testing, and it holds consistently.

---

## Configuring Avoid Keywords and City Rotation

The settings file has two additional controls that most users underuse: avoid keywords and location rotation. Both are worth configuring carefully before you run any session.

Avoid keywords work differently from the minus operators in your search phrase. Minus operators in the search phrase tell Google which results not to show. Avoid keywords in the settings file tell the scraper which websites to skip after Google has already returned them to the browser. They're complementary, not redundant.

Say you're targeting small local lawn care businesses but Angie's List and HomeAdvisor directories keep appearing in your output. Add "search" to the avoid keywords list. Most large platform sites include a search bar, so any website with the word "search" appearing anywhere on it gets skipped automatically. If a specific brand name keeps showing up, add that brand name to the list.

Each avoid keyword goes inside quotation marks, separated by commas. The field requires at least one entry to function correctly. If you genuinely can't think of a word to exclude, use a random string of at least 10 characters. Don't use short strings of 2-3 characters since those sequences appear inside URLs and JavaScript code, and a short random string can accidentally filter websites you want to keep.

For location rotation, the scraper runs sequentially. It completes the full page rotation for city one, collects all contacts, resets, and then runs the same search for city two, city three, and so on. The locations field is technically just an appended search term, so you can add city names, state names, or additional niche keywords alongside the location.

According to Peterson's recommendation from the original walkthrough, don't run more than 10 cities in a single session. Beyond that, the run gets too long to monitor effectively. Run 10 cities, review the output quality, refine your operators if needed, and run a second session for the next batch of cities.

---

## Reading the Output, Handling CAPTCHAs, and Keeping the Scraper Running

While the scraper runs, your terminal shows each website it processes. Two status labels matter here.

"Success" means the scraper visited the site, executed the page review, and either found contact data or moved on cleanly because nothing was there. "Failed" means the site contained one of your avoid keywords and was deliberately skipped. Both are expected, correct behavior.

The final output lands in `success.csv`. Each row contains: the website URL, the email address found (if any), the phone number found (if any), and the page name the scraper was viewing when it found the data.

Review the CSV before uploading it anywhere. The scraper isn't perfect. A 10-digit postal code can look like a phone number to the code. Some websites use obfuscated contact forms that produce garbled email strings in the output. Five minutes of cleanup keeps your sender reputation clean. We've seen accounts burned by uploading dirty lists without this step, and deliverability damage from bad addresses is slow to recover.

Look, the CAPTCHA issue is real and you can't work around it by leaving the session unattended. Google will serve a CAPTCHA after extended scraping. You have 30 seconds to complete it manually. If you don't respond in time, the scraper shuts itself off and saves whatever it collected up to that point. Keep your screen visible during any active run. Overnight unattended sessions don't produce reliable output.

When the scraper stops cleanly, you'll see a block of diagnostic code in the terminal followed by a count of websites collected. That number is your real output total. The rest of the terminal feedback after shutdown is error-handling code and can be ignored.

---

## What to Do With the CSV

Save the file to your downloads folder or wherever your outreach workflow starts. The CSV format is compatible with most email outreach platforms, SMS senders, and CRMs.

Before loading it into any tool, run a quick scan for:
- Email addresses missing the @ symbol (data artifact, delete these)
- Phone numbers that aren't standard 10-digit US numbers
- Any websites that clearly don't match your target niche

Cold email outreach from a clean, targeted list gets results. Outreach from a dirty list wastes time and hurts your sender domain reputation. The cleanup is five minutes. Don't skip it.

Once you've built a solid contact list from cold outreach, pairing that with [Google Ads campaigns](/digital-advertising/google-ads/) targeting the same audience creates a multi-touch approach that consistently converts better than either channel alone. Warm contacts from prior email exposure recognize your paid search ads and engage at higher rates. For more on how lead quality affects ad performance downstream, see our post on [Google Ads lead quality and conversion tracking](/blog/google-ads-lead-quality-conversion-tracking/).

---

## Frequently Asked Questions

**Can I run both scraper versions on the same search at once?**
No. Each version handles a different Google pagination style, and Google shows only one type for a given search at a time. Run `run_google_next.js` first, watch the automated browser window, and switch to `run_google_more_results.js` only if the pagination type doesn't match.

**How many contacts can I collect in a single run?**
The page limit setting controls how many times the code clicks through results. At 4 clicks, you typically process 20-40 websites depending on how many businesses exist in your target niche and location. Raising the page limit is possible, but deeper pages in Google return less relevant results. We've found 4-5 clicks produces the best quality-to-volume ratio.

**What happens when the scraper finds no email on a site?**
It moves on without adding a row to the CSV. The output file only includes websites where the scraper found an email address, phone number, or both. Sites with no contact data are silently skipped, which keeps the file clean without any manual filtering.

**Why does the avoid keywords field require at least one entry?**
This is a code parsing requirement. The field expects at least one value to function correctly. If you have nothing to exclude, enter a random string of 10 or more characters. Keep it long so it doesn't accidentally match any real website content. Short random strings (under 5 characters) sometimes appear in URLs and JavaScript, and an accidental match will filter out websites you actually want.

---

If you want more breakdowns like this, I write a weekly newsletter about what's actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

*Peterson Rainey is the founder of Creekside Marketing. Creekside manages $20M+ in annual ad spend across Google Ads and Meta Ads for clients in healthcare, home services, professional services, and ecommerce.*