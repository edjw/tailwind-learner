const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require('@tailwindcss/typography'),
    process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null,
    process.env.NODE_ENV === "production" ?
      purgecss({
        // path to templates/svelte etc files
        //   content: ["./layouts/**/*.html", "./src/**/*.svelte"],
        content: ["./static/*.html"],
        // whitelistPatterns: [/svelte-/],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],

      }) : null,
  ],
};
