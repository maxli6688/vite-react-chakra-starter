/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["sznm/react", "plugin:react/jsx-runtime"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "react/no-unescaped-entities": "off",
  },
};
