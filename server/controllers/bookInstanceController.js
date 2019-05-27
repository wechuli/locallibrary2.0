const Book = require("../models/Book.model");
const BookInstance = require("../models/BookInstance.model");

module.exports = {
  async getAllBookInstances(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async addBookInstanceToBook(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getSingleBookInstance(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async deleteBookInstance(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async borrowBook(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async approveBookInstanceBorrow(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  async getAllBorrowRequests(req, res) {
    try {
      res.status(200).json({ message: "Successfull" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
