const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  phone: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    maxlength: 100
  },
  password: {
    type: String,
    required: true
  },
  booksborrowed: [
    {
      type: Schema.Types.ObjectId,
      ref: "Bookinstance",
      required: false
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
