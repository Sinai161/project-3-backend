const {default: mongoose} = require("mongoose")

const favoriteArtistSchema = new mongoose.Schema({
    song: String,
    artist: String,
    title: String,
    releaseDate: Number,
    album: String,
    genre: String,
    img: String

})

module.exports = mongoose.model("favoriteArtist", favoriteArtistSchema)