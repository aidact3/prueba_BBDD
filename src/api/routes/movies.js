//vamos a crear un enrutado, utilizando express:
const moviesRouter = require("express").Router();

//vamos a declarar las rutas para cuando alguien solicite "algo":
moviesRouter.get("/", getMovies);
moviesRouter.post("/", postMovie);
moviesRouter.put("/:id", updateMovie);
moviesRouter.delete("/:id", deleteMovie);

module.exports = moviesRouter;
