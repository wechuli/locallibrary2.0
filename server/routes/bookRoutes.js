const express = require("express");
const bookControllers = require("../controllers/bookControllers");

const router = express.Router();

router.get("/allbooks", bookControllers); //get all books in the library
router.get("/book/:bookId", bookControllers); //get a particular book in the library
router.get("/bookinstances/:bookId", bookControllers); //get all instances of a book
router.get("/allauthors", bookControllers); //get all authors in the library
router.get("/author/:authorId", bookControllers); //get a single author
router.get('/book/reviews/:bookId',bookControllers); //get all reviews of a particular book, unauthenticated users can get book reviews too
router.post('/book/review/:bookId',bookControllers); //review a book, only logged in users can review a book

module.exports = router;
