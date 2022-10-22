const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    "bookName" : {
        type : String,
        unique : true,
        required : true
    },
    "authorName" : String,
    "Category" : String,
    "Year" : Number
} )

module.exports = mongoose.model('Book' , bookSchema);//books