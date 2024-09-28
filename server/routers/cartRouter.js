const cartRouter = require("express").Router();
const cartController = require("../controllers/cart.controller");
const { findCart } = require("../middlewares/findCart.mw");
const productRouter = require("./productRouter");

cartRouter
  .route("/")
  .post(cartController.createCart)
  .get(cartController.getCarts);
// .get(cartController.getCart);

cartRouter.route("/:cartId").get(cartController.getCart);


module.exports = cartRouter;
