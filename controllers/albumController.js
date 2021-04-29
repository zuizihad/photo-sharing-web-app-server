const Album = require('../models/albumModel');

const albumController = {
    createAlbum: async (req, res) => {
        try {
            const { albumName, albumPrivacy } = req.body;
            const album = await Album.findOne({ albumName, albumPrivacy });
            if (album) return res.status(400).json({ msg: 'This Album already exists' })
            const newAlbum = new Album({ albumName, albumPrivacy })
            await newAlbum.save()
            res.json({ msg: "new album created" })
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = albumController;