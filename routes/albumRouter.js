const router = require('express').Router()
const albumController = require('../controllers/albumController');

router.post('/createAlbum', albumController.createAlbum)
router.get('/getAlbum', albumController.getAlbum)
router.get('/getPublicAlbum', albumController.getPublicAlbum)

module.exports = router;