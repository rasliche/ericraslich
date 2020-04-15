module.exports = function(eleventyConfig) {
  // addPassthroughCopy strips the `dir.input` directory and replaces with `_site`
  eleventyConfig.addPassthroughCopy("src/site/.well-known/brave-rewards-verification.txt");
  eleventyConfig.addPassthroughCopy("src/site/css/*.css");
  eleventyConfig.addPassthroughCopy("src/site/js/*.js");
  eleventyConfig.addPassthroughCopy("src/site/service-worker.js");

  // filters
  eleventyConfig.addFilter("dateDisplay", require("./src/utils/filters/date.js"));

  return {
    dir: {
      input: "src/site",
      templateFormats : ["njk", "md", "11ty.js"],
      markdownTemplateEngine : "njk",
    }
  };
};