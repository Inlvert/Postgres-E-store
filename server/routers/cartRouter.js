const cartRouter = require('express').Router();
const cartController = require('../controllers/cart.controller');
const { findUser } = require('../middlewares/findUser.mw');

cartRouter.route('/').get(cartController.getCarts);

cartRouter.route('/:cartId/users/:userId').get(findUser, cartController.getCart);

module.exports = cartRouter;