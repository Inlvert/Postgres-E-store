const { Product, Cart } = require("../models");

module.exports.createProduct = async (req, res, next) => {
  try {
    const { body } = req;

    const product = await Product.create(body);

    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};

module.exports.getProducts = async (req, res, next) => {
  try {
    const { pagination: {limit, offset} } = req;

    const products = await Product.findAll({
      limit,
      offset,
      order: [['price', 'ASC']],
      include: {
        model: Cart,
      },
    });

    res.send({ data: products });
  } catch (error) {
    next(error);
  }
};

module.exports.addProductToCart = async (req, res, next) => {
  try {
    const { body, product, cart } = req;

    const foundProduct = await product.addCart(cart, body);

    res.send({ data: foundProduct });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const { product } = req;

    await product.destroy();

    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};
