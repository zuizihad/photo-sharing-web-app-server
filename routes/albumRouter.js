const router = require('express').Router()
const albumController = require('../controllers/albumController');

router.post('/createAlbum', albumController.createAlbum)

module.exports = router;