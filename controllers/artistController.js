const db = require("../models")

// favoriteArtist Index Route

const getfavoriteArtist = async (req,res) => {
    try{
        const foundArtist = await db.FavoriteArtist.find({})
        if(!foundArtist) {
            res.status(404).json({message: "Cannot find Favortie Artist"})
    }else{
        res.status(200).json({data: foundArtist})
    }
    }catch(err){res.status(400).json({error: err.message})}
}

// favoriteArtist Create Route

const createFavoriteArtist = async (req,res) => {
    try{
    const createdFavoriteArtist = await db.FavoriteArtist.create(req.body)
    createdFavoriteArtist.save()
    console.log(createdFavoriteArtist)
    if(!createFavoriteArtist){
        res.status(400).json({message: "Cannot create favorite artist"})
    }else {
        res.status(201).json({data: createdFavoriteArtist, message: "Favorite Artist created"})
    }
}   catch(err) {res.status(400).json({error: err.message})}
}

const updateFavoriteArtist = async (req,res) => {
    try{
        const updatedFavoriteArtist = await db.FavoriteArtist.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if(!updatedFavoriteArtist) {
            res.status(400).json({message: "Could not update Favorite Artist"})
        }else{
            res.status(200).json({Data: updatedFavoriteArtist, message: "Favorite Artist Updated"})
        }
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

const deleteFavoriteArtist = async (req,res) => {
    try{
        const deletedFavoriteArtist = await db.FavoriteArtist.findByIdAndDelete(req.params.id)
        if(!deletedFavoriteArtist){
            res.status(400).json({message: "Could not delete Favorite Artist"})
        }else {
            res.status(200).json({Data: deleteFavoriteArtist, message: "Favorite Artist deleted"})
        }
    }catch(err) {
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    getfavoriteArtist,
    createFavoriteArtist,
    updateFavoriteArtist,
    deleteFavoriteArtist
}
