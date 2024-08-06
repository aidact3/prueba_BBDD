require("dotenv").config(); // para leer archivo .env
//traemos la libreria express para conectarnos al servidor
const express = require("express");
const { connectDB } = require ("./src/config/db");

//llamamos a la función express y la metemos en constante app
const app = express();

connectDB();

//! linea para configurar que mi servidor sea capaz de recoger datos en formato json
app.use(express.json());

app.use("/api/v1/movies", moviesRouter); //para enlazar todo
app.use("/api/v1/cinemas", cinemaRouter);

//creamos nuestra primera ruta en el servidor para que nos de una respuesta de algo
app.use("/saludar", (req, res) => {
  return res.status(200).json("Esto funciona correctamente");
})

//ahora lo conectamos con nuestro servidor:
app.listen(3001, () => {
  console.log("Servidor levantado en: http://localhost:3001");
})
