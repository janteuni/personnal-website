var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {

  entry   : './index.js',
  output : {
    path: path.join(__dirname, './dist'),
    filename : 'bundle.js'
  },

  module : {
    loaders : [

      // load js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'babel?stage=0'
        ]
      },

      // load scss
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass'),
        exclude: /node_modules/
      },

      // load fonts
      {
        test: /\.(woff|eot|svg|ttf|otf)$/,
        loader: 'url?limit=100000'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css'),

    // optimizations
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
  ]
};
