---
title: How to find (and use) a Netlify Form endpoint
subtitle: It's under your nose
tags: ["Web Development", "Tech", "api", "serverless", "netlify"]
---
## summary

I was having a bit of trouble trying to navigate using the Netlify API, specifically providing the right query paramaters to access a Netlify Form and use those form responses to build an Eleventy site.

Netlify is an incredible platform, but I do think certain parts of their documentation are underwhelming. The [API documentation](https://open-api.netlify.com/) is pretty bare-bones, and maybe this is just the OpenAPI standard, but I sure hoped they'd give examples as well as where to find the required query parameters for each query in the Netlify Dashboard.

I wanted to use Netlify Form responses as data in an 11ty site instead of using a database. I'm more familiar with it, I think it was secure *enough*, and it's free and fast. Maybe a poor design decision, but I also wanted to statically generate the site instead of fetching that data from the client at runtime. *\[Note: I think I will go back and refactor this because I'm not in love with it.\]*

## not so quick and dirty

1. Install Netlify's API package if available. Here it is for JavaScript: `npm i netlify`. You'll need this to hit the API.
1. Create a Netlify form on your site and have Netlify build it.
1. Visit the forms tab, open your dev tools, and hit refresh to see what the id is for the form you need.
1. Use that form ID to make a request in an eleventy `_data/*.js` file.
1. Do your thang with that data in your templates.

## anyway, here we go

If you google how to find your form ID enough, you'll eventually end up at the Netlify community forums where an old answer, apparently from a Netlify employee, tells you to "do what we do! Check the network tab!"

So unless you want to `console.log` a bunch of responses to endpoints and work your way through accessing the parameters you need, just check the Network tab of the devtools for your browser. Save your time!

## environment.js

The first thing I did was create an `environment.js` file in my `_data/` directory. This file looks like this, at a minimum:

``` js
// _data/environment.js

module.exports = {
    netlifyPersonalAccessToken: () => {
        // found in Netlify User dashboard
        return process.env.NETLIFY_PERSONAL_ACCESS_TOKEN
    },
    siteId: () => {
        // siteId for API access
        return process.env.SITE_ID
    },
    formId: () => {
        // formId for API access
        return process.env.FORM_ID
    }
}
```

This is my go-to way of getting environmental variables from Netlify. These are available when 11ty builds, with some caveats. It works great for other data stuff, and in templates of course.

## _data/results.js

And this is how you use that form ID and site ID to make a request to the Netlify API.

``` js
// results.js

const { netlifyPersonalAccessToken, siteId, formId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    const resultsFormResponse = await client.listFormSubmissions({
        form_id: formId(),
        site_id: siteId(),
    })

    return resultsFormResponse
}
```

