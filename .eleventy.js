module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/.well-known/brave-rewards-verification.txt");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/service-worker.js");

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