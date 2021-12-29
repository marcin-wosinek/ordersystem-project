const webpack = require("webpack"),
  path = require("path"),
  { AngularWebpackPlugin } = require("@ngtools/webpack");

module.exports = {
  entry: {
    app: "./src/main.aot.ts",
  },
  mode: "production",
  output: {
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "@ngtools/webpack",
        exclude: [/node_modules/, path.resolve(__dirname, "../src/main.ts")],
      },
    ],
  },
  optimization: {
    splitChunks: { chunks: "all" },
  },
  plugins: [
    new AngularWebpackPlugin({
      tsconfig: "./tsconfig.aot.json",
    }),
  ],
};
