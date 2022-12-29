const article = require("../models/article");

exports.Addarticle = async (req, res) => {
  try {
    const prod = new article({ ...req.body });
    await prod.save();
    res.status(200).send({ msg: "article added", prod });
  } catch (error) {
    res.status(500).send("couldn't add article");
  }
};

exports.Getarticles = async (req, res) => {
  try {
    const prod = await article.find();
    res.status(200).send({ msg: "list of articles", prod });
  } catch (error) {
    res.status(500).send("couldn't get articles");
  }
};

exports.Delarticle = async (req, res) => {
  try {
    await article.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "deleted article" });
  } catch (error) {
    res.status(500).send("couldn't delete article");
  }
};

exports.Editarticle = async (req, res) => {
  try {
    const prod = await article.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated article", prod });
  } catch (error) {
    res.status(500).send("couldn't update article");
  }
};

exports.GetOnearticle = async (req, res) => {
  try {
    const prod = await article.findById(req.params.id);
    res.status(200).send({ msg: "my article", prod });
  } catch (error) {
    res.status(500).send("couldn't get my article");
  }
};
