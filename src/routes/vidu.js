const express = require('express');
const router = express.Router();
const viduController = require('../app/controllers/ViduController');
router.use('/:slug', viduController.hehe);
router.use('/', viduController.vidu);

module.exports = router;
