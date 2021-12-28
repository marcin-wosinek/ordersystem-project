const path = require("path");

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ["ts-loader", "angular2-template-loader"],
        exclude: [
          /node_modules/,
          path.resolve(__dirname, "../src/main.aot.ts"),
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../src"),
    },
    port: 9000,
    proxy: {
      "/api": "http://localhost:9001",
    },
  },
};
