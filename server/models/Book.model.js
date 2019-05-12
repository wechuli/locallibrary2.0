const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "author"
    }
  ],
  summary: {
    type: String,
    maxlength: 2000,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  genre: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "genre"
    }
  ],
  instances: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "bookinstance"
    }
  ]
});

module.exports = mongoose.model("book", BookSchema);
