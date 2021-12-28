const path = require("path");

module.exports = {
  devtool: "source-map",
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
