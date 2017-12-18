---
title: Installation
description: Install Material Kit and required build tools.
layout: docs
section: getting-started
date: 2017-10-25
lastmod: 2017-11-06
---

## Install Material Kit via npm

Material Kit is available on [npm](https://npmjs.com/@material-kit/lib). Material Kit includes
MDC-Web as peer dependency so you don't need to install the parent library.

```bash
npm install --save @material-kit/lib
```

## Build tools (Webpack)

_Material Kit and MDC-Web use SCSS for styling so we need to compile `.scss` files into CSS.
We use [Webpack](https://webpack.js.org/) for that purpose because it has excellent features
and comes with rich plugin system. Also, we assume that you will use Webpack for bundling MDC-Web's
JavaScript. Although Material Kit doesn’t provide any JavaScript, it would be reasonable to
describe the bundling process._

### JavaScript bundle (MDC-Web)

Install Webpack

```bash
npm install --save-dev webpack
```

We need to install [Babel](https://babeljs.io) which helps transpile edge JavaScript into
specification that can run in old browsers.

```bash
npm install --save-dev babel-core babel-loader babel-preset-es2015
```

Then you need to add [Babel configuration](https://babeljs.io/docs/usage/babelrc/). The simplest way is to add it to `package.json`:

```json
{
  "name": "project-name",
  "version": "0.1.0",
  "description": "Project description",
  "babel": {
    "presets": [
      [
        "es2015",
        {
          "modules": false
        }
      ]
    ]
  }
}
```

Create [Webpack configuration file](https://webpack.js.org/configuration/) in the root of your
project. Here we will describe how Webpack should bundle our files.

```js
const path = require('path')
const webpack = require('webpack')

module.exports = [{
  name: 'js',
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    publicPath: '/dist/scripts/',
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
}]
```

In `entry` object we specify the file where our application is written. In our case it's a
`./src/scripts/index.js`.

In `output` object we specify how webpack emits results. `path` is the target directory for all
output files. In our case it's a (`./dist/scripts/`). Webpack API requires to use absolute paths
for this so we need to use
[path.resolve()](https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths).
`filename` is the desired name of output file.

In `module` object we need to specify
[rules](https://webpack.js.org/configuration/module/#module-rules) for transpiling our JavaScript
through Babel.

Webpack can minify the output code with help of [plugins](https://webpack.js.org/concepts/plugins/).
For JavaScript this can be done with `uglifyjs-webpack-plugin`. It comes with Webpack 3
automatically so you don't need to install it.

### Compile SCSS to CSS (Material Kit)

In Webpack the processing of CSS files can be done with help of specific
[loaders](https://webpack.js.org/concepts/#loaders). SCSS additionally will require
[node-sass library](https://www.npmjs.com/package/node-sass) so install it along with
`css-loader` and `sass-loader`:

```bash
npm install --save-dev css-loader sass-loader node-sass
```

Also you will need to extract CSS from bundle into a separate file. This can be done with Webpack
plugin `extract-text-webpack-plugin` so install it too:

```bash
npm install --save-dev extract-text-webpack-plugin
```

```js
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [{
  name: 'css',
  entry: './src/styles/main.scss',
  output: {
    path: path.resolve(__dirname, 'dist/styles'),
    publicPath: '/dist/styles/',
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
```

<hr class="mk-my--md">

Below is the final Webpack config file. It also includes the serving HTML template file with
`webpack-dev-server`.

You can view the code on [GitHub](https://github.com/webdenimsamples/material-kit-vanillajs).

```js
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  name: 'js',
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    publicPath: '/dist/scripts/',
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}, {
  name: 'css',
  entry: './src/styles/main.scss',
  output: {
    path: path.resolve(__dirname, 'dist/styles'),
    publicPath: '/dist/styles/',
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
```
