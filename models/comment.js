const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = Schema({
  parkName: { type: String, unique: true, required: true },
  timeOfYear: String,
  description: String,

})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;