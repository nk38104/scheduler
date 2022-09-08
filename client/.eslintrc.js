/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "vue",
  ],
  rules: {
    "vue/no-unused-vars": "error",
    "vue/no-unused-properties": "error",
    "vue/no-undef-components": "error",
    "vue/no-undef-properties": "error",
    "vue/no-empty-component-block": "error",
    "vue/component-api-style": "warn",
    "vue/padding-line-between-blocks": "warn",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": true,
      },
    ],
    "vue/define-macros-order": [
      "error",
      {
        "order": [
          "defineProps",
          "defineEmits",
        ],
      },
    ],
  },
};
