const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'dist'),
  entryPath: path.resolve(__dirname, '../', 'src/index.tsx'),
  templatePath: path.resolve(__dirname, '../', 'public/index.html'),
  cssFolder: 'public/css',
  jsFolder: 'public/js',
};
