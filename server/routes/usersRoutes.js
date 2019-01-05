const express = require("express");
const usersControllers = require("../controllers/usersControllers");

const router = express.Router();



router.get('/user',usersControllers); //protected router that returns the details of the user logged in
router.post('/borrow/:bookId',usersControllers);  //borrow a book

module.exports = router;
