const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

exports.isvalid = async (req, res, next) => {
  try {
    // DESTRUCTING USER-ID AND PRODUCT-ID
    const { userId, productId } = req.body;

    // CHEKING USER-ID IN DATABASE
    const userFound = await userModel.findById(userId);

    // CHEKIND PRODUCT-ID IN DATABASE
    const prodFound = await productModel.findById(productId);

    // CHEKING IF IT IS A FREE-ORDER

    if (userFound["isFreeAppUser"]) {
      //SENDING TO BODY FOR CREATE ORDER
      req.body.isFreeAppUser = true;
      req.body.amount = 0;

      // UPDATING USER
      userFound.isFreeAppUser = false;
      userFound.save();

      // IF IT IS A PAY-ORDER
    } else {
      // CHEKING THE BALANCE OF USER IS SUFFICIENT
      if (userFound.balance < +prodFound.price) {
        // RETURNING IF INSUFFICIENT BALANCE WITH MESSAGE
        return res.send("Insufficient ballance!");
      }

      //SENDING TO BODY FOR CREATE ORDER
      req.body.isFreeAppUser = false;
      req.body.amount = +prodFound.price;  //Number(prodFound.price)

      // UPDATING USER BALANCE
      userFound.balance -= +prodFound.price;
      userFound.balance = userFound.balance.toFixed(2);
      userFound.save();
    }
    // ADDING DATE AND TIME OF PURCHASE ORDER IN EIGHTER CASE
    req.body.date = new Date();

    // SENDING CONTROL TO NEXT FUNCTION
    next();
  } catch (error) {
    res.status(404).json({
      status: `User Id or Product Id is not correct!!`,
      message: error,
    });
  }
};