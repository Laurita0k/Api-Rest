const express = require('express');
const router = express.Router();
const Controller = require('./Controllers/ProductsController');

router.get('/', Controller.all);
router.get('/id/:id', Controller.one);
router.post('/crear', Controller.crear);

module.exports = router;