const BookModel = require('../models/bookModel')

const createBook = async function(req ,res) {
    const data = req.body
    const savedData = await BookModel.create(data)
    res.send({bookData : savedData})
}

const findBook = async function(req ,res) {
    const fetchData = await BookModel.find()
    res.send({bookData : fetchData})
}

module.exports.createBook = createBook;
module.exports.findBook = findBook;