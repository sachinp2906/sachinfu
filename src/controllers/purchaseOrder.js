const orderModel = require("../models/orderModel");

exports.orderPurchase = async (req, res) => {
  try {
    const userOrder = await orderModel.create(req.body);
    res.status(200).json({
      status: "success",
      result: "Your order is placed successfully!!",
      OrderDetails: userOrder,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: {
        error,
      },
    });
  }
};