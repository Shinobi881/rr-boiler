const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr',
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'

  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/},
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ],
    preLoaders: [
      { test: /\jsx?$/, loader: 'eslint-loader', exclude: /(node_modules|server)/ }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer({ browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3', 'Firefox >= 20'], flexbox: 'no-2009' })
    ];
  }
  
}