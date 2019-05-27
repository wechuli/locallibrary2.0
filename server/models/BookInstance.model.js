const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "book"
  },
  imprint: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["borrowed", "available", "booked", "reserved"],
    default: "available",
    required: true
  },
  due_back: {
    type: Date,
    required: false
  },
  borrowedby: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: false
  }
});

module.exports = mongoose.model("bookinstance", BookInstanceSchema);
