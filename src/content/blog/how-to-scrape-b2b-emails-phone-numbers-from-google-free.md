---
title: "Stop Paying for B2B Lead Lists: How to Scrape Emails and Phone Numbers from Google for Free"
description: "Step-by-step guide to downloading and installing Creekside's B2B email and phone scraping tool. VS Code, Node.js, and 15 minutes is all you need."
date: "2026-09-19"
image: "article-images/blog-card-target.svg"
category: "Google Ads"
tags: ["B2B Lead Generation", "Email Scraping", "Free Tools", "Lead Generation", "Google"]
---

> **TL;DR:** Creekside built an email and phone number scraper that pulls contact data from websites that rank on Google search results. Setup requires three free tools: Visual Studio Code, Node.js, and the Creekside code folder. Installation takes about 15 minutes. You know it is working when an automated Chrome browser opens on its own and starts typing. A companion video covers how to actually run the searches once you are set up.

| What You Need | Where to Get It |
|, , , , |, , , , |
| Visual Studio Code | Official VS Code site (free download) |
| Node.js | Official Node.js site (free download) |
| Creekside code folder | Link inside the Creekside how-to document |
| Test command | `node run_google_next.js` |

## How to Find B2B Emails and Phone Numbers for Free

B2B prospect lists cost money. They go stale fast. The contact information you actually want, direct email addresses and phone numbers for the right people, is already sitting on websites that rank on the first page of Google. Business owners who want to be found put their contact info there on purpose.

What was missing was a systematic way to pull that data without spending hours doing it manually.

