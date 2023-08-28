const path = require('path');
const prodConfig = require('./webpack.config');

module.exports = {
  ...prodConfig,
  devServer: {
    static: path.resolve(__dirname, './dist'),
    port: 9002,
  },
};
