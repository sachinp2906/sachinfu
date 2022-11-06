const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController")
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const headerValidation = require("../middlewares/headerValidation")

router.post('/createUser' , headerValidation.headerValidation , userController.createUser )
router.post('/createProduct' , productController.createProduct )
router.post('/createOrder' , headerValidation.headerValidation , orderController.createOrder)
module.exports = router;