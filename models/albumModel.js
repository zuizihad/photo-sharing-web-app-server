const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    albumName: {
        type: String,
        required: true,
        trim: true
    },
    albumPrivacy: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
}

)
module.exports = mongoose.model('Albums', albumSchema)