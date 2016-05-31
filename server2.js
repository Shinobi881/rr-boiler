const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
const publicPath = path.resolve(__dirname, 'dist');

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT : 3001;

const jobsData = require(path.join(__dirname, 'data.json'));

const proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

const app = express();

app.use(express.static(publicPath));

// If you only want this for development, you would of course
// put it in the "if" block below

if (!isProduction) {
  const bundle = require('./server/middleware/webpack.js')
  bundle()
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    })
  })
};

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

app.get('/jobs' ,(req, res) => {
  // axios.get('http://localhost:3000/jobs')
  //   .then((data) => {
  //     console.log(data)
  //     res.json(data);
  //   });
  res.send(jobsData);
});

app.listen(port, function () {
  console.log('Server running on port ' + port)
});