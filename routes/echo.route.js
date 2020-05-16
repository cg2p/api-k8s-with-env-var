const express = require('express');
const router = express.Router();

// Require the controllers
const echo_controller = require('../controllers/echo.controller');

router.get('/', echo_controller.ping);
router.get('/envvars', echo_controller.envvars);

module.exports = router;
