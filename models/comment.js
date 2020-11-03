const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = Schema({
  park: String,
  commentTitle: { type: String, unique: true, required: true },
  timeOfYear: String,
  description: String,

})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;