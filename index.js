const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");

// Express Validator
const {body} = require("express-validator/check");


// Crear connexiones bd
const db = require("./config/db");
require("./model/Naves");

db.sync()
  .then(() => console.log("Conectado al Servidor"))
  .catch((err) => console.log(err));

// Crear una app de express
const app = express();

//agregar archivos statics
app.use(express.static("public"));

// habilitar pug
app.set("view engine", "pug");
//Añadir carpeta de views
app.set("views", __dirname + "/views");

//habilitar body parse
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

app.listen(process.env.PORT || 3000);
