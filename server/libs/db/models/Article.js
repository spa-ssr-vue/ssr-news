const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  author: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  title: { type: String },
  content: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', schema, 'articles')