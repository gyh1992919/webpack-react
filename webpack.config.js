
const  ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
  entry: './app.js',
  output: {
    path:__dirname + '/build',
    filename: 'app.js'
  },
  module: {
     rules: [
       {
         test:/\.css$/,
          use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: 'css-loader'
         })
       },
       {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react']
        }
       }
     ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  plugins: [
     new ExtractTextPlugin('style.css'),
     new HtmlWebpackPlugin({
       title: 'My App',
       filename: __dirname + '/build/index.html',
       template: 'index.html',
     })
  ]


}

module.exports = config
