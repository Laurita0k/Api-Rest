const express = require('express');
const router = express.Router();
const Controller = require('./Controllers/ProductsController');

router.get('/', Controller.Category);
router.get('/:Category', Controller.categories);

module.exports = router;