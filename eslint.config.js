import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // ERRORS ONLY (will break your code)
      "no-undef": "error", // Undefined variables
      "no-unused-vars": "error", // Unused variables
      "no-unreachable": "error", // Dead code
      "no-dupe-keys": "error", // Duplicate object keys

      // WARNINGS → OFF (style/preference issues)
      "prefer-const": "off", // let vs const preference
      "no-console": "off", // console.log usage
      "jsx-quotes": "off", // JSX quote style

      // STYLE RULES → OFF (let Prettier handle)
      indent: "off",
      quotes: "off",
      semi: "off",
    },
  },
  eslintConfigPrettier,
];
