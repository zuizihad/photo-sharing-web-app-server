const Albums = require('../models/albumModel');

const albumController = {
    createAlbum: async (req, res) => {
        try {
            const { albumName, albumPrivacy } = req.body;
            const album = await Albums.findOne({ albumName, albumPrivacy });
            if (album) return res.status(400).json({ msg: 'This Album already exists' })
            const newAlbum = new Albums({ albumName, albumPrivacy })
            await newAlbum.save()
            res.json({ msg: "new album created" })
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getAlbum: async (req, res) => {
        try {
            const albums = await Albums.find()
            res.json(albums)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = albumController;