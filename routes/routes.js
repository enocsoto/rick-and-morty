const express = require('express');
const { usuarios } = require('../controllers/controllers.use');
const router = express.Router();
router.get('/', usuarios);
 

module.exports = router