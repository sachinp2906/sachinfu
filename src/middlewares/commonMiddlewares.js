const express = require('express')
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

// assignment portion
const local = function(req ,res) {
    res.send("this is my final destination")
}
const midTime = function(req ,res ,next ) {
    const currentDate = new Date();
    let a = currentDate.getDate();
    let b =currentDate.getMonth();
    let c = currentDate.getFullYear();
    console.log(a + "-" + b + "-" + c)
    let d = currentDate.getHours()
    let e = currentDate.getMinutes()
    console.log(d+":"+e)

    next()
} 

const midRoute = function(req ,res ,next) {
    console.log(req.path)
    console.log(req.originalUrl)
    next()
}
const midIP = function(req ,res , next) {
    console.log(req.socket.localAddress);
    console.log(req.ip);
    next()
}


module.exports.midTime = midTime
module.exports.midRoute = midRoute
module.exports.local = local
module.exports.midIP = midIP
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
