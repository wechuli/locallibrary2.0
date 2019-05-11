const express = require("express");
const {
  createAuthor,
  deleteAuthor,
  editAuthor,
  getAllAuthors,
  getAuthor
} = require("../controllers/authorController");

const router = express.Router();

//create a new author - authenticated
router.post("/create", createAuthor);

//delete an author  - authenticated
router.delete("/delete/:authorId", deleteAuthor);

//get a single author   -unauthenticated
router.get("/single/:authorId", getAuthor);

//get all authors - unauthenticated
router.get("/all", getAllAuthors);

//edit an author
router.patch("/edit/:authorId", editAuthor);

module.exports = router;
