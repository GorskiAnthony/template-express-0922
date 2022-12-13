// Ici, je vais chercher toutes mes variables d'environnement.
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require("morgan");

// app.logger(); > je suis mort
// app.use().logger();

app.use(logger("dev"));

// acces au dossier public

// Lana: app.use(express.static('public'));

app.use("/public", express.static("public"));

app.post("/post", (req, res) => {
	res.send("J'ajoute un item");
});
app.get("/get", function (req, res) {
	res.send("Hello World 🌍 get ready for the next Battle");
});
app.put("/put", (req, res) => {
	res.send("Update item");
});
app.delete("/delete", (req, res) => {
	res.send("item was delete");
});

app.listen(PORT, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Server ouvert sur le port: ", PORT);
	}
});
