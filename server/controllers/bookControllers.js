const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const Review = require("../models/Review.model");

module.exports = {
  allBooks: async (req, res) => {
    res.status(200).json({ message: "All Books" });
  },
  singleBook: async (req, res) => {
    res.status(200).json({ message: "Get a single book" });
  },
  allBookInstances: async (req, res) => {
    res.status(200).json({ message: "Get all instances of a book" });
  },
  allAuthors: async (req, res) => {
    res.status(200).json({ message: "Get all authors" });
  },
  singleAuthor: async (req, res) => {
    res.status(200).json({ message: "Get a single author" });
  },
  allBookReviews: async (req, res) => {
    res.status(200).json({ message: "Get all reviews of a book" });
  },
  reviewBook: async (req, res) => {
    res.status(200).json({ message: "Review a single book" });
  }
};
