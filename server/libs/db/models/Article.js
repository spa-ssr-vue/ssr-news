const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Tag" }],
    channel: { type: mongoose.SchemaTypes.ObjectId, ref: "Channel" },
    author: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
    title: { type: String },
    content: { type: String },
    introduce: { type: String },
    covers: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", schema, "articles");
