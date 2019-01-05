const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: "book",
    required: true
  },
  imprint: String,
  status: {
    type: String,
    enum: ["available", "borrowed", "reserved"],
    required: true
  },
  borrowed_by: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  due_back: Date
});

module.exports = mongoose.model("bookinstance", bookInstanceSchema);
