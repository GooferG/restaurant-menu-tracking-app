const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login');
// const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', loginCtrl.getLogin);
router.get('/new-acct', loginCtrl.getSignup);
router.get('/logout', loginCtrl.getLogout);

router.post('/', loginCtrl.postLogin);
router.post('/new', loginCtrl.postSignup);

module.exports = router;
