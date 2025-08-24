import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  { ignores: ["dist/", ".astro/", "node_modules/", "**/*.d.ts"] },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {},
  },
  eslintConfigPrettier,
];
