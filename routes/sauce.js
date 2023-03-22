const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");
//Création des router POST et GET pour les sauces
router.post("/", auth, multer, sauceCtrl.createSauce);
router.get("/", auth, sauceCtrl.displaySauce);

module.exports = router;
