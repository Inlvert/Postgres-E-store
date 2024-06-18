const productToCartRouter = require("express").Router();
const productToCartController = require("../controllers/productToCart.controller");
const { findProduct } = require("../middlewares/findProduct.mw");

productToCartRouter
  .route("/:prouct_to_cartId")
  .put(productToCartController.addQuantityToProduct);

module.exports = productToCartRouter;
