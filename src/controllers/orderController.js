const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
const {isValidObjectId} = require("mongoose")


const createOrder = async function(req ,res) {
const {userId , productId } = req.body
if(!userId || !productId ) {
    res.send({error : "every fields is mandatory"})
}

if(!isValidObjectId(userId)) {
    res.send({error : "this is not a pattern of writing userId"})
}

if(!isValidObjectId(productId)) {
    res.send({error : "this is not a pattern of writing productId"})
}

const userDetails = await userModel.findById(userId) 
if(!userDetails) {
    res.send({error : "invalid userId"})
}

const productDetails = await productModel.findById(productId)
if(!productDetails) {
    res.send({error : "invalid productId"})
} 

const isFreeAppUser = req.body.isFreeAppUser
if(isFreeAppUser) {
    const order = {
        userId : userId,
        productId : productId,
        amount : 0,
        isFreeAppUser : true
    }
  const orderCreate = await orderModel.create(order)
  res.send({orderData : orderCreate})
}
if(userDetails.balance < productDetails.price) {
    res.send({message : "insufficient balance"})
}
else {
    const order = {
        userId : userId,
        productId : productId,
        amount : productDetails.price,
        isFreeAppUser : isFreeAppUser
    }
    const orderCreate = await orderModel.create(order)

    const updateUserBalance = await userModel.findByIdAndUpdate(userId , {$set:{balance : userDetails.balance - productDetails.price }})
    res.send({orderData : orderCreate})

}
}

module.exports.createOrder = createOrder