const jwt = require("jsonwebtoken");
const user = require("../models/user");

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    if (!token) {
      return res.status(400).send("you are not authorized");
    }
    const decode = await jwt.verify(token, "hello");
    const users = await user.findById(decode.id);
    req.user = users;
    next();
  } catch (error) {
    console.log("error");
  }
};
