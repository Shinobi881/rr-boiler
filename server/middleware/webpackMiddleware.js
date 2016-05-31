const webpack = require('webpack');
const config = require('./../../webpack.config.js');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);

const webpackMiddleware = (server) => {
  server.use(devMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      progress: true
    },
    historyApiFallback: true
  }));

  server.use(hotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
};

module.exports = webpackMiddleware;