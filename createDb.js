// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const async = require('async');
const mongoose = require('mongoose');
// const Cat = require('./db/models/cat');

// Connection URL
const url = 'mongodb://localhost:27017/things_db';

// Database Name
// const dbName = 'myproject';

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//         {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// };

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
    // if (err) throw err;

    // assert.equal(null, err);
    // console.log("Connected successfully to server");

    // const db = client.db(dbName);
    //
    // insertDocuments(db, function() {
    //     client.close();
    // });
// });

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB connected!');
});

// const cats = [];
//
// function catCreate(name, color, age, gender, cb) {
//     const DATA = {
//         name,
//         color,
//         age,
//         gender,
//     };
//     const CAT = new Cat(DATA);
//
//     CAT.save(function (err) {
//         if (err) {
//             cb(err, null);
//             return;
//         }
//
//         console.log('New Cat: ' + CAT);
//         cats.push(CAT);
//         cb(null, CAT);
//     });
// }
//
// function createCollection(cb) {
//     async.series([
//         function(callback) {
//             catCreate('Patrick', 'red', '3', 'male', callback);
//         },
//         function(callback) {
//             catCreate('Ben', 'red', '1', 'male', callback);
//         },
//         function(callback) {
//             catCreate('Isaac', 'black', '4', 'female', callback);
//         },
//         function(callback) {
//             catCreate('Bob', 'gray', '1', 'male', callback);
//         },
//         function(callback) {
//             catCreate('Jim', 'green', '1', 'male', callback);
//         },
//     ], cb);
// }
//
// async.series([
//         createCollection,
//     ],
//     function(err, results) {
//         if (err) {
//             console.log('FINAL ERR: '+err);
//         }
//         else {
//             console.log('BOOKInstances: ' + cats);
//         }
//         // All done, disconnect from database
//         mongoose.connection.close();
//     });
module.exports = db;