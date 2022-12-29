const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },

  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["enseignant", "user", "admin"],
    default: "user",
  },
});
module.exports = mongoose.model("user", userShema);
