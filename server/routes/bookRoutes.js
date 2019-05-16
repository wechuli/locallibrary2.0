const express = require("express");
const {
  schemas,
  validateBody,
  validateParams
} = require("../configuration/validationHelper");

const {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  editBook,
  addGenreToBook
} = require("../controllers/bookController");

const router = express.Router();

//create a book
router.post("/create", validateBody(schemas.bookCreateSchema), createBook);

//edit a single book
router.patch(
  "/edit/:bookId",
  validateParams(schemas.idSchema, "bookId"),
  validateBody(schemas.bookEditSchema),
  editBook
);

//delete a book
router.delete(
  "/delete/:bookId",
  validateParams(schemas.idSchema, "bookId"),
  deleteBook
);

//get all books
router.get("/all", getAllBooks);

//get a single book
router.get(
  "/single/:bookId",
  validateParams(schemas.idSchema, "bookId"),
  getSingleBook
);

//add book genre
router.post(
  "/addgenre/:bookId",
  validateParams(schemas.idSchema, "bookId"),
  validateBody(schemas.genresSchema),
  addGenreToBook
);

module.exports = router;
