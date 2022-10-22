const express = require('express');
const router = express.Router();
const BookModel = require('../models/bookModel')
const bookController = require('../controllers/bookController')


// router.get("/test-me" , function(req ,res) {
//     res.send("HAR HAR MAHADEV")
// })
router.post('/createBook' , bookController.createBook )
router.get('/findBook' , bookController.findBook )

module.exports = router;