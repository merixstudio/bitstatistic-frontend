/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './web/public/index.html',
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
  entry: './app/web/index.jsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js(x)?$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader', // creates style nodes from JS strings
      }, {
        loader: 'css-loader', // translates CSS into CommonJS
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }],
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
  },
};
