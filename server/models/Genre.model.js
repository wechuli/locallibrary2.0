const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({});

module.exports = mongoose.model("Genre", GenreSchema);
