const express = require("express");
const connectDB = require("./config/connectDB");
const articleRoute = require("./routes/article");
const userRoute = require("./routes/user");
const app = express();
const port = 5321;
app.use(express.json());

connectDB();
app.use("/api/user", userRoute);
app.use("/api/article", articleRoute);
app.listen(port, console.log(`app is runnig on port ${port}`));
