const path = require('path');

const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();
router.get('/', mainController.getposting);

router.get('/post',mainController.getpost);

module.exports = router;