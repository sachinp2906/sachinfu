const jwt = require('jsonwebtoken')
const authenticate = async function (req, res, next) {
    try {
        let xAuthToken = req.headers['x-auth-token']
        if (!xAuthToken) {
            res.status(401).send({ msg: "you are not authenticate, header not present" })
        } else {
            const decodeToken = jwt.verify(xAuthToken, '2dskmn')
            if (!decodeToken) {
                res.status(401).send({ msg: "token is invalid" })
            } else {
                next()
            }
        }
    } catch (error) {
        res.status(500).send({ msg: "server error in authentication", error })
    }
}


const authorise = async function (req, res, next) {
    try{
    let xAuthToken = req.headers['x-auth-token']
    let decodedToken = jwt.verify(xAuthToken , '2dskmn')
    let paramUserId = req.params.userId
    if(decodedToken.userId.toString() != paramUserId) {
        res.status(403).send({msg : "you are not authorise to do this"})
    } else {
        next()
    }
    }
    catch(error){
       res.status(500).send({msg : "server error in authorisation" , error})
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise