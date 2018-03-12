const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const CSS_FILENAME_OUTPUT_PATTERN = `[name].min.css`

module.exports = [{
  name: 'css',
  entry: {
    'material-kit': path.resolve('./material-kit.scss'),
    'button': path.resolve('./components/button/button.scss'),
    'card': path.resolve('./components/card/card.scss'),
    'checkbox': path.resolve('./components/checkbox/checkbox.scss'),
    'chips': path.resolve('./components/chips/chips.scss'),
    'dialog': path.resolve('./components/dialog/dialog.scss'),
    'drawer': path.resolve('./components/drawer/drawer.scss'),
    'elevation': path.resolve('./components/elevation/elevation.scss'),
    'fab': path.resolve('./components/fab/fab.scss'),
    'floating-label': path.resolve('./components/floating-label/floating-label.scss'),
    'form-field': path.resolve('./components/form-field/form-field.scss'),
    'grid-list': path.resolve('./components/grid-list/grid-list.scss'),
    'icon-box': path.resolve('./components/icon-box/icon-box.scss'),
    'icon-toggle': path.resolve('./components/icon-toggle/icon-toggle.scss'),
    'layout-grid': path.resolve('./components/layout-grid/layout-grid.scss'),
    'line-ripple': path.resolve('./components/line-ripple/line-ripple.scss'),
    'linear-progress': path.resolve('./components/linear-progress/linear-progress.scss'),
    'list': path.resolve('./components/list/list.scss'),
    'menu': path.resolve('./components/menu/menu.scss'),
    'radio': path.resolve('./components/radio/radio.scss'),
    'reset': path.resolve('./components/reset/reset.scss'),
    'ripple': path.resolve('./components/ripple/ripple.scss'),
    'section': path.resolve('./components/section/section.scss'),
    'select': path.resolve('./components/select/select.scss'),
    'slider': path.resolve('./components/slider/slider.scss'),
    'snackbar': path.resolve('./components/snackbar/snackbar.scss'),
    'switch': path.resolve('./components/switch/switch.scss'),
    'tabs': path.resolve('./components/tabs/tabs.scss'),
    'textfield': path.resolve('./components/textfield/text-field.scss'),
    'theme': path.resolve('./components/theme/theme.scss'),
    'toolbar': path.resolve('./components/toolbar/toolbar.scss'),
    'toolbar-nav': path.resolve('./components/toolbar-nav/toolbar-nav.scss'),
    'top-app-bar': path.resolve('./components/top-app-bar/top-app-bar.scss'),
    'typography': path.resolve('./components/typography/typography.scss'),
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
