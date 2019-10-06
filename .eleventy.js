module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/.well-known/brave-rewards-verification.txt");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/service-worker.js");

  return {
    dir: {
      input: 'src',
    }
  }
};