const router = require("express").Router()
const userCtrl = require("./userController")
const {verifyToken} = require("../middleware/verifyToken")

router.post("/auth/signup", userCtrl.signup)

module.exports = router
