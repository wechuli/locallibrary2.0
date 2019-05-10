const express = require("express");
const {
  validateBody,
  validateParams,
  schemas
} = require("../configuration/validationHelper");
const {
  createNewGenre,
  deleteGenre,
  getAllGenres
} = require("../controllers/genreController");

const router = express.Router();

//create a unique genre -authenticated
router.post("/create", validateBody(schemas.genresSchema), createNewGenre);

//delete a genre - authenicated
router.delete(
  "/delete/:genreId",
  validateParams(schemas.idSchema, "genreId"),
  deleteGenre
);

//get all genres - unauthenticated
router.get("/all", getAllGenres);

module.exports = router;
