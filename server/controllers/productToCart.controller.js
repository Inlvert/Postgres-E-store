const { Prouct_to_cart } = require("../models");

module.exports.addQuantityToProduct = async (req, res, next) => {
  try {
    const {
      body,
      params: { prouct_to_cartId },
    } = req;

    const foundProductToCart = await Prouct_to_cart.findByPk(prouct_to_cartId);

    const updateQ = await foundProductToCart.update(body);

    res.send({ data: updateQ });
  } catch (error) {
    next(error);
  }
};
