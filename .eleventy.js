export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles/**/*.css");
  eleventyConfig.addPassthroughCopy("program/**/*.jpg");
  eleventyConfig.addPassthroughCopy("library/animation.js");
  eleventyConfig.setInputDirectory("eleventy");
  eleventyConfig.addWatchTarget("./program/**/*.js");
}
