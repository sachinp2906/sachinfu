const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// user registration
const registerUser = async function (req, res) {
  const { firstName, lastName, mobile, emailId, password, gender, age } = req.body
  try {
    if (!firstName || !lastName || !mobile || !emailId || !password || !gender || !age) {
      res.status(400).send({ msg: "all fields are required" })
    } else {
      const data = await userModel.create({ firstName, lastName, mobile, emailId, password, gender, age })
      res.status(201).send({ msg: "user succesfully registered", data: data })
    }
  } catch (error) {
    res.status(500).send({ msg: "server error in registring", error })
  }
}

//user login
const loginUser = async function (req, res) {
  const { emailId, password } = req.body
  try {
    if (!emailId, !password) {
      res.status(400).send({ msg: "emailId and password is required" })
    } else {
      const userDetails = await userModel.findOne({ emailId: emailId, password: password })
      if(!userDetails) {
        res.status(404).send({msg: "user not found"})
      }else {
        let token = jwt.sign({userId : userDetails._id.toString() , emailId : userDetails.emailId} , "2dskmn") 
        res.status(200).send({msg : "user succesfully logged in" , token})
      }
    }
  }
  catch (error) {
    res.status(500).send({msg : "server error in login" , error})
  }
}

//fetching the user
const getUser = async function(req ,res) {
  try{
  const userId = req.params.userId
  const userDetails = await userModel.findById(userId)
  if(!userDetails) {
    res.status(404).send({msg : "userDetails not found"})
  }
  else{
    res.status(200).send({msg : "data fetched succesfully" , userDetails})
  }
  }
  catch(error){
    res.status(500).send({msg : "server error in fetching data" , error})
  }
}

//updating the user
const updateUser = async function(req ,res) {
  try{
    const userId = req.params.userId
    const userDetails = await userModel.findById(userId)
    if(!userDetails){
      res.status(404).send({msg : "userId not found"})
    }else {
      const body = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          mobile: req.body.mobile,
          emailId: req.body.emailId,
          password: req.body.password,
          gender: req.body.gender,
      }
      const updatedData = await userModel.findByIdAndUpdate({_id : userId} , {$set:{body : body}} , {new : true})
      res.status(200).send({msg : "data succesfully updated" , updatedData} )
    }
  }
  catch(error) {
    res.status(500).send({msg : "server error in updating the data" , error})
  }
}


//deleting the user
const deleteUser = async function(req ,res) {
  try{
    const userId = req.params.userId
    const userDetails = await userModel.findById(userId)
    if(!userDetails) {
      res.status(404).send({msg : "user not found"})
    }else{
    const deletedData = await userModel.updateOne({_id : userId } , {$set:{isDeleted : true}}, {new : true})
    res.status(200).send({msg : "data succesfully deleted"})
    }
  }
  catch(error){
    res.status(500).send({msg : "server error in deleting the data"} , error)
  }
}

module.exports.registerUser = registerUser
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser