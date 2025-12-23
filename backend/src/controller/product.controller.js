const productModel = require("../models/product.model");

async function createProductController(req, res) {
  const { image, name, category, price, description } = req.body;

  const newProduct = await productModel.create({
    image,
    name,
    category,
    price,
    description,
  });

  return res.status(201).json({
    message: "Product created successfully",
    product: newProduct,
  });
}

async function getProductsController(req, res) {
  try {
    const limit = parseInt(req.query._limit) || 8;
    const start = parseInt(req.query._start) || 0;

    const products = await productModel.find()
      .skip(start)
      .limit(limit);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteProductController(req, res) {
  const { id } = req.params;

  const deletedProduct = await productModel.findByIdAndDelete(id);

  if (!deletedProduct) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.status(200).json({
    message: "Product deleted successfully",
  });
}

async function updateProductController(req, res) {
    const { id } = req.params;
    const { image, name, category, price, description } = req.body;
  
    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      {
        image,
        name,
        category,
        price,
        description,
      },
      { new: true }
    );

    return res.status(200).json(updatedProduct);
}

module.exports = {
  createProductController,
  deleteProductController,
  updateProductController,
  getProductsController,
};
