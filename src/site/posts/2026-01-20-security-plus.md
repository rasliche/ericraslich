---
title: CompTIA Security+ 
# subtitle: catchy subtitle can go here
tags: ["IT", "work", "cybersecurity", "certification"]
---
It took me a little longer to get my ducks lined up but I finally used the exam voucher for the CompTIA Security+ certification. Passed! First try!

## My Testing Experience

The exam experience was about what I should have expected for taking it with an online proctor. They were very picky about the testing environment around the desk. But actually reasonably accomodating for the rest of the room. I heard a lot of nightmare stories of online proctors disqualifying test takers for noise (I have a one year-old, plus dogs) or hearing voices (multigenerational house with everyone working from home or retired).

I also experienced an error on the test provider side. When I was 95% done with the exam. I'm sure my blood pressure was spiking. Luckily they recovered it, with little explanation from the proctor, and in the end it was fine.

Except for the error on PearsonVue's application end, I wouldn't hesitate to do it again since the nearest testing center is an hour away no matter what. For future exams, I'll probably just try to make a day of it.

## You didn't ask for this advice but

With the caveat that the Security+ was my first certification exam of this kind, I would say that it was *not easy*. I'm glad I was actually interested in the content because the way CompTIA writes the exam can be maddening.

If you're like me, you ended up on reddit or youtube reading stories or watching videos with headlines saying "How I got Security+ in X weeks" where X is an improbably low number. Ignore them. None of them have anything valuable to offer you can't get from someone with better generalized study advice.

There's a lot of facts you can learn to guarantee certain free points on the exams:

- Port numbers
- Most secure cryptography
- Definitions of hardware/software/techniques
- **Acronyms**

You either know these things or you don't. And if they aren't asked directly, they're required to answer a longer question.

But there are *way* more questions that are sort of *best opinion*, in my opinion:

- How to improve a company's security training
- Achieving a business objective the best/cheapest/fastest way
- Deciding cybersecurity strategy given conflicting constraints

This stuff just kind of comes through experience or training. Simply watching YouTube will get you a long way, but listening to experts give talks, running through simulations, and reading post-mortems and incident reports from big companies ended up being a great way to spend my study time because it inevitably turned into a deeper dive into a technology or company.

For resources I do recommend, if you haven't heard of [Professor Messer](https://youtube.com/playlist?list=PLG49S3nxzAnl4QDVqK-hOnoqcSKEIDDuv&si=1v1uHclVq716xw8a) you certainly would have eventually. His youtube courses run through all the objectives listed on the CompTIA study guides. He has a bunch of other resources too that I would consider if I were studying something less familiar. Then I grabbed a set of [6 Practice tests with Performance-based Questions (PBQs) on Udemy from Mike Chapple](https://www.udemy.com/share/10by4T3@WIsLVZVdWcF5tJCntlcoBI0b282QOPvYpx102Xa-82macbU-qJjqs4Owls4smyq8/). That's another name I see recommended frequently so it felt reasonable to buy his product too.

The key is to not take all the practice exams at once. Run through all the youtube videos you think you need to, cover answers on the screen, and try some of the review/walkthrough videos-- whatever you have to do to quiz yourself. *Then* go take a practice exam. If you know you're getting questions wrong, bail on it, study, and come back. The CompTIA exams don't have a publicly available question pool, you need to understand enough to know the answer.

Your loop is:

1. Watch/read/listen to all the material you think you need.
2. Start a practice exam and hold yourself to a high standard.
3. QUIT EARLY-- There's no point in taking a 90 question 1.5 hour test that you know you are failing.
4. Study your weak areas. The exam is broken up by objective and CompTIA tells you what percentage of the exam is covered by each subject area.
5. Finish the same practice exam or try other review questions.

The goal is to have two or three practice exams left over so you can try to simulate the timed exam as closely as possible without seeing questions you've already attempted.

