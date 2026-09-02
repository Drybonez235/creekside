---
title: "How We Use a Custom ChatGPT Script to Generate 160 Google Ads Headlines (And Why We Still Pick Them Manually)"
description: "A custom ChatGPT script that forces correct character counts, outputs 160 headlines per run, and eliminates AI ad copy babysitting. Here's how it works."
date: "2026-08-16"
image: "article-images/chatgpt-google-ads-copywriter-script.avif"
category: "Google Ads"
tags: ["Google Ads", "ChatGPT", "Ad Copy", "AI Tools", "Performance Max"]
---

> **TL;DR:** Peterson built a roughly 10,000-character ChatGPT script to solve two specific frustrations: ChatGPT stopping at 20 headlines when asked for 100-plus, and ignoring character count limits. The script runs an automated interview, pulls context from uploaded business documents and call transcripts, and outputs 160 categorized headlines with enforced character counts. We still pick the winners manually.

| Metric | Value |
|---|---|
| Script length | Roughly 10,000 characters |
| Headlines generated per run | 160 |
| Standard headline character limit enforced | 30 characters |
| Campaign types supported | Performance Max, standard search, demand gen, display |
| Business context source | Uploaded call transcripts and onboarding documents |

# How We Use a Custom ChatGPT Script to Generate 160 Google Ads Headlines (And Why We Still Pick Them Manually)

