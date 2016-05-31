const express = require('express');
const http = require('http');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
const webpackMiddleware = require('./server/middleware/webpackMiddleware.js')
const publicPath = path.join(__dirname, 'dist');
const app = express();
const production = process.env.NODE_ENV === 'production';
const jobsData = require(path.join(__dirname, 'data.json'));

const port = production ? process.env.PORT : 3001;  

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

if (!production) {
  webpackMiddleware(app);
}

app.get('/jobs' ,(req, res) => {
  // axios.get('http://localhost:3000/jobs')
  //   .then((data) => {
  //     console.log(data)
  //     res.json(data);
  //   });
  res.send(jobsData);
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});
