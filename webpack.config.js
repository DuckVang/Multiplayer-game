const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
  
  watch: true,
  mode: "development",
  entry: {
    demo: "./Demo/src/index.ts",
    game: "./Game/src/index.ts"

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
    //   title: 'Custom template',
    //   template: "./Demo/public/index.html"
    // }),
    new HtmlWebpackPlugin({
      filename: 'demo.index.html',
      template: "./Demo/public/index.html",
      chunks: ['demo']
    }),
    new HtmlWebpackPlugin({
      cache: false,
      filename: 'game.index.html',
      template: "./Game/public/index.html",
      chunks: ['game']
    })

  ],

  devServer: {
    static: {
      directory: path.join(__dirname, './Game/public'),
    },
    port: 8080,
    compress: true,
    open: ["/game.index.html"], // Here
    
    


  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".css"],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './Dist'),
  },
};