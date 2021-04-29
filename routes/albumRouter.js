const router = require('express').Router()
const albumController = require('../controllers/albumController');

router.post('/createAlbum', albumController.createAlbum)
router.get('/getAlbum', albumController.getAlbum)

module.exports = router;