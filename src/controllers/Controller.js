const { count } = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

//Assignmetn part1
const createBook = async function (req, res) {
    let data = req.body

    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}

const createAuthor = async function (req, res) {
    let dataA = req.body
    let savedDataA = await AuthorModel.create(dataA)
    res.send({ msg: savedDataA })
}


// Assignment part 2
const getBookById = async function(req ,res) {
    const authorId = await AuthorModel.find({author_name : "Chetan Bhagat"}).select()
    const id = authorId.map(ele=> ele.author_id)
    const [a] = id
    const books = await BookModel.find({author_id:a}).select({bookName : 1 ,  _id: 0})

    res.send({msg:books})
}


// Assignment part3
const getAuthorByName = async function (req, res) {
    const authorId = await BookModel.find({ bookName: "Two states" }).select({ author_id: 1, _id: 0 })
    const id = authorId.map(ele => ele.author_id)
    const [a] = id
    const authorName = await AuthorModel.find({ author_id: a }).select({ author_name: 1, _id: 0 })
    const updatePrice = await BookModel.findOneAndUpdate(
        { bookName: "Two states" },
        { $set: { price: 100 } }

    ).select({ price: 1, _id: 0 })
    res.send({ msg: [authorName, updatePrice] })
}




// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )

//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
module.exports.getBookById = getBookById
module.exports.getAuthorByName = getAuthorByName