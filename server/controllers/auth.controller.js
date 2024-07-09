const createHttpError = require("http-errors");
const { User } = require("../models");
const AuthService = require("../services/auth.service");

module.exports.registration = async (req, res, next) => {
  try {
    const { body, file } = req;

    const user = await User.create({ ...body, avatar: file.filename });

    const userWithTokens = await AuthService.createSession(user);

    console.log(user);

    // send on front
    res.status(201).send({
      data: userWithTokens,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;

    //find user
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return next(createHttpError(404, "invalid data for user"));
    }

    if (user.password !== password) {
      return next(createHttpError(404, "invalid data for user"));
    }

    // // payload for token

    // const tokenPayload = {
    //   id: user.id,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   role: user.role,
    // };

    // //generate token
    // const accessToken = await jwtSign(
    //   tokenPayload,
    //   "sfbdfuiodoklsdv84546dvfv",
    //   { expiresIn: "5min" }
    // );

    // const refreshToken = await jwtSign(tokenPayload, "dbkjhklljshdkjsjdlkfjd", {
    //   expiresIn: "5d",
    // });

    // // save token
    // await RefreshToken.create({ token: refreshToken, userId: user.id });

    const userWithTokens = await AuthService.createSession(user);

    console.log(user);

    // send on front

    res.send({ data: userWithTokens });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
