module.exports = {
  root: true,
  extends: ['universe/native', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react-native/no-color-literals': 2,
    'react-native/no-unused-styles': 2,
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
