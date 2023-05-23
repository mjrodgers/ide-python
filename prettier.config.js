// Add to .prettierignore to ignore files and folders

// This configuration all the formats including typescript, javascript, json, yaml, markdown

// This is copied from atom-community version
module.exports = {
  tabWidth: 2,
  printWidth: 120,
  semi: false,
  singleQuote: false,
  overrides: [
    {
      files: "{*.json}",
      options: {
        parser: "json",
        trailingComma: "es5",
      },
    },
    {
      files: "{*.md}",
      options: {
        parser: "markdown",
        proseWrap: "preserve",
      },
    },
  ],
}
