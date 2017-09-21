const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const MongoClient = require('mongodb').MongoClient;

const router = express.Router();

router.use(cors());

var db;

// MongoDB Connector
MongoClient.connect('mongodb://localhost/notesdb', (err, dbConnection) => {
		if (err) {
		console.log('mongodb  connect error!');
		} else {
		db = dbConnection;
		}
		});


//=== router.get('/notes?s=', (req, res) => {
//=== the filtering operation is usually done in client side rather than in server side
router.get('/notes', (req, res) => {
		var s= req.query.s;
		var qryObj={};

		if(!s) qryObj={};
		else qryObj={$text: { $search: s }}; 
		console.log("search= "+ s + ", qryObj=" + JSON.stringify(qryObj));

		db.collection('notes')
		.find(qryObj)
		.sort({ title: 1 })
		.toArray((err, docs) => {
			if (err) {
			console.log('error on /api/notes', err)
			} else {
			res.json(docs);
			}
			});
		});
router.get('/note/:id', (req, res) => {
		db.collection('notes')
		.find({id:parseInt(req.params.id)})
		.next((err, doc) => {
			if (err) {
			console.log('error ', err)
			} else {
			res.json(doc);
			}
			});
		});



//===

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
