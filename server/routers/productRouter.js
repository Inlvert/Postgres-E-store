const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");
const { paginate } = require("../middlewares/common.mw");
const { findCart } = require("../middlewares/findCart.mw");
const { findProduct } = require("../middlewares/findProduct.mw");

productRouter
  .route("/")
  .post(productController.createProduct)
  .get(paginate, productController.getProducts);

productRouter
  .route("/:productId/carts/:cartId")
  .post(findProduct, findCart, productController.addProductToCart);

productRouter
  .route("/:productId")
  .delete(findProduct, productController.deleteProduct);

module.exports = productRouter;
