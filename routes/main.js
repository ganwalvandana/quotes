const path = require('path');

const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();
router.get('/', mainController.getposting);

router.post('/post',mainController.postposting);

module.exports = router;