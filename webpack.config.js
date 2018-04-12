const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const CSS_FILENAME_OUTPUT_PATTERN = `[name].min.css`

module.exports = [{
  name: 'css',
  entry: {
    'material-kit': path.resolve('./material-kit.scss'),
    'drawer': path.resolve('./components/drawer/drawer.scss'),
    'elevation': path.resolve('./components/elevation/elevation.scss'),
    'icon-box': path.resolve('./components/icon-box/icon-box.scss'),
    'reset': path.resolve('./components/reset/reset.scss'),
    'section': path.resolve('./components/section/section.scss'),
    'theme': path.resolve('./components/theme/theme.scss'),
    'toolbar': path.resolve('./components/toolbar/toolbar.scss'),
    'toolbar-nav': path.resolve('./components/toolbar-nav/toolbar-nav.scss'),
    'utilities': path.resolve('./components/utilities/utilities.scss')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: `/dist/`,
    filename: CSS_FILENAME_OUTPUT_PATTERN
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
    new ExtractTextPlugin(CSS_FILENAME_OUTPUT_PATTERN)
  ]
}]
