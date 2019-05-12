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
    const { authorId } = req.params;
    try {
      const author = await Author.findOneAndUpdate(
        { _id: authorId },
        req.body,
        { new: true }
      );

      if (!author) {
        return res.status(404).json({ error: "Author not found" });
      }

      res.status(200).json({ message: "Author successfully updated", author });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete an existing author
  async deleteAuthor(req, res) {
    const { authorId } = req.params;
    try {
      const deletedAuthor = await Author.findByIdAndDelete(authorId);
      if (!deletedAuthor) {
        return res.status(404).json({ error: "No author found with that Id" });
      }
      res
        .status(200)
        .json({ message: "Author successfully deleted", deletedAuthor });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all authors in the system
  async getAllAuthors(req, res) {
    try {
      const allAuthors = await Author.find().exec();
      res.status(200).json(allAuthors);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get a single author
  async getAuthor(req, res) {
    const { authorId } = req.params;

    try {
      const author = await Author.findById(authorId)
        .populate("books")
        .exec();
      if (!author) {
        return res.status(404).json({ error: "No author found with that Id" });
      }
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
