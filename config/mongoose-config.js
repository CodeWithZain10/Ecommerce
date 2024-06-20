const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.log("error", err);
  });

module.exports = mongoose.connection;