That is what this tool does. It is a Google search automation script that controls an automated Chrome browser, pulls websites from search results, and extracts emails and phone numbers from those pages. This post covers the installation process. How to actually run searches and use the tool effectively is covered in the companion usage video on the [Creekside Marketing YouTube channel](https://www.youtube.com/watch?v=tBpSOW7WtT4).

One thing worth stating upfront: you will need access to the Creekside how-to document to get the actual download links. That document has the specific URLs for the software and code, plus a full overview of how to use the tool once it is running. This post walks through the installation sequence step by step.

## The Three Things You Need Before You Start

Good news: nothing here costs money. All three components are free downloads.

**Visual Studio Code.** This is the code editor where you load and run the scraping script. VS Code is made by Microsoft and runs on both Mac and Windows. You do not need to write any code in it. Think of it as the control panel you use to launch the scraper. You are clicking two or three things total. That is it.

**Node.js.** This is the runtime that lets your computer execute JavaScript files outside of a browser. The scraping script is built on Node.js. Without it installed, VS Code can display the files just fine, but nothing will actually run. Node.js has its own installer that takes about two minutes.

**The Creekside code folder.** This is the actual automation script. The folder is called "search emails code" and it contains the logic that tells the Chrome browser what to do on Google. You get the download link from the how-to document.

Here is how they work together: VS Code handles the interface, Node.js handles the execution, and the code folder is what directs the automated Chrome browser. Each piece is required. Skip one and nothing works.

## How to Download and Install the Tool

### Step 1: Download Visual Studio Code

Go to the official VS Code site. On the download page you will see options for Mac, Windows, and Linux. Choose the right one for your computer. On a Mac, click the Mac download. On Windows, click the Windows download.

Once it downloads, open the installer and follow the prompts. VS Code will open automatically when the install finishes. You will see a blue "Open Folder" button in the middle of the screen. Do not click it yet. There is no folder to open at this stage. Move on to Node.js first.

### Step 2: Download Node.js

Go to the official Node.js site and click download. On a Mac, the installer walks you through: Continue, Continue, agree to the license, Install. You will need to enter your system password when prompted. Once the install finishes, click Close. You can move the installer package to the trash at that point.

On Windows, the process is the same in substance, you are running an installer and following the prompts. After Node.js installs, restart VS Code so it recognizes that Node.js is now on your system.

### Step 3: Download the Creekside Code Folder

Inside the Creekside how-to document, you will find the direct link to the code folder. Open it. Then download the entire folder. On Google Drive, right-click the folder and choose "Download" to get everything at once as a zip file.

The downloaded file will land in your Downloads folder. Unzip it. After unzipping, you should see a folder called "search emails code" sitting in Downloads.

### Step 4: Open the Code in VS Code

Back in VS Code, click "Open Folder." A file picker will appear. Navigate to your Downloads folder. Scroll until you see "search emails code." Select it and click Add (on Mac) or Select Folder (on Windows).

Here is the check: look at the top-left area of the VS Code window. It should show "SEARCH EMAILS CODE" as the name of the open project. That is your confirmation you are in the right place.

If you see a different folder name, close it and try again. If the name you expect is not showing at all, you likely opened the wrong folder or downloaded something other than the full code folder. Re-download from the document link and start Step 4 again.

### Step 5: Install the Chrome Automation Package

Inside VS Code, you will see a terminal panel at the bottom of the screen. If you do not see it, go to View in the menu and select Terminal.

Go to the Creekside document and copy the install command. Copy it exactly. Do not add spaces at the beginning or end.

Paste it into the VS Code terminal and hit Enter.

Lines of code will appear as the Chrome automation library downloads. This package is what gives the script control over Chrome. Let it run until it completes. When it is done, you will see a message confirming the download finished.

### Step 6: Verify the Install Works

In the same VS Code terminal, type:

```
node run_google_next.js
```

Hit Enter.

A Chrome browser will open on its own. Watch it. It will start typing automatically into a search bar without you touching anything.

That is your confirmation. An automated Chrome browser opening and typing on its own means the install worked. You are done with setup.

If nothing opens, or if the terminal throws an error, run through this checklist before reaching out:

- Is VS Code open to the "search emails code" folder specifically?
- Did you install Node.js before running the command?
- Did you download the correct code folder from the document link?

We troubleshoot this regularly and we are happy to walk through it with you.

## What the Automated Chrome Browser Is Actually Doing

Understanding what the tool does helps you know whether it worked correctly.

At its core, this is a Chrome automation script. When you run the test command, it opens a separate automated Chrome instance, not your regular browser, and not connected to it, and shows you that the automation is active by typing automatically into a search field. That is the behavior you are looking for during the test.

When you actually run the scraper with real search parameters (covered in the usage video), it follows a similar pattern at scale: opening Chrome, navigating Google search results, visiting the websites it finds, and pulling email addresses and phone numbers from those pages.

There are nuances to running it effectively. The companion video on the [Creekside Marketing YouTube channel](https://www.youtube.com/watch?v=tBpSOW7WtT4) covers those. Installation is step one. Knowing how to run it well is step two, and it needs its own walkthrough.

## How This Tool Fits Into a B2B Outreach Strategy

For B2B businesses that also run paid search, tools like this complement campaigns rather than compete with them. [Google Ads](/blog/google-ads-not-enough-conversions-what-to-do/) reaches buyers who are already searching for a solution. A list of scraped contacts reaches people who have not started searching yet.

Both channels have a role. The practical question is whether you have a systematic way to fill each of them. A [full-funnel paid ads approach](/blog/full-funnel-google-ads-strategy-search-pmax-demand-gen/) can generate significant volume through search and retargeting. A cold outreach list built from scraped contact data extends your reach to prospective buyers who are not yet in the market.

We built this tool because Creekside needed a way to do this systematically. Based on $20M+ in managed ad spend across our client accounts, we know paid search captures buyers who are actively looking. This tool builds pipeline with buyers who are not there yet.

## Frequently Asked Questions About the B2B Email Scraper

**Does this work on Windows, or only Mac?**

The setup demo in the video shows a Mac, but the process is identical on Windows. Download the Windows version of VS Code and the Windows Node.js installer. The code itself runs the same on both operating systems.

**Do I need any coding experience to use this?**

No. The installation involves copying two commands from the document and pasting them into a terminal. The scraper runs from a single command. If you can copy and paste text, you can install and run this tool.

**What if VS Code does not recognize the `node` command after I install Node.js?**

This usually means VS Code was already open when you installed Node.js and did not pick up the new install. Close VS Code completely, reopen it, and try the command again. If it still fails, reinstall Node.js and restart your computer before trying again.

**Is the Chrome browser that opens the same as my regular Chrome?**

No. The script downloads a separate automated Chrome instance specifically for this use. Your regular browser and anything you have open in it are not affected.

**How do I use the tool once it is installed?**

That is what the companion video covers. This installation walkthrough is step one. The usage video explains search parameters, how to configure a scrape, and how to collect the output it generates.

---

If you want more breakdowns like this, I write a weekly newsletter about what is actually working inside the ad accounts we manage. Real wins, real losses, no fluff. [Subscribe to the Creekside newsletter](/newsletter/).

---

**About the Author:** Peterson Rainey is the founder of Creekside Marketing, a paid advertising agency that manages $20M+ in annual ad spend across Google Ads and Meta Ads. Peterson built the B2B email and phone scraping tool described in this post as part of Creekside's internal marketing stack.
