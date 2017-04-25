/* eslint-env node */

const path = require('path')

module.exports = [{
  context: path.join(__dirname, 'src'),
  entry: {
    options: './js/options.entry.js',
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
      use:[{
        loader: 'babel-loader'
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}]
