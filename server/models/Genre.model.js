const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("genre", GenreSchema);
