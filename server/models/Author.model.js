const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  date_of_birth: Date,
  date_of_death: Date,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "book"
    }
  ]
});

module.exports = mongoose.model("author", authorSchema);
