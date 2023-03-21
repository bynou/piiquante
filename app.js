const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

// petit a petit a supp
const Sauce = require("./models/Sauce");
const app = express();
//Pour gerer la requete Post venant de l'appli front end afin
// d'extraire le corps json
app.use(express.json());
//Connexion a la base de donné
mongoose
  .connect(
    "mongodb+srv://test1:test1@cluster0.jkylchx.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
// Autorisation CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
// chemin vers le router
app.use("/api/auth", userRoutes);

//Création route get et Post
app.post("/api/sauces", (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet créé" }))
    .catch((error) => res.status(400).json({ error }));
});
app.get("/api/sauces", (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
});
module.exports = app;
