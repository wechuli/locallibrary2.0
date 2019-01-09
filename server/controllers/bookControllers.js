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
    const { bookId } = req.params;
    try {
      const book = await Book.findById(bookId)
        .populate("author")
        .populate("category")
        .populate("instances")
        .populate("reviews")
        .exec();
      if (book) {
        res.status(200).json({ message: "Get a single book" });
      } else {
        res.status(404).json({ error: "Book not found" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  allBookInstances: async (req, res) => {
    //this is a useless route,I could just have gotten the instance from the individual book route
    const { bookId } = req.params;
    try {
      const instances = Book.findById(bookId)
        .select("title instances")
        .populate("instances")
        .exec();
      if (instances) {
        res.status(200).json({ instances });
      } else {
        res
          .status(404)
          .json({ error: "No instances found or Incorrect book Id" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  allAuthors: async (req, res) => {
    try {
      const allAuthors = Author.find({})
        .populate("books")
        .exec();
      res.status(200).json({ allAuthors });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  singleAuthor: async (req, res) => {
    const { authorId } = req.params;
    try {
      const author = await Author.findById(authorId)
        .populate({
          path: "books"
        })
        .exec();
      if (author) {
        res.status(200).json({ author });
      } else {
        res.status(404).json({ error: "Author not Found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  allBookReviews: async (req, res) => {
    //another useless route -looks like i like doing this
    const { bookId } = req.params;
    try {
      const book = Book.findById(bookId)
        .populate("reviews")
        .exec();
      if (book) {
        res.status(200).json({ book });
      } else {
        res.status(404).json({ error: "Invalid book Id" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  reviewBook: async (req, res) => {
    //we should have a user object from the request since only authenticated user will be allowed access to this route
    const { bookId } = req.params;
    try {
      const book = Book.findById(bookId);
      if (book) {
        const newReview = new Review(req.body);

        newReview.book = book;
        newReview.author = req.User;
        newReview.date_created = Date.now();
        await newReview.save();
        //add the review to the user object
        const user = await User.findById(req.User._id);
        user.reviews.push(newReview);
        await user.save();
        //add this review to the book object
        book.reviews.push(newReview);
        await book.save();
        res.status(201).json({ message: "Review Added", newReview });
      } else {
        res.status(404).json({ error: "Invalid bookId " });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //Check below last 09/01/2019-below code is wrong wrong wrong

  
  editReview: async (req, res) => {
     //we should have a user object from the request since only authenticated user will be allowed access to this route
     const { bookId } = req.params;
     try {
       const book = Book.findById(bookId);
       if (book) {
         const newReview = new Review(req.body);
 
         newReview.book = book;
         newReview.author = req.User;
         newReview.date_created = Date.now();
         await newReview.save();
         //add the review to the user object
         const user = await User.findById(req.User._id);
         user.reviews.push(newReview);
         await user.save();
         //add this review to the book object
         book.reviews.push(newReview);
         await book.save();
         res.status(201).json({ message: "Review Added", newReview });
       } else {
         res.status(404).json({ error: "Invalid bookId " });
       }
     } catch (error) {
       res.status(500).json(error);
     }
  },
  deleteReview = async (req,res)=>{
     //we should have a user object from the request since only authenticated user will be allowed access to this route
     const { bookId } = req.params;
     try {
       const book = Book.findById(bookId);
       if (book) {
         const newReview = new Review(req.body);
 
         newReview.book = book;
         newReview.author = req.User;
         newReview.date_created = Date.now();
         await newReview.save();
         //add the review to the user object
         const user = await User.findById(req.User._id);
         user.reviews.push(newReview);
         await user.save();
         //add this review to the book object
         book.reviews.push(newReview);
         await book.save();
         res.status(201).json({ message: "Review Added", newReview });
       } else {
         res.status(404).json({ error: "Invalid bookId " });
       }
     } catch (error) {
       res.status(500).json(error);
     }
  }
};
