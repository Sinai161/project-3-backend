const {default: mongoose} = require("mongoose")

const favoriteArtist = new mongoose.Schema({
    song: String,
    artist: String,
    title: String,
    releaseDate: Number,
    album: String,
    genre: String

})

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique:true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    favoriteArtist:[favoriteArtist]
})


const User = mongoose.model("User", userSchema)

module.exports = User