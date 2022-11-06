const userModel = require("../models/userModel")
//const express = require('express')


const createUser = async function(req ,res) {
    const isFreeAppUser = req.body
    const {name , balance , age , gender ,address } = req.body
if(!name || !balance || !age || !gender || !address || !isFreeAppUser ) {
    res.send({error : "every field is compulsory to fill"})
} 
   const userData = await userModel.create({name , balance , age , gender , address})
   res.send({data : userData})

}
module.exports.createUser = createUser