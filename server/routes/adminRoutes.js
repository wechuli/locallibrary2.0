const express = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = express.Router();

router.get("/allusers", adminControllers.getAllUsers); //get all users
router.post("/createbook", adminControllers.createBook); //create abook

router.post("/createbookinstance", adminControllers.createInstance); //create book instance
router.post("/createauthor", adminControllers.createAuthor); //create an author
router
  .route("/editbook") //edit an author
  .put(adminControllers.editBookPut)
  .patch(adminControllers.editBookPatch);
router
  .route("/editauthor") //edit an author
  .put(adminControllers.editAuthorPut)
  .patch(adminControllers.editAuthorPatch);

router.post("/lend/:bookInstance", adminControllers.lendBook); //lend a bookInstance to a user, the user Id should be in the request
router.post("/return/:bookInstance", adminControllers.returnBook); //return a bookInstance
router.post("/addgenre", adminControllers.addGenre);

module.exports = router;
