const express = require('express');
const router = express.Router();

const { googleSearch } = require('../controllers/searchControllers');

router.get('', googleSearch);

module.exports = router;
