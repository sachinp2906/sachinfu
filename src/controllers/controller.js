const publisher = require('../models/newPublisher')
const author = require('../models/newAuthor')
const book = require('../models/newBook')

// first part
const newAuthor = async function(req ,res) {
    const body = req.body
    const authorData = await author.create(body)
    res.send({msg:authorData})
}
// second part
const newPublisher = async function(req ,res) {
    const body = req.body
    const publisherData = await publisher.create(body)
    res.send({msg:publisherData})
}

// third part
const newBook = async function(req ,res) {
    const body = req.body
    //const a = await book.find({ObjectId})
    if(!body.authorId) {
        res.send("authorId required")
    }
    else if(!body.publisherId) {
        res.send("publisherId required")
    }
    else if(body.authorId!==book.authorId) {
        res.send("enter valid authorId")
    }
    else if(body.publisherId!==book.publisherId) {
        res.send("enter valid publisherId")
    }
    else {
    const bookData = await book.create(body)
    res.send({msg:bookData})
    }
}

//fourth part
const fetchBook = async function(req ,res) {
    const fetch = await book.find().populate("authorId").populate("publisherId")
    res.send({msg:fetch})
}

//fifth part
// const updateData = async function(req ,res) {
//     const dd = await book.updateMany(
//     {publisher : {publisherName : "Penguin"}},
//     {$set :  {isHardCover : true}}
//     )
//     res.send({msg:dd})
//     }

let updateData = async function(req ,res) {
    let data = await book.find().populate('authorId').populate('publisherId')
    let neededData = data.filter(x=>(x.publisherName == "Penguin") || (x.publisher.publisherName == "HarperCollins"))
    .forEach(x=>x.book.isHardCover=false)
    res.send({msg:neededData})
}

let increasePrice = async function(req ,res) {
    let data = await book.find().populate('authorId').populate('publisherId')
    let neededData = data.filter(x=>x.author.rating>3.5).forEach(y=>y.author.price = y.author.price+10)
    res.send({msg:neededData})
}



module.exports.increasePrice = increasePrice
module.exports.updateData = updateData
module.exports.fetchBook = fetchBook
module.exports.newAuthor = newAuthor
module.exports.newPublisher = newPublisher
module.exports.newBook = newBook