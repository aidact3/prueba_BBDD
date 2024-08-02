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
    
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}

//! UPDATE - Para actualizar una película
const updateMovie = async (req, res, next) => {
  try {
    
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}


//! DELETE - Para eliminar una película
const deleteMovie = async (req, res, next) => {
  try {
    
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}

