//Vamos a hacer un ejemplo de un controlador 
//Va a recoger datos de manera asíncrona porque esto lleva un tiempo
//En cada uno de los controladores vamos a recoger una respuesta (req, res)


//Para realizar estas acciones necesitamos el Modelo que creamos dentro de la carpeta de "models":
const Cinema = require("../models/cinema");


//! READ (GET) - Recoger las películas de las BBDD (Este es el Controlador más sencillo)
const getCinemas = async (req, res, next) => {
  try {
    //creo una variable donde voy a guardar todas las películas. Pongo un await porque vamos a tardar un tiempo en recogerlas. Movie.find() para buscarme las pelis
    const cinemas = await Cinema.find().populate("movies");
    //Vamos a devolver las películas que hemos "leido" para recogerlas.El "OK" es 200.
    return res.status(200).json(cinemas);
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}

//! Coger UN SOLO Cine
const getCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinema = await Cinema.findById(id);
    return res.status(200).json(cinema)
  } catch (error) {
    return res.status(400).json("error");
  }
};


//! CREATE - Para publicar una película -> Para ello necesitamos enviarle los datos que recogimos. Se lo enviaremos en formato JSON.
const postCinema = async (req, res, next) => {
  try {
    //usamos req para "pedir" datos de las peliculas. Con esto estamos metiendo los datos en una especie de "objeto":
    const newCinema = new Cinema(req.body)
    //Ahora tendremos que publicar este objeto haciendo lo siguiente:
    const cinemaSaved = await newCinema.save();
    //Devolvemos los datos que acabamos de guardar - usando el status 201, que es el que se usa para guardar:
    return res.status(201).json(cinemaSaved);
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
}

//! UPDATE - Para actualizar una película
const updateCinema = async (req, res, next) => {
  try {
    //Voy a necesitar el id de la película para tener algo que la identifique de manera única.
    //Le tengo que mandar las cosas que quiero cambiar (req.body) y le tengo que enviar el "id" del que quiero cambiar en concreto (req.params)
    const { id } = req.params; //hago object destructuring

    //Las cosas que quiero cambiar a través de "crear una nueva película", (como el create anterior):
    const newCinema = new Cinema(req.body)
    newMovie._id = id; //creo una nueva película pero al ponerle el id, es la misma (no creas ninguna nueva, si no una ya existente que le vas a actualizar algo)
    //Ahora actualizo la película:
    const cinemaUpdated = await Cinema.findByIdAndUpdate(id, newCinema, { new: true });
    //Mandamos la respuesta:
    return res.status(200).json(cinemaUpdated);
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
};


//! DELETE - Para eliminar una película
const deleteCinema = async (req, res, next) => {
  try {
    //Necesito el id de la película para saber cual quiero eliminar:
    const { id } = req.params;
    //busca por id y elimina la película:
    const cinemaDeleted = await Cinema.findByIdAndDelete(id);
    //Mandamos la respuesta (esta vez más elaborada con un objeto):
    return res.status(200).json({
      message: "Elemento eliminado",
      elemento: cinemaDeleted
    });
  } catch (error) {
    return res.status(400).json("error"); //esto es un error muy genérico
  }
};

module.exports = {
  getCinemas,
  postCinema,
  updateCinema,
  deleteCinema,
  getCinema 
}

