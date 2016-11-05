const express = require('express');
const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectID;

const app = express();
const path = require('path');

let db;

app.use(express.static('static'));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/app', express.static(path.join(__dirname, '../index.html')));

app.get('/api/notes', (req, res) => {
  db.collection('notes')
    .find()
    .sort({ title: 1 })
    .toArray((err, docs) => {
      if (err) {
        console.log('error ', err)
      } else {
        res.json(docs)
      }
    });
});

// MongoDB Connector
MongoClient.connect('mongodb://localhost/bukugajahdb', (err, dbConnection) => {
  if (err) {
    console.log('error!')
  } else {
    db = dbConnection
  }
});

const server = app.listen(5000, () => {
  const port = server.address().port
  console.log('Contact app run on ', port)
});

module.exports = server;
