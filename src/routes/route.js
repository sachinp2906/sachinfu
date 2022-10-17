const express = require("express");
const router = express.Router(); ///test-you
//importing a custom module
const xyz = require("../logger");
//importing external package
const underscore = require("underscore");
//import logger module
const wel = require("../logger/logger");
const help = require("../util/helper");
const format = require("../validator/formatter");
const lodash = require("../lodash/lodash");

router.get("/test-me", function (req, res) {
  //Calling the components of a different custom module
  console.log("Calling my function ", xyz.myFunction());
  console.log("The value of the constant is ", xyz.myUrl);
  console.log(wel.welcome());
  console.log(format.format());
  console.log(help.getBatchInfo());
  console.log(lodash.lodash());
  
  res.send("My first ever api!");

  //To be tried what happens if we send multiple response
  //res.send('My second api!')
});

module.exports = router;
