const mongoose = require("mongoose");

const championSchema = new mongoose.Schema({
  name: String,
  title: String,
  desc: String,
  imgURL: String,
  damage: String,
  utility: String,
  survivability: String,
  complexity: String,
  type: String,
  universe: String,
  secondForm: Boolean,
});

module.exports = Champions = mongoose.model("Champion", championSchema);
