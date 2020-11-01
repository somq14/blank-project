/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge")

const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    filename: "static/js/[name].js",
  },
  devServer: {
    port: 3000,
    hotOnly: true,
    historyApiFallback: true,
  },
})
