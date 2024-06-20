const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: String,
  productDescription: String,
  email: String,
  productPic: Buffer,
  productCategory: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("product", productSchema);
