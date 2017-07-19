const express = require('express');

const routes = require('./routes');

const app   = express();
const path  = require('path');
const port= require('../src/actions/apis').PORT;

app.use(express.static('static'));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/app', express.static(path.join(__dirname, '../index.html')));
app.use('/api', routes);

const server = app.listen(PORT, () => {
  const port = server.address().port;
  console.log('Bukugajah server running on ', port);
});

module.exports = server;
