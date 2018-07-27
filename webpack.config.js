const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// assets.js
const Assets = require("./assets");

module.exports = {
  entry: {
    app: "./public/index.html"
  },
  output: {
    path: __dirname + "/public/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new CopyWebpackPlugin(
      Assets.JS.map(asset => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`),
          to: path.resolve(__dirname, "./public/vendor/js")
        };
      })
    ),
    new CopyWebpackPlugin(
      Assets.CSS.map(asset => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`),
          to: path.resolve(__dirname, "./public/vendor/css")
        };
      })
    )
  ]
};
