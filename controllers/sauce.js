const Sauce = require("../models/Sauce");

//Fonction POST Création sauce
exports.createSauce = (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Objet créé" }))
    .catch((error) => res.status(400).json({ error }));
};
//Fonction GET pour afficher l'ensemble des sauces
exports.displaySauce = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};
