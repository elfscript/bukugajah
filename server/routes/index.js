const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

router.use(cors());

var db;

// MongoDB Connector
MongoClient.connect('mongodb://localhost/bukugajahdb', (err, dbConnection) => {
  if (err) {
    console.log('error!');
  } else {
    db = dbConnection;
  }
});

router.get('/notes', (req, res) => {
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

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/note/', (req, res) => {
  const newNoteData = req.body;
  var newId = 0;

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

router.put('/note/', (req, res) => {
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

router.delete('/note/', (req, res) => {
  const deletedNoteDataId = req.body.id;
  db.collection('notes')
    .remove({ id: deletedNoteDataId }, (err, result) => {
      if (err) {
        console.log('error ', err);
      } else {
        res.json(result);
      }
    });
});

module.exports = router;
