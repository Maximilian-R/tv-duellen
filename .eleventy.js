export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/favicon.jpg");
  eleventyConfig.addPassthroughCopy("images/curtain2560x1440.png");
  eleventyConfig.addPassthroughCopy("images/curtain1000x2000.png");
  eleventyConfig.addPassthroughCopy("styles/**/*.css");
  eleventyConfig.addPassthroughCopy("program/**/*.jpg");
  eleventyConfig.addPassthroughCopy("library/animation.js");
  eleventyConfig.addPassthroughCopy("library/dialog.js");
  eleventyConfig.addPassthroughCopy("library/image.js");

  eleventyConfig.setOutputDirectory("dist");
  eleventyConfig.setInputDirectory("eleventy");

  eleventyConfig.addWatchTarget("./program/**/*.js");
}
