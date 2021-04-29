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
    }
}

module.exports = imageUploadCOntroller;