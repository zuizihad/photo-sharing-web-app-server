const router = require('express').Router()
const imageUploadCOntroller = require('../controllers/iamgeUploadController');

router.post('/uploadImage', imageUploadCOntroller.uploadImage)


module.exports = router;