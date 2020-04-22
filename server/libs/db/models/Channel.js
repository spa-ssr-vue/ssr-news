const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  parentChannel: { type: mongoose.SchemaTypes.ObjectId, ref: "Channel" },
  name: { type: String },
  alias: { type: String },
  path: { type: String },
  sort: { type: Number },
});

module.exports = mongoose.model("Channel", schema, "channels");
