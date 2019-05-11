const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 50
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 50
  },
  date_of_birth: Date,
  date_of_death: Date,
  bio: {
    type: String,
    maxlength: 500,
    required: true
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "book"
    }
  ]
});

module.exports = mongoose.model("author", AuthorSchema);
