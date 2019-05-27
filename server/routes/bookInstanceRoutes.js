const express = require("express");
const {
  getAllBookInstances,
  addBookInstanceToBook,
  getSingleBookInstance,
  deleteBookInstance,
  borrowBook,
  approveBookInstanceBorrow,
  getAllBorrowRequests
} = require("../controllers/bookInstanceController");

const router = express.Router();

// get all instances in the library
router.get("/all", getAllBookInstances);

// add book instances to a particular book
router.post("/add/:bookId", addBookInstanceToBook);

// get a specific book instance
router.get("/single/:bookInstance", getSingleBookInstance);

// delete a book instance for a book

router.delete("/delete/:bookInstance", deleteBookInstance);

// allow a user to book a book to borrow - the user does not choose a book Instance, they choose a book, the system should randomly choose a book instance to assign to the borrower
router.post("/borrow/:bookId", borrowBook);

// librarians - approve a user's request to borrow a book
router.post("/approve/:bookInstance", approveBookInstanceBorrow);

//get all unapproved request to borrow a book
router.get("/borrowrequests", getAllBorrowRequests);

module.exports = router;
