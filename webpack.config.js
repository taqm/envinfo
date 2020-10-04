const { resolve } = require('path');
module.exports = (env) => {
  return {
    entry: {
      option: resolve('src/option.js'),
    },
    output: {
      filename: '[name].js',
      path: resolve('dist'),
    },
  };
};
