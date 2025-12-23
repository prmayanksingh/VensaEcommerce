const express = require('express');
const productController = require('../controller/product.controller');

const router = express.Router();

// api/products
router.post('/', productController.createProductController)

router.get('/', productController.getProductsController)

router.delete('/:id', productController.deleteProductController)

router.patch("/:id", productController.updateProductController)

module.exports = router;