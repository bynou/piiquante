const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
//Mise en place d'un modèle pour user
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
