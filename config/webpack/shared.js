// Note: You must restart bin/webpack-watcher for changes to take effect

const webpack = require('webpack')
const path = require('path')
const process = require('process')
const glob = require('glob')
const extname = require('path-complete-extname')

let distDir = process.env.WEBPACK_DIST_DIR

if (distDir === undefined) {
  distDir = 'packs'
}

const extensions = ['.js', '.coffee']
const extensionGlob = `*{${extensions.join(',')}}*`
const packPaths = glob.sync(path.join('app', 'javascript', 'packs', extensionGlob))

const config = {
  entry: packPaths.reduce(
    (map, entry) => {
      const basename = path.basename(entry, extname(entry))
      const localMap = map
      localMap[basename] = path.resolve(entry)
      return localMap
    }, {}
  ),

  output: { filename: '[name].js', path: path.resolve('public', distDir) },

  module: {
    rules: [
      { test: /\.coffee(\.erb)?$/, loader: 'coffee-loader' },
      {
        test: /\.jsx?(\.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            'stage-1',
            ['env', { modules: false }]
          ],
          plugins: ["transform-es2015-destructuring"]
        }
      },
      {
        test: /\.erb$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'rails-erb-loader',
        options: {
          runner: 'DISABLE_SPRING=1 bin/rails runner'
        }
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env))
  ],

  resolve: {
    extensions,
    modules: [
      path.resolve('app/javascript'),
      path.resolve('node_modules')
    ]
  },

  resolveLoader: {
    modules: [path.resolve('node_modules')]
  }
}

module.exports = {
  distDir,
  config
}
