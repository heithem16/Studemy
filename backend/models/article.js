const mongoose = require("mongoose");

const articlesShema = new mongoose.Schema({
  description: String,
  title: String,
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});
module.exports = mongoose.model("article", articlesShema);
