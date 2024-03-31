const router = require("express").Router()
const userCtrl = require("./userController")
const {verifyToken} = require("../middleware/verifyToken")
const favoriteArtistCtrl = require("./artistController")

// user routes
router.post("/auth/signup", userCtrl.signup)
router.post("/auth/login", userCtrl.login)
router.get("/user/:id", verifyToken, userCtrl.getUser)
router.get("/user", userCtrl.getUser)

// favoriteArtist routes

router.get("/favoriteArtist", favoriteArtistCtrl.getfavoriteArtist)
router.post("/favoriteArtist", favoriteArtistCtrl.createFavoriteArtist)
router.put("/favoriteArtist/:id", favoriteArtistCtrl.updateFavoriteArtist)
router.delete("/favoriteArtist/:id", favoriteArtistCtrl.deleteFavoriteArtist)



module.exports = router
