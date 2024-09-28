const { where } = require("sequelize");
const { Cart, User, Product_to_cart } = require("../models");
const createHttpError = require("http-errors");

module.exports.createCart = async (req, res, next) => {
  try {
    const { user, body } = req;

    const cart = await Cart.create(body);

    console.log(user);

    res.send({ data: cart });
  } catch (error) {
    next(error);
  }
};

// module.exports.createCart = async (req, res, next) => {
//   try {
//     const {user:{id: userId}, body } = req;

//     const cart = await Cart.create({...body, userId});

//     console.log(userId)

//     res.send({ data: cart });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports.getCarts = async (req, res, next) => {
  try {
    const {} = req;

    const cars = await Cart.findAll();

    res.send({ data: cars });
  } catch (error) {
    next(error);
  }
};

// module.exports.getCart = async (req, res, next) => {
//   try {
//     const {
//       params: { cartId },
//       user,
//     } = req;

//     const cart = await Cart.findByPk(cartId, {
//       include: [
//         {
//           model: User,
//           required: true,
//           attributes: ["id", "firstName", "lastName", "email"],
//         },
//         {
//           model: Product_to_cart,
//           required: true,
//           attributes: ["id", "quantity", "cartId"],
//         },
//       ],
//     });

//     console.log(user);

//     res.send({ data: cart });
//   } catch (error) {
//     next(error);
//   }
// };


module.exports.getCart = async (req, res, next) => {
  try {
    const {
      params: { cartId },
      user,
    } = req;

    const cart = await Cart.findOne({
      where: {
        id: cartId,
        userId: user.id
      }
    });

    console.log(cart);

    res.send({ data: cart });
  } catch (error) {
    next(error);
  }
};