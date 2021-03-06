const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: "book",
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000
  },
  dateadded: {
    type: Date,
    default: Date.now,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
});

module.exports = mongoose.model("review", ReviewSchema);
