const imageUpload = require('../models/imageUploadModel');

const imageUploadController = {
    uploadImage: async (req, res) => {
        try {
            const { imageURL, albumName } = req.body;

            if (imageURL === null) {
                return res.status(400).json({ msg: 'Please select an image' })
            } else {
                const newImageInAlbum = new imageUpload({ imageURL, albumName })
                await newImageInAlbum.save()
                res.json({ msg: 'new image uplaoded' })
            }
        } catch (error) {
            console.log(error);
        }
    },
    getImage: async (req, res) => {
        const name = req.params.name;
        const albumImage = await imageUpload.find({ albumName: name })
        if (!albumImage) return res.status(400).json({ msg: 'No iamge found' })
        res.json(albumImage)
    }
}

module.exports = imageUploadController;