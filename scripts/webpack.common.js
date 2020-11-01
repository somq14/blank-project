/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

const rootDir = path.resolve(__dirname, "..")

module.exports = {
  context: rootDir,
  entry: "./src/index.ts",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      src: path.resolve(rootDir, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
        },
      },
    ],
  },
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      safe: path.resolve(rootDir, "configs", ".env.example"),
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public", "index.html"),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
}
