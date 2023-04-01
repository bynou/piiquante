const raterLimit = require("express-rate-limit");
// On définit les reglage du limiteur
const setLimit = raterLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 50, // 50 essais
});

module.exports = { setLimit };
