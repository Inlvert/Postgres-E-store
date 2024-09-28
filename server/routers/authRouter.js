const authRouter = require('express').Router();
const authControllre = require('../controllers/auth.controller');
const { findUser } = require('../middlewares/findUser.mw');
const { cheackRefreshToken } = require('../middlewares/token.mw');
const { imageUpload } = require('../utils/imageUpload');
const userRouter = require('./userRouter');

authRouter.post('/registartion', imageUpload.single("avatar"), authControllre.registration)
authRouter.post('/login', authControllre.login)
authRouter.post('/refresh', cheackRefreshToken, authControllre.refresh)


module.exports = authRouter;