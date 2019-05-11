const express = require("express");
const {
  schemas,
  validateBody,
  validateParams
} = require("../configuration/validationHelper");
const {
  createAuthor,
  deleteAuthor,
  editAuthor,
  getAllAuthors,
  getAuthor
} = require("../controllers/authorController");

const router = express.Router();

//create a new author - authenticated
router.post("/create", validateBody(schemas.authorCreateSchema), createAuthor);

//delete an author  - authenticated
router.delete(
  "/delete/:authorId",
  validateParams(schemas.idSchema, "authorId"),
  deleteAuthor
);

//get a single author   -unauthenticated
router.get(
  "/single/:authorId",
  validateParams(schemas.idSchema, "authorId"),
  getAuthor
);

//get all authors - unauthenticated
router.get("/all", getAllAuthors);

//edit an author
router.patch(
  "/edit/:authorId",
  validateBody(schemas.authorEditSchema),
  validateParams(schemas.idSchema, "authorId"),
  editAuthor
);

module.exports = router;
