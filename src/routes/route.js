const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require("../middleware/auth")

router.post('/registerUser' , userController.registerUser)
router.post('/loginUser' , userController.loginUser)
router.get('/getUser/:userId' , mid.authenticate , mid.authorise , userController.getUser)
router.put('/updateUser/:userId' , mid.authenticate , mid.authorise , userController.updateUser)
router.delete('/deleteUser/:userId' , mid.authenticate , mid.authorise , userController.deleteUser)

module.exports = router;