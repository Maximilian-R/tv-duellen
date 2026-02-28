export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/*");
  eleventyConfig.addPassthroughCopy("styles/**/*.css");
  eleventyConfig.addPassthroughCopy("program/**/*.jpg");
  eleventyConfig.addPassthroughCopy("program/**/*.webp");
  eleventyConfig.addPassthroughCopy("library/animation.js");
  eleventyConfig.addPassthroughCopy("library/dialog.js");
  eleventyConfig.addPassthroughCopy("library/voting.js");

  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.setInputDirectory("eleventy");

  eleventyConfig.addWatchTarget("./program/**/*.js");
}
