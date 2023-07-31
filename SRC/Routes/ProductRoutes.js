const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const products = require('products')

router.get('/ProductRoutes.js', productController.getAllProducts);


router.post('/ProductRoutes.js', productController.addProduct);

module.exports = router;