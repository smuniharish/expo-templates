// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname, {
//   // [Web-only]: Enables CSS support in Metro.
//   isCSSEnabled: true,
// });
const config = getDefaultConfig(__dirname);
// config.resolver.sourceExts.push('mjs');
config.watcher.additionalExts.push('mjs', 'cjs');

module.exports = config;
