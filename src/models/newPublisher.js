const mongoose = require('mongoose')

const newPublisherSchema = new mongoose.Schema({
    "publisherName" : String,
    "headQuarter" : String,
    "ratings" : Number
})

module.exports = mongoose.model("newPublisher" , newPublisherSchema)