I know a lot of folks would say these certifications don't hold the weight they used to, but in my opinion you can't just walk in and memorize what you need for these exams. The mile-wide, inch deep description of Security+ is probably directionally correct, but it does take some study and understanding of the building blocks to sit down and succeed at this exam.

<!-- Netlify is an incredible platform, but I do think certain parts of their documentation are underwhelming. The [API documentation](https://open-api.netlify.com/) is pretty bare-bones, and maybe this is just the OpenAPI standard, but I sure hoped they'd give examples as well as where to find the required query parameters for each query in the Netlify Dashboard.

I wanted to use Netlify Form responses as data in an 11ty site instead of using a database. I'm more familiar with it, I think it was secure *enough*, and it's free and fast. Maybe a poor design decision, but I also wanted to statically generate the site instead of fetching that data from the client at runtime. *\[Note: I think I will go back and refactor this because I'm not in love with it.\]*

## not so quick and dirty

1. Install Netlify's API package if available. Here it is for JavaScript: `npm i netlify`. You'll need this to hit the API.
1. Create a Personal Access Token in your Netlify User Settings.
1. Create a Netlify form on your site and have Netlify build it.
1. Visit the forms tab, open your dev tools, and hit refresh to see what the id is for the form you need.
1. Use that form ID to make a request in an eleventy `_data/*.js` file.
1. Do your thang with that data in your templates.

## anyway, here we go

If you google how to find your form ID enough, you'll eventually end up at the Netlify community forums where an old answer, apparently from a Netlify employee, tells you to "do what we do! Check the network tab!"

So unless you want to `console.log` a bunch of responses to endpoints and work your way through accessing the parameters you need, just check the Network tab of the devtools for your browser. Save your time! Start by going to the Forms section of one of your Netlify sites. Open the dev toops, and hit refresh on your browser.

First, look at the `forms` network request to find your site ID in the request URL, or you can find it in the Netlify Dashboard under Settings > General > Site Details > API ID:

![Network tab in chrome dev tools showing the headers tab](https://res.cloudinary.com/duzmgsio4/image/upload/v1610936994/ericraslich/network_tab.png)

Next, check out the Preview tab. This is where you can find the ID for each form, along with some meta-info about the form. You'll use the ID in a later request using the netlify npm package to get the responses to each form.

![Network tab in chrome dev tools showing the preview tab](https://res.cloudinary.com/duzmgsio4/image/upload/v1610936994/ericraslich/preview_tab.png)



## src/site/_data/environment.js

The first thing I did in my project was create an `environment.js` file in my `_data/` directory. 11ty makes these available on a project-wide level. This also contains the final piece of the request puzzle, your personal access token. While logged into Netlify, click your user icon in the top right corner and navigate to the Personal Access section of the Applications tab. Name it whatever you want, make sure to copy it down into your Netlify Environment Variables area.

The file looks like this in your project, not including any other environment variables you need:

``` js
// src/site/_data/environment.js

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

## src/site/_data/results.js

And this is how you use that form ID and site ID we found earlier to make a request to the Netlify API.

``` js
// src/site/_data/results.js

const { netlifyPersonalAccessToken, siteId, formId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    const formResponses = await client.listFormSubmissions({
        form_id: formId(),
        site_id: siteId(),
    })

    return formResponses
}
```

## how to use the results in an eleventy nunjucks template

Here is an example you could use in a nunjucks template with the results we got above from Netlify's API:

```njk
// src/site/results.html
// results from results.js
{%- raw %}
  <div>
    {%- for racer in results -%}
      <div>
        <p>{{ racer.name }}<span>{{ racer.location }}</span></p>
        <p>{{ racer.time }} <span>{{ racer.distance }}</span></p>
        <p>"All thanks to {{ racer.fuel }}"</p>
      </div>
    {%- endfor -%}
  </div>
{% endraw %}
```

Hope this was a little helpful. Happy to assist with your projects specific if you need a pair of second eyes. Constructive criticism welcome, on this first of hopefully many posts. -->