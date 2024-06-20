const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const indexRouter = require("./routes/index");

const db = require("./config/mongoose-config");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("server is running");
});
