const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    "name" : {
        type : String,
        require : true
    },
    "balance": {
        type : Number,
        require : true
    },
    "address": {
        type : String,
        require : true
    },
    "age" : {
        type : Number,
        require : true
    },
    "gender" : {
        type: String,
        enum : ["male" , "female" , "other"],
        require : true
    },
    "isFreeAppUser" : {
        type : Boolean,
        require : true,
        default : false
    }
} , {timestamps : true})

module.exports = mongoose.model('UserCollection' , userSchema)