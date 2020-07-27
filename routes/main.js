const path = require('path');

const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();
router.get('/', mainController.getposting);

router.get('/post',mainController.getpost);

router.post('/', mainController.postpost);

router.post('/posts', mainController.posteditpost);

router.get('/contact', mainController.getcontact);

module.exports = router;