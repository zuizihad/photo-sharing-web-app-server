const router = require('express').Router()
const imageUploadController = require('../controllers/iamgeUploadController');

router.post('/uploadImage', imageUploadController.uploadImage)
router.get('/album/:name', imageUploadController.getImage)

module.exports = router;