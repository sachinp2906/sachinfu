const productModel = require("../models/productModel")



const createProduct = async function(req ,res) {
    const {name , category , price} = req.body
    if(!name || !category || !price) {
        res.send({error: "every field is compulsory"})
    }
    else {
        const productData = await productModel.create({name , category , price})
        res.send({productData : productData})
    }
}

module.exports.createProduct = createProduct