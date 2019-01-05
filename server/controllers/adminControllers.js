const User = require("../models/User.model");
const Author = require("../models/Author.model");
const Book = require("../models/Book.model");

module.exports = {
  getAllUsers: async (req, res) => {
    res.status(200).json({ message: "All users" });
  },
  createBook: async (req, res) => {
    res.status(200).json({ message: "Create a book" });
  },
  createInstance: async (req, res) => {
    res.status(200).json({ message: "Create book instance" });
  },
  createAuthor: async (req, res) => {
    res.status(200).json({ message: "Create an author" });
  },
  editBookPut: async (req, res) => {
    res.status(200).json({ message: "Edit the whole book" });
  },
  editBookPatch: async (req, res) => {
    res.status(200).json({ message: "Edit a part of a book" });
  },
  editAuthorPut: async (req, res) => {
    res.status(200).json({ message: "Edit the whole author" });
  },
  editAuthorPatch: async (req, res) => {
    res.status(200).json({ message: "edit part of the author" });
  },
  lendBook: async (req, res) => {
    res.status(200).json({ message: "Lend a book" });
  },
  returnBook: async (req, res) => {
    res.status(200).json({ message: "Return a book" });
  },
  addGenre: async (req, res) => {
    res.status(200).json({ message: "Add a book genre" });
  }
};
