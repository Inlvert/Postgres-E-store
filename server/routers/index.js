const authRouter = require('./authRouter');
const cartRouter = require('./cartRouter');
const productRouter = require('./productRouter');
const productToCartRouter = require('./productToCartRouter');
const userRouter = require('./userRouter');

const router = require('express').Router();

router.use('/users', userRouter)
router.use('/carts', cartRouter)
router.use('/products', productRouter)

router.use('/increment', productToCartRouter)

router.use('/auth', authRouter)


module.exports = router;