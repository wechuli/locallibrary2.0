const express = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = express.Router();

router.get("/allusers", adminControllers); //get all users
router.post("/createbook", adminControllers); //create abook

router.post("/createbookinstance", adminControllers); //create book instance
router.post("/createauthor", adminControllers); //create an author
router
  .route("/editbook") //edit an author
  .put(adminControllers)
  .patch(adminControllers);
router
  .route("/editauthor") //edit an author
  .put(adminControllers)
  .patch(adminControllers);

router.post("/lend/:bookInstance", adminControllers);//lend a bookInstance to a user, the user Id should be in the request
router.post("/return/:bookInstance", adminControllers); //return a bookInstance

module.exports = router;
