const express = require('express');

const routes = require('./routes');

const app   = express();
const path  = require('path');

app.use(express.static('static'));

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/app', express.static(path.join(__dirname, '../index.html')));
app.use('/api', routes);

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log('Bukugajah server running on ', port);
});

module.exports = server;
