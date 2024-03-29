const db = require("../models")

const bcrypt = require("bcrypt")

const signup = async (req,res) => {
    try{
        const {email, username, password} = req.body
        const query = db.User.find({})
        query.or([{username: username}, {email: email}])
        const foundUser = await query.exec()

        if(foundUser.length !==0) {
            return res.status(400).json({message: "Username or email taken."})
        }
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        req.body.password = hash
        const createdUser = await db.User.create(req.body)
        await createdUser.save()

        return res.status(201).json({message: "User successfully registered", userId: createdUser.id})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Intervsl server error", message: err.message})
    }
}

module.exports = {
    signup
}