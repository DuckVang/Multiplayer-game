const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {

  watch: NODE_ENV === 'development',
  target: "node",
  mode: "development",
  entry: {
    // demo: "./Demo/src/index.ts",
    game: "./Game/src/index.ts",
    client: "./Client/index.ts",
    server: "./Server/index.ts"

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      { test: /\.css$/, use: ["style-loader", "css-loader"], }
    ]
  },

  plugins: [
 
    // new HtmlWebpackPlugin({
    //   filename: 'demo.index.html',
    //   template: "./Demo/public/index.html",
    //   chunks: ['demo']
    // }),
    new HtmlWebpackPlugin({
      cache: false,
      filename: 'game.index.html',
      template: "./Game/public/index.html",
      chunks: ['game']
    }),
    new WebpackShellPluginNext({
      onBuildEnd: ['npm run run:dev']
    })

  ],
  externals: [nodeExternals()],

  devServer: {
    static: {
      directory: path.join(__dirname, './Game/public'),
    },
    port: 8080,
    compress: true,
    open: ["/game.index.html"], 
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".css"],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './Dist'),
  },
};