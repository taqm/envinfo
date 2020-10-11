/* eslint-disable @typescript-eslint/no-var-requires  */

const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    entry: {
      content: resolve('src/content.tsx'),
      options: resolve('src/options.tsx'),
    },
    output: {
      filename: '[name].js',
      path: resolve('dist'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'options.html',
        template: resolve('src/options.html'),
        chunks: ['options'],
      }),
    ],
    devServer: {
      contentBase: resolve('static'),
      open: true,
      openPage: 'options.html',
    },
  };
};
