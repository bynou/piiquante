const express = require("express");
const mongoose = require("mongoose");

//On déclare ici les chemins vers les différents routeurs
const userRoutes = require("./routes/user");
const sauceRoutes = require("./routes/sauce");

//Chemin static pour images
const path = require("path");

const app = express();
//Pour gerer la requete Post venant de l'appli front end afin
// d'extraire le corps json
app.use(express.json());

//Connexion a la base de donné MongoDB
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
// chemin vers les routers
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));
module.exports = app;
