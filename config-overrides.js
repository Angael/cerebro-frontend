// config-overrides.js
const { override  } = require("customize-cra");

console.log('overriding...')
const supportMjs = () => (webpackConfig) => {
    webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
    });
    return webpackConfig;
};

module.exports = override(supportMjs())