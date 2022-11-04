const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Product name"],
    lowercase: true,
  },
  category: String,
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);