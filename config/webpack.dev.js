const path = require("path");
const {merge} = require("webpack-merge")
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader",],
      },
    ]
},
  plugins: [new MiniCssExtractPlugin()],
  cache: false
});
