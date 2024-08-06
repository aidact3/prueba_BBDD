const mongoose = require("mongoose");

//vamos a crear una plantilla (que es lo mismo que schema)
const cinemaSchema = new mongoose.Schema({
  address: { type: String, required: true, trim: true },
  name: { type: Number, required: true },
  movies: [{type: mongoose.Types.ObjectId, ref: "movies"}] //creamos un array de peliculas
},{
  timestamps: true,
});

//El modelo:
const Cinema = mongoose.model("cinemas", cinemaSchema, "cinemas");
module.exports = Cinema;