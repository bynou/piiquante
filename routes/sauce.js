const express = require("express");

const router = express.Router();

//Declaration du chemin de chaque middleware
const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce");
const multer = require("../middleware/multer-config");
//Création CRUD complet
router.post("/", auth, multer, sauceCtrl.createSauce);
router.get("/", auth, sauceCtrl.displayAllSauce);
router.get("/:id", auth, sauceCtrl.displaySauce);
router.put("/:id", sauceCtrl.modifySauce);
router.delete("/:id", sauceCtrl.deleteSauce);
module.exports = router;
