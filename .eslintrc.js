module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "plugin:prettier/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
};
