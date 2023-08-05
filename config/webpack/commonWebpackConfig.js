// The source code including full typescript support is available at: 
// https://github.com/shakacode/react_on_rails_demo_ssr_hmr/blob/master/config/webpack/commonWebpackConfig.js

// Common configuration applying to client and server configuration
const { webpackConfig: baseClientWebpackConfig, merge } = require('shakapacker');

const commonOptions = {
  resolve: {
    extensions: ['.css', '.ts', '.tsx'],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};


const experimentsConfig = require('./myConfigs/experiments');

// Copy the object using merge b/c the baseClientWebpackConfig and commonOptions are mutable globals
var commonWebpackConfig = () => merge({}, baseClientWebpackConfig, commonOptions, experimentsConfig);


//Typescript

const typescriptConfig = require('./myConfigs/typescript-webpack');

// Copy the object using merge b/c the baseClientWebpackConfig and commonOptions are mutable globals
//commonWebpackConfig = () => merge({}, commonWebpackConfig, commonOptions, typescriptConfig);


module.exports = commonWebpackConfig;
