module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ["standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // we only want single quotes
    quotes: ["error", "double"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"]
  }
};
