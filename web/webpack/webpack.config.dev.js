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
      query: {
        babelrc: false,
        presets: ['stage-0', 'es2015', 'react'],
        plugins: [
          'transform-decorators-legacy',
          'transform-class-properties',
        ],
      },
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: require.resolve('cbor'),
      loader: 'null-loader',
    }],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
        BACKEND_URL: JSON.stringify('http://localhost:4000'),
      },
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
  },
};
