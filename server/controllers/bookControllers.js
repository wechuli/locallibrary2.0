const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const Review = require("../models/Review.model");
const User = require("../models/User.model");

module.exports = {
  allBooks: async (req, res) => {
    try {
      const books = await Book.find({})
        .populate("author")
        .populate("category")
        .populate("instances")
        .populate("reviews")
        .exec();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
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
    try {
      const { authorId } = req.params;
      const author = await Author.findById(authorId)
        .populate({
          path: "books"
        })
        .exec();
      res.status(200).json({ author });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  allBookReviews: async (req, res) => {
    res.status(200).json({ message: "Get all reviews of a book" });
  },
  reviewBook: async (req, res) => {
    res.status(200).json({ message: "Review a single book" });
  }
};
