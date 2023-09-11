const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    index: './src/index.ts',
    designer: './src/designer.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new ProgressBarPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
    '@music163/tango-boot': 'TangoBoot',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '', // relative to HTML page (same directory)
    library: 'TangoAntd',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
