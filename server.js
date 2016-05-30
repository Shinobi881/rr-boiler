const express = require('express');
const http = require('http');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const production = process.env.NODE_ENV = 'production';
const Data = path.join(__dirname, 'data.json');
const json = require(Data);

const port = process.env.port || 3001;  

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());




app.get('/jobs' ,(req, res) => {
  // axios.get('http://localhost:3000/jobs')
  //   .then((data) => {
  //     console.log(data)
  //     res.json(data);
  //   });
  res.send(json);
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});