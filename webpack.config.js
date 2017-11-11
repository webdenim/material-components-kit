const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = [{
  name: 'js',
  entry: './_scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/scripts'),
    publicPath: '/assets/scripts/',
    filename: 'app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}, {
  name: 'css',
  entry: './_sass/docsite.scss',
  output: {
    path: path.resolve(__dirname, 'assets/styles'),
    publicPath: '/assets/styles/',
    filename: 'app.css'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
              sourceMap: true
            }
          }
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}]
