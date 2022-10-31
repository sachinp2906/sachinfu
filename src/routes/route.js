const express = require('express');
const router = express.Router();

const controller = require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/newAuthor' , controller.newAuthor )
router.post('/newPublisher' , controller.newPublisher)
router.post('/newBook' , controller.newBook)
router.get('/fetchBook' , controller.fetchBook)
router.put('/updateData' , controller.updateData)
router.put('/increasePrice' , controller.updateData)

module.exports = router;