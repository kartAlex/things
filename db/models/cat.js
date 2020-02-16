const mongoose = require('mongoose');

const catScheme = new mongoose.Schema({
    name: String,
    color: String,
    age: String,
    gender: String,
});

catScheme.methods.speak = function () {
    return this.name ? 'Meow name is ' + this.name : 'I don`t have a name';
};

module.exports = mongoose.model('Cat', catScheme);