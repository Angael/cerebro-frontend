// UNUSED AS OF NOW, PROBABLY CAN ALIAS STYLED COMPONENTS HERE?
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