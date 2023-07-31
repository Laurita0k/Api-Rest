const products = require('../data/products');

const getAllProducts = (req, res) => {
  res.json(products);
};

const addProduct = (req, res) => {
  const { id, name, price, description, image } = req.body;
  const newProduct = {
    id: id.toString(),
    name,
    price,
    description,
    image,
  };
  products.push(newProduct);
  res.json({ message: 'Producto agregado exitosamente', product: newProduct });
};

module.exports = {
  getAllProducts,
  addProduct,
};
