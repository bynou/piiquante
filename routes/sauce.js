const express = require("express");
const router = express.Router();

const Sauce = require("../models/Sauce");
//Création des router POST et GET pour les sauces
router.post("/", (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet créé" }))
    .catch((error) => res.status(400).json({ error }));
});

router.get("/", (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
