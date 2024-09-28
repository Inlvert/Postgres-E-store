const productRouter = require("express").Router();
const productController = require("../controllers/product.controller");
const { paginate } = require("../middlewares/common.mw");
const { findProduct } = require("../middlewares/findProduct.mw");

productRouter
  .route("/")
  .post(productController.createProduct)
  .get(paginate, productController.getProducts);



productRouter
  .route("/:productId")
  .delete(findProduct, productController.deleteProduct)
  .post(findProduct, productController.addProductToCart);

module.exports = productRouter;
