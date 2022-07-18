const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./public/js/app.js",
  output: {
    filename: "app_compiler.js",
    path: path.join(__dirname, "./public/dist"),
  },
  module:{
    rules: [
      {
        //Js Files
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options:{
            presets:["@babel/preset-env"]
          }
        }
      }
    ]
  }
}