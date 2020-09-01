const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonPaths = require('../webpack/paths');

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].[hash].css`,
      path: commonPaths.outputPath,
      chunkFilename: `${commonPaths.cssFolder}/[name].[chunkhash].css`,
      publicPath: '/',
    }),
  ],
};
