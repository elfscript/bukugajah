const express     = require('express');
const bodyParser  = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const cors        = require('cors');
// const objectId = require('mongodb').ObjectID;

const app   = express();
const path  = require('path');

let db;

app.use(express.static('static'));
app.use(cors());

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
        res.json(docs);
      }
    });
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/note/', (req, res) => {
  const newNoteData = req.body;
  let newId = 0;

  // Get Latest ID
  db.collection('notes').find()
    .sort({ id: -1 })
    .limit(1)
    .next((err, doc) => {
      if (err) {
        console.log('error ', err);
      } else {
        newId = doc.id;
        newNoteData.id = newId + 1;
        // Store newNoteData to DB
        db.collection('notes').insertOne(newNoteData, (errInsert, result) => {
          if (err) {
            console.log('error ', err);
          } else {
            const newId = result.insertedId;
            db.collection('notes').find({ _id: newId }).next((errInner, docInsert) => {
              if (errInner) {
                console.log('error ', errInner);
              } else {
                res.json(docInsert);
              }
            });
          }
        });
      }
    });
});

app.put('/api/note/', (req, res) => {
  const updatedNoteData = req.body;

  // Update updatedNoteData to DB
  db.collection('notes')
    .update({ id: updatedNoteData.id }, { $set: updatedNoteData }, (err) => {
      if (err) {
        console.log(err);
      } else {
        db.collection('notes')
          .find({ id: updatedNoteData.id })
          .next((errInner, doc) => {
            if (errInner) {
              console.log('error ', errInner);
            } else {
              res.json(doc);
            }
          })
      }
    })
});

app.delete('/api/note/', (req, res) => {
  const deletedNoteDataId = req.body.id;
  db.collection('notes')
    .remove({ id: deletedNoteDataId }, (err, result) => {
      if (err) {
        console.log('error ', err);
      } else {
        res.json(result);
      }
    })
})

// MongoDB Connector
MongoClient.connect('mongodb://localhost/bukugajahdb', (err, dbConnection) => {
  if (err) {
    console.log('error!');
  } else {
    db = dbConnection;
  }
});

const server = app.listen(5000, () => {
  const port = server.address().port;
  console.log('Bukugajah server running on ', port);
});

module.exports = server;
