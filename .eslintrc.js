module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
  },

  plugins: ["prettier"],

  extends: [
    "@vue/typescript/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],

  rules: {
    "prettier/prettier": ["error"],
    "@typescript-eslint/indent": ["error", 2],
    "import/extensions": "off",
    "vue/padding-line-between-blocks": ["error", "always"],
    "@typescript-eslint/no-shadow": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "vue/no-empty-component-block": "error",
    "vue/new-line-between-multi-line-property": [
      "error",
      {
        minLineOfMultilineProperty: 2,
      },
    ],
  },

  ignorePatterns: [
    ".eslintrc.js",
    "commitlint.config.js",
    "vite.config.js",
    "vite.config.noexternal.js",
    "jest.config.js",
    "stylelint.config.js",
    "src/types/vuelidate/*",
    "rollup.config.js",
    "prebuild.mjs",
    "tailwind.config.js",
    ".husky/",
    ".firebase/",
  ],
};
