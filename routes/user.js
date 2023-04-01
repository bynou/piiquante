const express = require("express");

const router = express.Router();
const limit = require("../middleware/limit");
const userCtrl = require("../controllers/user");

//On défini les routes vers les controllers
router.post("/signup", userCtrl.signup);
router.post("/login", limit.setLimit, userCtrl.login);
module.exports = router;
