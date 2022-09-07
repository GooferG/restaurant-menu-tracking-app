const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
// const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', indexCtrl.getHome);
router.post('/q', indexCtrl.getSearch);

module.exports = router;
