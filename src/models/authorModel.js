const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
   "author_id" :{
    type: Number,
    require : true
   },
   "author_name": String,
   "age" : Number,
   "address": String
}, { timestamps: true });
module.exports = mongoose.model('Author', authorSchema) //authors



// String, Number
// Boolean, Object/json, array