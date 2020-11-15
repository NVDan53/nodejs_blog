const express = require('express');
const router = express.Router();
        const viduController = require('../app/controllers/ViduController');
router.get('/:slug', viduController.hehe);
router.get('/', viduController.vidu);

module.exports = router;
