const express = require("express");
const {
  Addarticle,
  Getarticles,
  Delarticle,
  Editarticle,
  GetOnearticle,
} = require("../controlles/article");
const articleRoute = express.Router();

articleRoute.post("/addproduct", Addarticle);
articleRoute.get("/getproduct", Getarticles);
articleRoute.delete("/delproduct/:id", Delarticle);
articleRoute.put("/editproduct/:id", Editarticle);
articleRoute.get("/getOneproduct/:id", GetOnearticle);
module.exports = articleRoute;
