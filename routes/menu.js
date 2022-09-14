const express = require('express');
const router = express.Router();
const menuCtrl = require('../controllers/menu');
// const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/', menuCtrl.getMenu);
router.get('/:id', menuCtrl.editMenu);
router.get('/delete/:id', menuCtrl.deleteMenu);

router.post('/save', menuCtrl.saveMenu);
router.post('/new', menuCtrl.newMenu);

module.exports = router;
