const Genre = require("../models/Genre.model");


module.exports = {
  //create a new gender
  async createNewGenre(req, res) {
    let { name } = req.body;
    name = name.toLowerCase();
    //Check if the genre exists
    try {
      const existingGenre = await Genre.findOne({ name });
      console.log(existingGenre);
      if (existingGenre) {
        return res.status(406).json({ error: "Genre already exists" });
      }
      const newGenre = new Genre({ name });
      await newGenre.save();
      res
        .status(201)
        .json({ message: "The genre has been successfully created", newGenre });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete a genre
  async deleteGenre(req, res) {
    let { genreId } = req.params;

    try {
      const deletedGenre = await Genre.findByIdAndDelete(genreId);
  
      if (!deletedGenre) {
        return res
          .status(404)
          .json({ error: "There is no genre with that Id" });
      }
      res
        .status(200)
        .json({ message: "Successfully deleted the genre", deletedGenre });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get all genres
  async getAllGenres(req, res) {
    try {
      const allGenres = await Genre.find({});
      res.status(200).json(allGenres);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
