const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/projet");
    console.log("bd is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
