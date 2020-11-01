const mongoose = require('mongoose')
const Schema = mongoose.Schema

const parksSchema = Schema({
  parkname: { type: String, unique: true, required: true },
  url: String,
  description: String,
  image: String

})

const Parks = mongoose.model('Parks', parksSchema);

module.exports = Parks;