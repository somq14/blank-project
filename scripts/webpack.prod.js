/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge")

const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "static/js/[name].[contenthash].js",
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
})
