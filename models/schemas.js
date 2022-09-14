const mongoose = require('mongoose');

let menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  menuURL: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});

let userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});

let menu = mongoose.model('menu', menuSchema, 'menu');
let users = mongoose.model('user', userSchema, 'user');

let mySchemas = {
  menu,
  users,
};

module.exports = mySchemas;
