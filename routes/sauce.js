const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce");

//Création des router POST et GET pour les sauces
router.post("/", auth, sauceCtrl.createSauce);
router.get("/", auth, sauceCtrl.displaySauce);

module.exports = router;
