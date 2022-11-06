const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
     "userId" : {
        type : ObjectId,
        ref : "UserCollection",
        required : true
     },
     "productId" : {
        type : ObjectId,
        ref : "ProductCollection",
        required : true
     },
     "amount" : {
        type : Number
     },
     "isFreeAppUser" : {
        type : Boolean
     },
     "date" : {
        type:"String"
     }
})

module.exports = mongoose.model("OrderCollection" , orderSchema)