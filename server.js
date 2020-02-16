'use strict';

// const mongoose = require('mongoose');
// const dbUrl = 'mongodb://localhost:27017/things_db';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./createDb');
const path = require('path');

const PORT = 8080;
const HOST = 'localhost';
const BUILD_DIR = path.join(__dirname, '/frontend/build');

const app = express();

var jsonParser = bodyParser.json();

// Controllers
var catsController = require('./controllers/catController');

app.set('view engine', 'html');
app.set('views', BUILD_DIR);
app.use(express.static(BUILD_DIR));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
//
// var db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('connected!');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.get('/cats', catsController.catList);
app.post('/cats/create', catsController.catsCreate);

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);