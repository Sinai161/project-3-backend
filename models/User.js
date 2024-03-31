const {default: mongoose} = require("mongoose")
const FavoriteArtist = require("./FavoriteArtist")


const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    favoriteArtist: {type: mongoose.Types.ObjectId, ref: FavoriteArtist}
})



module.exports = mongoose.model("User", userSchema)
