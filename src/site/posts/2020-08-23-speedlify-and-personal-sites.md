---
title: Speedlify and Personal Sites
subtitle: How to measure your site performance over time
tags: ["Web Development", "Tech", "Self-hosted"]
---
## a little background

If you weren't aware (and you shouldn't be!), this site was built with [Eleventy](11ty.dev). It is an incredibly awesome static site generator built by [Zach Leatherman](zachleat.com).

Something I've been wanting to do is get on those sweet 11ty Leaderboards and just generally get better at building good, accessible, performant and progressive websites.

Zach released this awesome tool called [Speedlify](zachleat.com/web/speedlify), so I tried to adapt it a bit to my own needs and plugged it into my own site and workflow. It's a separate project hosted on a separate subdomain, so I don't *think* it counts against the scores for ericraslich.com, and I didn't want any errors when it deploys to count against me or this netlify project. You can ready Zach's project post for more info on Netlify build times and how he tries to guard them.

## overview

Here are the general steps I took

<!-- Markdown lists don't need actual ordered numbers. This makes them easy to re-order. -->
1. Clone and configure the speedlify repo
1. Host on Netlify
1. Webhook it all together

## clone and configure the speedlify repo

TODO because it looks like there's been some changes since I forked Speedlify, but generally the repo was fairly easy to understand if you are familiar with 11ty and where it gets data from. It looks like you still need to go into the `_data/sites/` and edit the files to match your site URLs, set `skip: false`, and bingo bango you should be close. Reach out to me if you need an assist.

## host on netlify

I set Speedlify up as a Netlify site, so it deploys when I commit to the master branch of my fork of Speedlify. Because I'm not often working on Speedlify, I let this do what it's gonna do, and don't plan to mess with it often at this point. But as we configured above, you can choose how often to run the speed tests against your sites/pages. I own a domain (you're here now), and was able to put Speedlify on it's own subdomain. I think it's cool. Why not? It feels a little more professional than a randomly generated URL.

## webhook it all together

Netlify gives you a few ways to send or listen for webhooks. I have a few projects, but this personal site is really my main focus at the moment (and use the term "main focus" loosely), so that's the one for which I'm going to set up what Netlify calls a Deploy Notification.

First, go to your Speedlify project and head to the Settings > Build & Deploy > Build Hooks.

Click Add Build Hook and give it whatever name you want. I called mine the very clever PersonalSiteDeployed. Choose the branch to deploy (probably main) and hit save. Copy the URL it generates, you'll need it for the next part.

Switch to whatever project you want to use to trigger a build/run of Speedlify and go to the Settings > Build & Deploy > Deploy Notifications.

We're going to keep it simple and only have Speedlify do a run if our build succeeds, meaning the new version of your site is deployed on Netlify and live on the internet for humans to see. Who cares what the robots think if you're not even at that point?

Click Add Notification and select Outgoing Webhook. For Event to Listen For you want to choose Deploy Succeeded if you're following along with me. Now, you need to enter the Build Hook URL from the first part. No tokens needed. Hit save.