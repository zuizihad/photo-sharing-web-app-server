const mongoose = require('mongoose')

const imageUploadSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    albumName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('ImageUpload', imageUploadSchema)