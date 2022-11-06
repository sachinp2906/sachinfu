const express = require('express')

const headerValidation = async function(req ,res , next) {
    const isFreeAppUser = req.headers.isfreeappuser
    if(!isFreeAppUser) {
        res.send({error: "isFreeAppUserNotFound"})
    } else {
        isFreeAppUser.toLowerCase() === "true" ? true : false
        req.isFreeAppUser = isFreeAppUser
        next()
    }
}

module.exports.headerValidation = headerValidation