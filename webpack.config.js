const postcssPresetEnv = require("postcss-preset-env");
const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
  entry: [path.resolve("./src/index.js")],
  output: {
    path: path.resolve("./build-ext/"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve("./src/"),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv(), autoprefixer()]
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
        },
        include: path.resolve("./src/")
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};
