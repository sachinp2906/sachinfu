const headerValidation = async function(req ,res , next) {
    const xAuthToken = req.headers["x-auth-token"]
    if(!xAuthToken) {
        res.send({msg : "token is required"})
    } else {
        next()
    }
}

module.exports.headerValidation = headerValidation