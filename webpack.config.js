/* eslint-env node */

const path = require('path')

module.exports = [{
  context: path.join(__dirname, 'src'),
  entry: {
    options: ['./js/injectTapEvent', './js/options.entry.js'],
    content: './js/content.entry.js',
    background: './js/background.entry.js'
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use:['babel-loader']
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
       ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  }
}]
