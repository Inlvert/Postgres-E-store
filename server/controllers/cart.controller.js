const { Cart, User, Prouct_to_cart} = require("../models");
const createHttpError = require("http-errors");

module.exports.getCarts = async (req, res, next) => {
  try {
    const {} = req;

    const cars = await Cart.findAll();

    res.send({ data: cars });
  } catch (error) {
    next(error);
  }
};

module.exports.getCart = async (req, res, next) => {
  try {
    const {
      params: { cartId },
      user,
    } = req;

    const cart = await Cart.findByPk(cartId, {
      include: [
        {
          model: User,
          required: true,
          attributes: ["id", "firstName", "lastName", "email"],
        },
        {
          model: Prouct_to_cart,
          required: true,
          attributes: [ "id", "quantity", "cartId"],
        },
      ],
    });

    console.log(user);

    res.send({ data: cart });
  } catch (error) {
    next(error);
  }
};
