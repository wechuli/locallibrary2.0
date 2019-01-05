const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "book",
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date_created: Date,
  date_edited: Date
});

module.exports = mongoose.model("review", reviewSchema);
