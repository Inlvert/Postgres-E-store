const createHttpError = require("http-errors");
const { Product } = require("../models");

module.exports.findProduct = async (req, res, next) => {
  try {
    const {
      params: { productId },
    } = req;

    const product = await Product.findByPk(productId);

    if(!product) {
      return next(createHttpError(404, 'Product not found'))
    }

    req.product = product;

    next();
  } catch (error) {
    next(error);
  }
};
