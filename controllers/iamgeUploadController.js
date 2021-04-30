const imageUpload = require('../models/imageUploadModel');

const imageUploadCOntroller = {
    uploadImage: async (req, res) => {
        try {
            const { imageURL, albumName } = req.body;
            const newImageInAlbum = new imageUpload({ imageURL, albumName })
            await newImageInAlbum.save()
            res.json({ msg: 'new image uplaoded' })
        } catch (error) {
            console.log(error);
        }
    },
    getImage: async (req, res) => {
        const name = req.params.name;
        const albumImage = await imageUpload.find({ albumName: name })
        res.json(albumImage)
    }
}

module.exports = imageUploadCOntroller;