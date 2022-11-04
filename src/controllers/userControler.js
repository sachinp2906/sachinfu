// USER MODEL INPORTED
const User = require("../models/userModel");

// CREATE USER CONTROLER FUNCTION
exports.createUser = async (req, res) => {
  try {
    // THIS IS A NEW USER SO ADDING ONE FREE PURCHASE IN HIS PROFILE
    req.body.isFreeAppUser = true;

    // CREATING USER IN DATA BASE
    const userData = await User.create(req.body);

    // SENDING STATUS OF SUCCUSS
    res.status(200).json({
      status: "success",
      message: `Congratulation! ${userData.name} Your Account Created succussfully...!`,
      Bonus: "Your first Purchase is absulutly free!!!",
      User: userData,
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