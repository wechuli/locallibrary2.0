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
      ref: "Author"
    }
  ],
  summary: {
    type: String,
    maxlength: 500,
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
      ref: "Genre"
    }
  ],
  instances: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Bookinstance"
    }
  ]
});

module.exports = mongoose.model("Book", BookSchema);
