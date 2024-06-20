const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  profilePic: Buffer,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
  password: String,
  cart: { type: Array, default: [] },
});

module.exports = mongoose.model("user", userSchema);
