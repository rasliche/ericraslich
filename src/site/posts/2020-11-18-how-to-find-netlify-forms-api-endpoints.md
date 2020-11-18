---
title: How to find (and use) a Netlify Form endpoint
subtitle: It's under your nose
tags: ["Web Development", "Tech", "api", "serverless", "netlify"]
---

I was having a bit of trouble trying to navigate using the Netlify API, specifically providing the right query paramaters to access a Netlify Form and use those form responses to build an Eleventy site.

Netlify is an incredible platform, but I do think certain parts of their documentation are underwhelming. The [API documentation](https://open-api.netlify.com/) is pretty bare-bones, and maybe this is just the OpenAPI standard, but I sure they'd give examples as well as where to find the required query parameters for each query.

## Anyway, here we go

If you google this problem enough, you'll basically end up at the Netlify community forums where an old answer, apparently from a Netlify employee, tells you to "do what we do! Check the network tab!"

So unless you want to console.log a bunch of responses to endpoints and work your way through accessing the parameters you need, just check the Network tab of the devtools for your browser.
