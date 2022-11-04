const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

// router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)


// assignment portion
const { createProduct } = require("../controllers/productControler");
const { orderPurchase } = require("../controllers/purchaseOrder");
const { createUser } = require("../controllers/userControler.js");

const { isPass } = require("../middlewares/headerValidation");
const { isvalid } = require("../middlewares/requestHandler");

// CREATE USER ROUTER
router.route("/createUser").post(isPass, createUser);

// CREATE PRODUCT ROUTER
router.route("/createProduct").post(createProduct);

// PURCHASE ORDERS ROUTER

router.route("/purchaseOrder").post(isPass, isvalid, orderPurchase);

module.exports = router;