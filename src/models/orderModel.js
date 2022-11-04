const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const orderSchema = mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: "User",
    required: [true, "Please add Your Id!"],
  },
  productId: {
    type: ObjectId,
    ref: "Product",
    required: [true, "Please add Product Id!"],
  },
  amount: {
    type: Number,
  },
  isFreeAppUser: Boolean,
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Order", orderSchema);