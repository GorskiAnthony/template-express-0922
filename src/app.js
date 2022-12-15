// Ici, je vais chercher toutes mes variables d'environnement.
const express = require("express");
const app = express();
const logger = require("morgan");

const routes = require("./routes");
const routesAdmin = require("./routesAdmin");
// app.logger(); > je suis mort
// app.use().logger();
app.use(logger("dev"));

// Lana: app.use(express.static('public'));
// Mustapha
app.use("/public", express.static("public"));

app.use(express.json());

app.use("/api", routes);
app.use("/api/admin", routesAdmin);

module.exports = app;
