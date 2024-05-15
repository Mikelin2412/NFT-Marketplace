const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = [
  "create_account",
  "connect_wallet",
  "home_page",
  "artist_page",
  "marketplace",
  "nft_page",
  "rankings",
];

const htmlWebpackPlugins = pages.map((page) => {
  return new HtmlWebpackPlugin({
    filename: `./pages/${page}/index.html`,
    chunks: [page],
    template: `./src/pages/${page}/index.html`,
  });
});

module.exports = {
  entry: {
    home_page: "./src/pages/home_page/script.js",
    create_account: "./src/pages/create_account/script.js",
    marketplace: "./src/pages/marketplace/script.js",
    nft_page: "./src/pages/nft_page/script.js",
    artist_page: "./src/pages/artist_page/script.js",
    connect_wallet: "./src/pages/connect_wallet/script.js",
    rankings: "./src/pages/rankings/script.js",
  },
  output: {
    filename: "pages/[name]/script.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: "pages/[name]/style.css",
    }),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "src/assets/icons"),
          path.resolve(__dirname, "src/assets/images"),
        ],
        type: "asset/resource",
        generator: {
          filename: "assets/[name].[hash][ext][query]",
        },
      },
    ],
  },
  devServer: {
    static: "./dist/pages",
    compress: true,
    port: 8000,
    open: ["home_page"],
  },
  stats: {
    errorDetails: true,
  },
};