const User = require("../models/User.model");
const Author = require("../models/Author.model");
const Book = require("../models/Book.model");
const Categories = require("../models/Categories.model");
const BookInstance = require("../models/BookInstance.models");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find({});
      res.status(200).json({ allUsers });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  createBook: async (req, res) => {
    try {
      const author = await Author.findById(req.body.author);

      if (author) {
        const newBook = new Book(req.body);
        newBook.author = author;
        await newBook.save();
        author.books.push(newBook);
        await author.save();
        res
          .status(201)
          .json({ message: "A new book has been created", newBook });
      } else {
        res
          .status(404)
          .json({ error: "Author not found, please create the author first" });
      }
    } catch (error) {}
  },
  createInstance: async (req, res) => {
    try {
      console.log(req.params);
      const { bookId } = req.params;
      const book = await Book.find(bookId);
      console.log(book);
      console.log("but not here");
      if (book !== null) {
        const newInstance = new BookInstance(req.body);
        newInstance.book = bookId;
        await newInstance.save();
        book.instances.push(newInstance);
        await book.save();
        res.status(200).json({ message: "Book Instance created", newInstance });
      } else {
        res.status(404).json({ message: "Invalid book Id" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to create a new book instance" });
    }
  },

  //Create a new author
  createAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      await newAuthor.save();
      res
        .status(201)
        .json({ message: "Author Successfully created", author: newAuthor });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  //Edit a book with put
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
