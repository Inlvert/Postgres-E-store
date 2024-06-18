const { Cart } = require("../models");
const createHttpError = require("http-errors");

module.exports.findCart = async (req, res, next) => {
  try {
    const {
      params: { cartId },
    } = req;

    const cart = await Cart.findByPk(cartId);

    if (!cart) {
      return next(createHttpError(404, "cart not found"));
    }
    req.cart = cart;
    next();
  } catch (error) {
    next(error);
  }
};
