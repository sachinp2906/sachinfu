const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const Controller= require("../controllers/Controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", authorController.createUser  )

// router.get("/getUsersData", authorController.getUsersData)

// router.post("/createBook", authorController.createBook  )

// router.get("/getBooksData", authorController.getBooksData)

// router.post("/updateBooks", authorController.updateBooks)
// router.post("/deleteBooks", authorController.deleteBooks)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })



//Assignment Portion
router.post("/createAuthor" , Controller.createAuthor)
router.post("/createBook" , Controller.createBook)
router.get("/getAuthorByName" , Controller.getAuthorByName)
router.get("/getBookById" , Controller.getBookById)

module.exports = router;