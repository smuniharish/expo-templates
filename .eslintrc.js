module.exports = {
  root: true,
  extends: ['universe/native', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 2021, // Set to the version of ECMAScript you're using
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
    },
  },
  globals: {
    __dirname: true, // Define __dirname as a global variable
  },
};
