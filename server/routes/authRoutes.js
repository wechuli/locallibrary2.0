const express = require("express");
const authControllers = require("../controllers/authControllers");

const router = express.Router();

router.post("/signup", authControllers.signUp); //new user signup-with confirmation email
router.post("/signin", authControllers.signIn); //sign in
router.post("/google", authControllers.googleAuth); //google sign in
router.post("/facebook", authControllers.facebookAuth); //facebook sign in

module.exports = router;
