const path = require('path');
const prodConfig = require('./webpack.config');

module.exports = {
  ...prodConfig,
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 9002,
  },
};
