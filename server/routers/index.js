const userRouter = require('./userRouter');

const router = require('express').Router();

router.use('/users', userRouter)

module.exports = router;