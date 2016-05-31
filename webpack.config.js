const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000?reload=true',
    './src/entry.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'

  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}