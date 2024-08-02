const mongoose = require("mongoose")

//vamos a crear una plantilla (que es lo mismo que schema)
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  duration: { type: Number, required: true },
  categories: [ { type: String, enum: ["terror", "comedia", "misterio"] } ],
  img: { type: String, required: true }
},{
  timestamps: true,
});

//El modelo:
const Movie = mongoose.model("Movie", movieSchema, "movies");
module.exports = Movie;

