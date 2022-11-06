const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


// registring the user
const userRegistration = async function(req ,res) {
  const {firstName , lastName , mobile , emailId , password , gender , isDeleted , age} = req.body
  if(!mobile || !emailId || !password) {
    res.send({msg:"mobile or emailId or  password is mandatory"})
  } else {
    const registerData = await userModel.create({firstName , lastName , mobile , emailId , password , gender , isDeleted , age})
    res.send({userData : registerData})
  }
}



//login the user
const userLogin = async function(req ,res) {
  const {emailId , password} = req.body
  if(!emailId || !password) {
    res.send({msg: "emailId or password is required to be filled"})
  }
  else{
    let emailId = req.body.emailId
    let password = req.body.password
    let user = await userModel.findOne({emailId : emailId , password : password})
    if(!user) {
      res.send({msg: "invalid email of password"})
    }
    let token = jwt.sign({
      userId : user._id.toString(),
      password : password
    } , "sachinsecretcode");
    res.send({msg : "loginsuccesful" , token: token})
  }
}

//verifying the user
const getUser = async function(req ,res) {
  let token = req.headers["x-auth-token"]
  let decodeToken = jwt.verify(token , 'sachinsecretcode')
  if(!decodeToken) {
    return res.send({msg : "invalid token"})
  }
  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if(!userDetails) {
    return res.send({msg : "user not found"})
  } else {
    return res.send({userData : userDetails})
  }
}

//updating the user
const updateUser = async function(req ,res) {
  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if(!userDetails) {
    res.send({msg : "no such user found"})
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({_id : userId} , userData)
  res.send({data : updatedUser})
}

//deleting the user
const deleteUser = async function(req ,res) {
  let userId = req.params.userId
  let deleteOne = await userModel.updateOne({_id : userId} , {$set:{isDeleted: true}} ,{new : true})
  res.send({data : deleteOne})
}

module.exports.userRegistration = userRegistration
module.exports.userLogin = userLogin
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser