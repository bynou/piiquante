const express = require("express");
//const { modelNames } = require("mongoose");
//const auth = require("../middleware/auth");
const router = express.Router();
//const multer = required("../middleware/multer-config");

const userCtrl = require("../controllers/user");
//On défini les routes vers les controllers
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
module.exports = router;
