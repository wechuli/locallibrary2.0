const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const Genre = require("../models/Genre.model");

module.exports = {
  //create a single book in the library
  async createBook(req, res) {
    let { title, author, summary, isbn, genres } = req.body;

    try {
      //check if the book exists in the library, if so, cancel request

      const existingBook = await Book.findOne({ title, isbn });
      if (existingBook) {
        return res.status(409).json({ error: "The book already exists" });
      }

      //try to find the author specified in the body
      const existingAuthor = await Author.findById(author);
      if (!existingAuthor) {
        return res.status(404).json({ error: "Invalid Author Id" });
      }
      // the genres object contains an array of genres in string format for the book, we want to get the specific id for each of these genres,
      //if a genre appears in this array and is not found on our genres collection,create it, after we get the id back, store this in a field clled genres in the Book collection, this will enable us to search for a book with specific genre
      let genreObjects = genres.map(async genre => {
        let returnedObj = await Genre.findOne({ name: genre.toLowerCase() });
        if (returnedObj) {
          return returnedObj;
        } else {
          const newGenre = new Genre({ name: genre.toLowerCase() });
          await newGenre.save();
          return newGenre;
        }
  
      });
      // const newBook;
      await Promise.all(genreObjects).then(completed => {
        genreObjects = completed;
      });
      // console.log(genreObjects);
      const newBook = new Book({
        title,
        author,
        summary,
        isbn,
        genre: genreObjects
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
    const { bookId } = req.params;
    try {
      const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
        new: true
      });
      if (!book) {
        return res.status(404).json({ message: "Book Unavailable" });
      }
      res.status(200).json({ message: "Book succesffully modiefied", book });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete a single book
  async deleteBook(req, res) {
    const { bookId } = req.params;
    try {
      const deletedBook = await Book.findOneAndDelete({ _id: bookId });
      if (!deletedBook) {
        return res.status(404).json({ error: "Book unaivalable" });
      }

      //Validation to implement this logic

      //1. You cannot delete a book that has instances in the library, you first need to delete all the book's instance
      //2. You need to delete this object under the Author's book collection so that a query to populate will not result in an empty value
      res
        .status(200)
        .json({ message: "Book Successfully removed", deleteBook });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all books
  async getAllBooks(req, res) {
    try {
      const allBooks = await Book.find({})
        .populate("author")
        .exec();
      res.status(200).json(allBooks);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get details of a single book
  async getSingleBook(req, res) {
    const { bookId } = req.body;
    try {
      const book = await Book.findById(bookId)
        .populate("author")
        .exec();
      if (!book) {
        return res.status(404).json({ error: "Book unavailable" });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //add a genre to a book
  async addGenreToBook(req, res) {
    const { bookId } = req.params;
    let { name } = req.body;
    name = name.toLowerCase();

    try {
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(201).json({ message: "New genre added to book" });
      }

      //Try to find if this genre already exists in our Genre collection
      let existingGenre = await Genre.findOne({ name });
      if (!existingGenre) {
        existingGenre = new Genre({ name });
        await existingGenre.save();
      }

      //add the genre to the book
      book.genre.push(existingGenre);
      await book.save();

      res.status(201).json({
        message: "Genre successfully added to the book",
        existingGenre
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
