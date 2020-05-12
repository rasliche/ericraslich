const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {
  // addPassthroughCopy strips the `dir.input` directory and replaces with `_site`
  eleventyConfig.addPassthroughCopy("src/site/.well-known/brave-rewards-verification.txt");
  eleventyConfig.addPassthroughCopy("src/site/css/*.css");
  eleventyConfig.addPassthroughCopy("src/site/js/*.js");
  eleventyConfig.addPassthroughCopy("src/site/service-worker.js");

  // filters
  // Add a friendly date filter to nunjucks.
  // Defaults to format of LLLL d, y unless an
  // alternate is passed as a parameter.
  // {{ date | friendlyDate('OPTIONAL FORMAT STRING') }}
  // List of supported tokens: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens  
  eleventyConfig.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
        zone: "utc"
      }).toFormat(format)
  })

  // shortcodes

  return {
    dir: {
      input: "src/site",
      templateFormats : ["njk", "md", "11ty.js"],
      markdownTemplateEngine : "njk",
    }
  };
};