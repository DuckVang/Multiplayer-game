const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
  mode: "development",
  entry: './Demo/src/index.ts',
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
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './Demo/public/index.html'
    }),

  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".css"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './Demo/Dist'),
  },
};