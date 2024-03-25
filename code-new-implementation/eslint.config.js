const { FlatCompat } = require("@eslint/eslintrc");
const vue = require("eslint-plugin-vue");
const checkFile = require("eslint-plugin-check-file");

const compat = new FlatCompat();

module.exports = [
  ...compat.extends("prettier"),
  // Global ignores
  {
    ignores: ["dist/*", "dev-dist/*", ".github/*"],
  },
  // Yaml

  // JavaScript, TypeScript & Vue
  {
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    plugins: {
      vue,
    },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["~/*"],
              message: "Use '@/*'",
            },
          ],
        },
      ],
      // TypeScript
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": 0,
      // Vue
      "vue/valid-v-slot": 0,
      "vue/no-deprecated-v-on-native-modifier": 0,
      "vue/multi-word-component-names": 0,
      "vue/no-mutating-props": 0,
      "vue/no-v-text-v-html-on-component": 0,
      "vue/require-explicit-emits": 0,
      "vue/v-on-event-hyphenation": 0,
      "vue/no-deprecated-v-bind-sync": 0,
      "vue/no-v-html": 0,
      "vue/no-template-shadow": 0,
      "vue/no-lone-template": 0,
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      // Internal rules
      "@resights/internal/enforce-scss": "error",
    },
  },
  // Packages
  {
    files: ["packages/**/*"],
    plugins: { "check-file": checkFile },
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/*"],
              message: "Imports outside of package scope is not allowed.",
            },
          ],
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "**/*": "KEBAB_CASE",
        },
      ],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,js}": "KEBAB_CASE",
          "**/*.vue": "PASCAL_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
    },
  },
];
