//webpack.config.js
const path = require('path');

module.exports = {
  
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};