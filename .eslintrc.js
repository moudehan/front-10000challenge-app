module.exports = {
  rules: {
    "no-unused-vars": "error",
    "import/no-unused-modules": [2, { unusedExports: true }],
  },
  plugins: ["import"],
};
