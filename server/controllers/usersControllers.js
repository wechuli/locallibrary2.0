const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const Review = require("../models/Review.model");
const User = require("../models/User.model");

module.exports = {
  getUser: async (req, res) => {

    
    res.status(200).json({ message: "get a single user who is loged in" });
  },
  borrowBook: async (req, res) => {
    res.status(200).json({ message: "Borrow a book" });
  }
};
