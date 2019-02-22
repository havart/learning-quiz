const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('../config/db');
const app = express();
const port = 8000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

app.use(bodyParser.json());

MongoClient.connect(db.url, (err, database) => {
  // eslint-disable-next-line
  if (err) return console.log(err)
  require('./routes')(app, database);
  app.listen(port, () => {
    // eslint-disable-next-line
    console.log('We are live on ' + port)
  });
});
