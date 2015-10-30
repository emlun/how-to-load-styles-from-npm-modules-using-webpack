'use strict';

var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  context: SRC_DIR,

  entry: {
    app: './js/main.js',
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },

  resolve: {
    root: SRC_DIR,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jshint',
        exclude: /node_modules|bower_components|lib/,
      },
    ],
  },
};
