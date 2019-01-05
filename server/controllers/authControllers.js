const User = require("../models/User.model");

module.exports = {
  signUp: async (req, res) => {
    res.status(201).json({ message: "You have reached the sign up route" });
  },
  signIn: async (req, res) => {
    res.status(200).json({ message: "You have reached the signIn route" });
  }
  ,
  googleAuth: async (req, res) => {
    res.status(200).json({ message: "You have reached the google sign in route" });
  }
  ,
  facebookAuth: async (req, res) => {
    res.status(200).json({ message: "You have reached the facebook sign in" });
  }
};
