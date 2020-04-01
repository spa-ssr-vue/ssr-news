const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  article: { type: mongoose.SchemaTypes.ObjectId, ref: 'Article' },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  content: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Comment', schema, 'comments')