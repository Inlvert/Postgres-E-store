const { Product, Cart, Product_to_cart} = require("../models");

module.exports.createProduct = async (req, res, next) => {
  try {
    const { cart, body } = req;

    const product = await Product.create(body);

    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};

module.exports.getProducts = async (req, res, next) => {
  try {
    const {
      pagination: { limit, offset },
    } = req;

    const products = await Product.findAll({
      limit,
      offset,
      order: [["price", "ASC"]],
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
    const { productId } = req.params;
    const { cartId, quantity } = req.body; // Assuming cartId and quantity are sent in the body

    // Find the product
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Find or create the cart
    let cart = await Cart.findByPk(cartId);
    if (!cart) {
      cart = await Cart.create({ userId: req.user.id }); // Assuming you have user info in req.user
    }

    // Find or create the Product_to_cart entry
    const [cartProduct, created] = await Product_to_cart.findOrCreate({
      where: { cartId: cart.id, productId: product.id },
      defaults: { quantity: quantity || 1 },
    });

    if (!created) {
      // If the product is already in the cart, update the quantity
      cartProduct.quantity += quantity || 1;
      await cartProduct.save();
    }

    res.status(200).json({ message: 'Product added to cart', cartProduct });

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
