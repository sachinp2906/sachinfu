const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const newBookSchema = new mongoose.Schema({
    "bookName" : String,
    "authorId": {
        type : ObjectId,
        require: true,
        ref: "newAuthor"
    },
    "publisherId" : {
        type : ObjectId,
        require : true,
        ref : "newPublisher"
    },
    "isHardCover": {
        type : Boolean,
        default : false
    },
    "price" : Number,
    "ratings" : Number
})

module.exports = mongoose.model("newBook" , newBookSchema)