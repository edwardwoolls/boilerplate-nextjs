module.exports = {
  // Lint & Prettify TS and JS files
  "**/*.{ts,tsx,js,jsx}": (files) => [
    `yarn eslint --fix ${files.join(" ")}`,
    `yarn prettier --write ${files.join(" ")}`,
  ],

  // Prettify only Markdown and JSON files
  "**/*.{md,json}": (files) => [`yarn prettier --write ${files.join(" ")}`],
}
