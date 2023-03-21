const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");
//Création des router POST et GET pour les sauces
router.post("/", sauceCtrl.createSauce);
router.get("/", sauceCtrl.displaySauce);

module.exports = router;
