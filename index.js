require("dotenv").config(); // para leer archivo .env
//traemos la libreria express para conectarnos al servidor
const express = require("express");

//llamamos a la función express y la metemos en constante app
const app = express();

//creamos nuestra primera ruta en el servidor para que nos de una respuesta de algo
app.use("/saludar", (req, res) => {
  return res.status(200).json("Esto funciona correctamente");
})

//ahora lo conectamos con nuestro servidor:
app.listen(3000, () => {
  console.log("http://localhost:3000");
})
