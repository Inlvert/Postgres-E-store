const userRouter = require('express').Router();
const userController = require('../controllers/user.controller')

userRouter.route('/').post(userController.createUser).get(userController.findUsers);

userRouter.route('/:userId').get(userController.findUser);

// userRouter.route('/:email').get(userController.getUser);

module.exports = userRouter;