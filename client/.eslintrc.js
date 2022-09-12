/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "@extensionengine",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "vue/no-multiple-template-root": "off",
    "no-unexpected-multiline": "error",
    "vue/no-unused-vars": "error",
    "vue/no-unused-properties": "error",
    "vue/no-undef-components": "error",
    "vue/no-undef-properties": "error",
    "vue/no-empty-component-block": "error",
    "vue/component-api-style": "warn",
    "vue/padding-line-between-blocks": "warn",
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: true,
      },
    ],
    "vue/define-macros-order": [
      "error",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
        multiline: 1,
      },
    ],
  },
};
