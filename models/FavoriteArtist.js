const {default: mongoose} = require("mongoose")
const User = require("./User")

const favoriteArtistSchema = new mongoose.Schema({
    song: String,
    artist: String,
    releaseDate: String,
    album: String,
    genre: String,
    img: String,
    User: {type: mongoose.Types.ObjectId, ref: User}

})

module.exports = mongoose.model("favoriteArtist", favoriteArtistSchema)