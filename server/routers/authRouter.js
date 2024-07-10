const authRouter = require('express').Router();
const authControllre = require('../controllers/auth.controller');
const { cheackRefreshToken } = require('../middlewares/token.mw');
const { imageUpload } = require('../utils/imageUpload');

authRouter.post('/registartion', imageUpload.single("avatar"), authControllre.registration)
authRouter.post('/login', authControllre.login)
authRouter.post('/refresh', cheackRefreshToken, authControllre.refresh)

module.exports = authRouter;