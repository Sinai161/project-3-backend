const jwt = require("jsonwebtoken")
const {JWT_SECRET} = process.env

const createToken = (user) => {
    try{
        const token = jwt.sign({id: user._id, email: user.email, username: user.username}, JWT_SECRET,{expiresIn:"3h"})
        return token
    }catch(err){
        console.log(err)
    }
}

const verifyToken = (req, res, next) => {
    try{
        // identifying the type of token being used
        const bearerHeader = req.headers["authorization"]
        console.log(bearerHeader, " <-- this is bearerheader")
        if(!bearerHeader) {
            // forbidden response code status
            return res.status(403).json({error: "You don't have permission to access this page"})
        }
        const decoded = jwt.verify(bearerHeader, JWT_SECRET)
        console.log(decoded, " <-- DECODED TOKEN")
        if(!decoded) {
            // page not found
            return res.status(400)
        }
        // allows us to move on to the middleware succeeding the current middleware
        // moving on to the next route
        next()
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Interna; server error"})
    }
}

module.exports = {
    createToken,
    verifyToken
}