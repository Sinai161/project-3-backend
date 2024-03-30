const router = require("express").Router()
const userCtrl = require("./userController")
const {verifyToken} = require("../middleware/verifyToken")

router.post("/auth/signup", userCtrl.signup)
router.post("/auth/login", userCtrl.login)
router.get("/user/:id", verifyToken, userCtrl.getUser)
router.get("/user", userCtrl.getUser)



module.exports = router
