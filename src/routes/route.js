const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require('../middlewares/headerValidation')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/register' , userController.userRegistration)
router.post('/login' , userController.userLogin)
router.get('/users/:userId' , mid.headerValidation , userController.getUser)
router.put('/users/:userId' , mid.headerValidation , userController.updateUser)
router.delete('/users/:userId' , mid.headerValidation , userController.deleteUser)
module.exports = router;