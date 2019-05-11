const Author = require("../models/Author.model");

module.exports = {
  //create a new author
  async createAuthor(req, res) {
    try {
      const newAuthor = new Author(req.body);
      await newAuthor.save();
      res.status(201).json({ message: "New author created", newAuthor });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //edit an existing author
  async editAuthor(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete an existing author
  async deleteAuthor(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all authors in the system
  async getAllAuthors(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get a single author
  async getAuthor(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
