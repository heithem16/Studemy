const express = require("express");
const { Register, Login, Deluser, EditUser } = require("../controlles/user");
const { isAuth } = require("../middlewear/isAuth");
const {
  registerValidator,
  validation,
  loginValidator,
} = require("../middlewear/validation");
const userRoute = express.Router();

userRoute.post("/register", registerValidator, validation, Register);
userRoute.post("/login", loginValidator, validation, Login);
userRoute.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});
userRoute.delete("/deluser/:id", Deluser);
userRoute.put("/edit/:id", EditUser);
module.exports = userRoute;
