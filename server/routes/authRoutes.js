const express = require("express");
const authControllers = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", authControllers); //new user signup-with confirmation email
router.post("/signin", authControllers); //sign in
router.post("/google", authControllers); //google sign in
router.post("/facebook", authControllers); //facebook sign in

module.exports = router;
