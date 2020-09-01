const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('../webpack/paths');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: commonPaths.entryPath,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
  },
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath,
    chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
    }),
  ],
};
