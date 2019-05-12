const Book = require("../models/Book.model");
const Author = require("../models/Author.model");

module.exports = {
  //create a single book in the library
  async createBook(req, res) {
    let { title, author, summary, isbn } = req.body;

    try {
      //try to find the author specified in the body
      const existingAuthor = await Author.findById(author);
      if (!existingAuthor) {
        return res.status(404).json({ error: "Invalid Author Id" });
      }
      const newBook = new Book({
        title,
        author,
        summary,
        isbn
      });
      await newBook.save();
      existingAuthor.books.push(newBook);
      await existingAuthor.save();
      res.status(201).json({ message: "New Book created", newBook });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //edit a single book in the library
  async editBook(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete a single book
  async deleteBook(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all books
  async getAllBooks(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get details of a single book
  async getSingleBook(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
