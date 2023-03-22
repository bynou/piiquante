const Sauce = require("../models/Sauce");

//Fonction POST Création sauce
exports.createSauce = async (req, res, next) => {
  const sauceNew = await JSON.parse(req.body.sauce);
  delete sauceNew._id;
  const sauce = new Sauce({
    ...sauceNew,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Sauce créé" }))
    .catch((error) => res.status(400).json({ error }));
};
//Fonction GET pour afficher l'ensemble des sauces
exports.displaySauce = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};