This post is based on a video Peterson published on the Creekside Marketing YouTube channel: [Turn ChatGPT Into A Genius Google Ads Copywriter](https://www.youtube.com/watch?v=_4ZLv8KOhZc).

If you have tried to use ChatGPT to write Google Ads copy at any volume, you have probably run into the same problem we did. You ask for 100 headlines. You get 20. You specify a 30-character limit. You get headlines that are 20 characters. You spend more time correcting the output than you would have spent just writing the copy yourself.

That is exactly what happened at Creekside Marketing, and it is why Peterson built a custom ChatGPT copywriting script designed specifically for Google Ads. The script solves the volume and character count problems systematically, outputs headlines by category, and pulls in real business context from uploaded documents so the copy is grounded in what the client actually does.

Here is how it works, start to finish.

---

## The Problem with Using ChatGPT for Google Ads Copy Off the Shelf

ChatGPT is a capable tool, but its default behavior when asked to write Google Ads copy at volume is genuinely frustrating. Based on Creekside's experience using it across multiple client accounts, two problems come up every time, without exception.

**Problem one: volume caps.** Ask ChatGPT for 100 or more headline variations and it stops somewhere around 20. It does not tell you it is stopping. It presents what it has as if the output is complete. When you ask it to continue, you are babysitting a tool that was supposed to save you time. The back-and-forth defeats the purpose of using it at all.

**Problem two: character count drift.** Google Ads standard headlines have a 30-character limit. When you tell ChatGPT to "use up to 30 characters," it routinely outputs headlines at 20 characters or fewer. Technically within the limit, but those shorter headlines leave real estate unused. In Google Ads, every character in a headline is an opportunity to communicate value to a potential customer. A 20-character headline when 30 are available is not an optimized asset.

These are not ChatGPT writing bad copy. They are configuration problems. The right script enforces the right behavior.

---

## What Peterson's ChatGPT Google Ads Script Actually Does

The script is roughly 10,000 characters and it turns ChatGPT into a structured, sequential interview process rather than a one-shot prompt that you negotiate with. When pasted into a ChatGPT project, it runs through a defined sequence that produces consistent output across different clients and campaigns.

**Phase one: research mode.** The script opens by asking which business you are generating copy for. Once you tell it, it combs through whatever information is already available inside the ChatGPT project folder. At Creekside, that means uploaded strategy call transcripts and client onboarding documents. The script uses that information to prefill business context automatically, so the copy reflects real details about the business rather than generic marketing language.

**Phase two: the interview.** If the script does not find enough information in the project folder, it shifts into interview mode. It presents required interview questions and attempts to answer them itself based on what it knows. It then asks you to confirm. There are also optional deep-dive questions for campaigns where Peterson wants to narrow in on a specific niche or audience segment. You only go as deep as the campaign requires.

**Phase three: structured output by category.** Once the interview is complete, the script outputs headlines by category with specific formatting rules built in. Standard headlines follow the 30-character limit. Long headlines get their own section with appropriate length targeting. Descriptions are handled separately. The category structure forces completeness. Instead of 20 generic headlines that require a follow-up request, you get a full structured output across every headline type.

![ChatGPT Google Ads Copywriting Script Workflow](/article-images/chatgpt-google-ads-copywriter-script-workflow.svg)

The script is compatible with Performance Max campaigns, which use both standard and long headline formats, as well as standard search campaigns. With minor adjustments to the character count settings, it handles demand gen and display campaigns that use the 40-character limit.

---

## How the Interview Process Works in Practice

One of the most useful aspects of the script is how it handles the difference between accounts where ChatGPT already has context loaded and accounts where it is starting from zero. Both cases are handled without extra prompting on your end.

For established clients where Creekside has uploaded strategy calls and onboarding documents to the project, the script fills in most of the interview answers automatically. Peterson reviews and confirms them, and the script moves directly to headline generation. The call transcript data is particularly valuable here. When a business owner has explained their positioning on a recorded strategy call and that transcript is in the project folder, ChatGPT can use their actual language and framing in the copy. That tends to produce more specific results than copy generated from a general description.

For accounts without pre-loaded context, the interview mode is a clean starting point. The script tells you exactly what information it needs: which keyword group you are writing for, whether you are targeting specific locations, whether the campaign is bottom-of-funnel or awareness-oriented, and similar parameters. You fill in what you know and the script proceeds.

In the demo Peterson ran in the video, the business was South River Mortgage, a current Creekside client with a [full case study here](/case-study-digital-marketing/south-river-mortgage/). The keyword group was reverse mortgage. Targeting was not location-specific. The campaign goal was bottom-of-funnel, targeting people ready to convert. With that context loaded, the script moved through the full output without additional back-and-forth.

---

## Why We Generate 160 Headlines and Still Pick Them Manually

Generating 160 headlines and then selecting the winners manually sounds redundant, but the two steps solve different problems. Volume ensures the strongest headlines are actually somewhere in the output pool. Manual selection ensures a skilled Google Ads manager with real account context, not a pattern-matching model, decides which headlines go live in an actual campaign.

ChatGPT does suggest which headlines it thinks will perform best. The script is designed to surface its top picks at the end of each output. Peterson's position on those suggestions, based on working with the script across multiple accounts: take them with a grain of salt.

AI headline ranking is pattern matching against general marketing principles. It does not have data on what has actually worked in your specific account, for your specific audience, at your specific moment in the market cycle. That context lives in the ad account, not in the model. The model's "best picks" are a reasonable starting point for someone who does not want to review 160 options, but they are not the same as an informed judgment call from someone who knows the account.

The reason for generating 160 headlines is not to use all 160. It is to ensure the good ones are in the pool. If you generate 20 headlines and several are weak, you are either settling for mediocre assets or going back to the AI for another round. If you generate 160 across categories with correct character counts, the best ones are in there. You are selecting from quality instead of trying to improve from a weak starting point.

![Google Ads Headline Types and Character Count Reference](/article-images/chatgpt-google-ads-copywriter-script-headline-types.svg)

---

## How the Character Count Problem Is Actually Fixed

The character count fix is structural, not instructional. The script does not ask ChatGPT to "try to use 30 characters." It specifies the output format in enough detail that character count compliance becomes a constraint built into the generation, not a suggestion that the model interprets loosely.

This is the core difference between a vague prompt and a structured script. A vague instruction like "write headlines up to 30 characters" leaves room for the model to interpret "up to" generously. A structured script that specifies headline categories, required character ranges per category, and output formatting for each type does not leave that room. The model completes each category before moving to the next.

The same principle applies to volume. ChatGPT stops at 20 headlines in an unstructured session because it reaches a natural stopping point in the output and presents what it has as complete. A script that specifies required counts per category and output structure does not let that happen. It has to complete each defined section before the run ends.

Creekside's analysis, based on $20M-plus in managed ad spend, consistently shows that asset quality and asset variety both affect how Performance Max distributes budget within a campaign. A script that forces category-level headline output makes it much easier to build out complete asset groups without gaps. We covered the broader Performance Max mistakes that hurt accounts in [this post on common Performance Max errors](/blog/google-ads-mistakes-broad-match-performance-max-2026/). Copy gaps are one of the most common issues we find in audits.

---

## How to Get the Script

To get the script, comment on the YouTube video and Peterson will send it directly. The script is not in the video description because the full character count, roughly 10,000 characters, exceeds what can be pasted in a YouTube description field. The comment section is the fastest way to get access. If you modify or improve the script after using it, sharing those changes back is useful. Variations across different industry niches tend to surface refinements that improve the tool for everyone, and Peterson notes in the video that he is actively interested in what changes people make.

---

## FAQ

**Does this script require a paid ChatGPT account?**

Peterson runs it on the paid version of ChatGPT, which supports projects with uploaded documents. The research mode and pre-loaded context features depend on being able to upload call transcripts and onboarding documents to a project folder. On a free account, those document upload and project features may be limited or unavailable, which would reduce the script to interview-only mode.

**Can the script handle industries other than mortgage?**

The script is designed to be industry-agnostic. The interview phase collects business-specific information before generating any copy. Peterson demonstrated it with South River Mortgage in the video, but the same script works for any industry where you can provide context about the business, the keyword group, and the conversion goal. The output categories stay the same regardless of industry.

**What happens if ChatGPT has no documents to work with?**

If there are no uploaded documents in the project, the script shifts entirely into interview mode and asks you to provide the relevant information directly. It tells you exactly what it needs: which keyword group, location targeting preference, funnel stage, and similar parameters. Once you provide those, the script proceeds to output generation. The character count and volume enforcement still apply, regardless of whether context came from documents or the interview.

**Is 160 headlines the right number for every campaign?**

The 160-headline output is calibrated to give a large enough selection pool that the best options are clearly visible. For a small, tightly focused campaign with a narrow keyword group, that volume may be more than you need. For a Performance Max asset group where you want variety across standard headlines, long headlines, and descriptions, 160 creates a useful buffer. The right approach is to generate the full output and apply judgment to the final picks, regardless of campaign size.

**Does the script replace the need for a Google Ads specialist?**

No. The script generates raw material. It does not replace the judgment required to select headlines that match the account's actual positioning, resonate with a specific audience, and fit the overall campaign structure. Creekside uses it as a production tool that increases the quality and volume of raw copy, not as a replacement for expertise. The value is in the volume, the character count enforcement, and the structured output categories. The selection step still requires someone who knows the account.

---

**Peterson Rainey** is the founder of Creekside Marketing, a paid ads agency managing Google Ads and Meta Ads for clients across healthcare, home services, finance, e-commerce, and professional services. Creekside manages $20M-plus in annual ad spend. If you want a free audit of your Google Ads or Meta Ads account, book the [free 10K Profit Audit](/10k-profit-audit/).