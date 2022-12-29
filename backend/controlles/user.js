const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.Register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const found = await user.findOne({ email });
    if (found) {
      res.status(400).send({ erros: [{ msg: "user already exist" }] });
    }
    const users = new user(req.body);

    const salt = 10;
    const hashpassword = bcrypt.hashSync(password, salt);
    users.password = hashpassword;

    const payload = { id: users._id };
    const token = jwt.sign(payload, "hello");
    await users.save();
    res.status(200).send({ msg: "user added", users, token });
  } catch (error) {
    res.status(500).send({ msg: "could not add user" });
  }
};
exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await user.findOne({ email });
    if (!users) {
      return res.status(400).send({ errors: [{ msg: "user not found" }] });
    }
    const match = await bcrypt.compare(password, users.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "user not found" }] });
    }
    const payload = { id: users._id };
    const token = jwt.sign(payload, "hello");
    res.status(200).send({ msg: "login", users, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not login" }] });
  }
};
exports.Deluser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "deleted user" });
  } catch (error) {
    res.status(500).send("couldn't delete user");
  }
};
exports.EditUser = async (req, res) => {
  try {
    const users = await user.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated user", users });
  } catch (error) {
    res.status(500).send("couldn't update user");
  }
};
