const authRouter = require('express').Router();
const authControllre = require('../controllers/auth.controller');
const { imageUpload } = require('../utils/imageUpload');

authRouter.post('/registartion', imageUpload.single("avatar"), authControllre.registration)
authRouter.post('/login', authControllre.login)
authRouter.post('/refresh', authControllre.refresh)

module.exports = authRouter;