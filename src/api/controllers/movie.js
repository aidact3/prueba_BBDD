//Vamos a hacer un ejemplo de un controlador 
//Va a recoger datos de manera asíncrona porque esto lleva un tiempo
//En cada uno de los controladores vamos a recoger una respuesta (req, res)


//Para realizar estas acciones necesitamos el Modelo que creamos dentro de la carpeta de "models":
const Movie = require("../models/movie");


//! READ (GET) - Recoger las películas de las BBDD (Este es el Controlador más sencillo)
const getMovies = async (req, res, next) => {
  try {
    //creo una variable donde voy a guardar todas las películas. Pongo un await porque vamos a tardar un tiempo en recogerlas. Movie.find() para buscarme las pelis
    const movies = await Movie.find();
    //Vamos a devolver las películas que hemos "leido" para recogerlas.El "OK" es 200.
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}


//! CREATE - Para publicar una película -> Para ello necesitamos enviarle los datos que recogimos. Se lo enviaremos en formato JSON.
const postMovie = async (req, res, next) => {
  try {
    //usamos req para "pedir" datos de las peliculas. Con esto estamos metiendo los datos en una especie de "objeto":
    const newMovie = new Movie(req.body)
    //Ahora tendremos que publicar este objeto haciendo lo siguiente:
    const movieSaved = await newMovie.save();
    //Devolvemos los datos que acabamos de guardar - usando el status 201, que es el que se usa para guardar:
    return res.status(201).json(movieSaved);
  } catch (error) {
    console.log(error);
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}

//! UPDATE - Para actualizar una película
const updateMovie = async (req, res, next) => {
  try {
    //Voy a necesitar el id de la película para tener algo que la identifique de manera única.
    //Le tengo que mandar las cosas que quiero cambiar (req.body) y le tengo que enviar el "id" del que quiero cambiar en concreto (req.params)
    const { id } = req.params; //hago object destructuring

    //Las cosas que quiero cambiar a través de "crear una nueva película", (como el create anterior):
    const newMovie = new Movie(req.body)
    newMovie._id = id; //creo una nueva película pero al ponerle el id, es la misma (no creas ninguna nueva, si no una ya existente que le vas a actualizar algo)
    //Ahora actualizo la película:
    const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, { new: true });
    //Mandamos la respuesta:
    return res.status(200).json(movieUpdated);
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
};


//! DELETE - Para eliminar una película
const deleteMovie = async (req, res, next) => {
  try {
    //Necesito el id de la película para saber cual quiero eliminar:
    const { id } = req.params;
    //busca por id y elimina la película:
    const movieDeleted = await Movie.findByIdAndDelete(id);
    //Mandamos la respuesta (esta vez más elaborada con un objeto):
    return res.status(200).json({
      message: "Elemento eliminado",
      elemento: movieDeleted
    });
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
};

module.exports = {
  getMovies,
  postMovie,
  updateMovie,
  deleteMovie
}

