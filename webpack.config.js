const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');
const {merge} = require('webpack-merge');
const {
  NODE_ENV = 'development',
} = process.env;



let defaultConfig = {


  watch: NODE_ENV === 'development',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js', ".css"],
  },
  

    
    
  
}


const serverConfig =merge(defaultConfig,{
  externals: [nodeExternals()],
  entry:  "./Server/index.ts",
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
  plugins:[  new WebpackShellPluginNext({
    onBuildEnd: ['npm run run:dev']
  })],
  //…
})

const clientConfig = merge(defaultConfig, {
  target: 'web', // <=== can be omitted as default is 'web'
  
  entry:  "./Client/index.ts",
  
  plugins:[new HtmlWebpackPlugin({
    filename: 'client.index.html',
    template: "./Client/public/index.html",
   
  })],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js',
  },
  //…
})

module.exports = [clientConfig,serverConfig];


// module.exports = {

//   watch: NODE_ENV === 'development',
//   target: "node",
//   mode: "development",
//   entry: {
//     // demo: "./Demo/src/index.ts",
//     game: "./Game/src/index.ts",
//     client: "./Client/index.ts",
//     server: "./Server/index.ts"

//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       },

//       { test: /\.css$/, use: ["style-loader", "css-loader"], }
//     ]
//   },

//   plugins: [
 
//     new HtmlWebpackPlugin({
//       filename: 'client.index.html',
//       template: "./Client/public/index.html",
//       chunks: ['client']
//     }),
//     new HtmlWebpackPlugin({
//       cache: false,
//       filename: 'game.index.html',
//       template: "./Game/public/index.html",
//       chunks: ['game']
//     }),
//     new WebpackShellPluginNext({
//       onBuildEnd: ['npm run run:dev']
//     })

//   ],
//   externals: [nodeExternals()],

//   devServer: {
//     static: {
//       directory: path.join(__dirname, './Game/public'),
//     },
//     port: 8080,
//     compress: true,
//     open: ["/game.index.html"], 
//   },

//   resolve: {
//     extensions: ['.tsx', '.ts', '.js', ".css"],
//   },
  
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, './Dist'),
//   },
// };