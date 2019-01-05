const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "author",
      required: true
    }
  ],
  description: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "genre"
    }
  ],
  instances: [
    {
      type: Schema.Types.ObjectId,
      ref: "bookinstance"
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review"
    }
  ]
});

module.exports = mongoose.model("book", bookSchema);
