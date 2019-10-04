module.exports = function(eleventyConfig) {
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  eleventyConfig.addPassthroughCopy(".well-known/brave-rewards-verification.txt");
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: 'src',
    }
  }
};