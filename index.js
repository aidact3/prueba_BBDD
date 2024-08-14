require("dotenv").config(); // para leer archivo .env
//traemos la libreria express para conectarnos al servidor
const express = require("express");
const { connectDB } = require ("./src/config/db");
const moviesRouter = require("./src/api/routes/movies");

//llamamos a la función express y la metemos en constante app
const app = express();

connectDB();

//! linea para configurar que mi servidor sea capaz de recoger datos en formato json
app.use(express.json());

app.use("/api/v1/movies", moviesRouter); //para enlazar todo
// app.use("/api/v1/cinemas", cinemaRouter);

//creamos nuestra primera ruta en el servidor para que nos de una respuesta de algo en "/saludar"
app.use("/saludar", (req, res) => {
  return res.status(200).json("Hola!");
});

//esta sería la normal, sin ningún "/saluda"

app.use("/", (req, res) => {
  return res.status(200).json("Esto funciona correctamente");
});

//cualquier otra ruta:
app.use("*", (req, res, next) => {
  return res.status(404).json("Route not Found");
});

//ahora lo conectamos con nuestro servidor:
app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000");
})
