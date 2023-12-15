module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
  },
};
