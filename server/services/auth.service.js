const { RefreshToken } = require("../models");
const JwtService = require('./jwt.service')

module.exports.createSession = async (user) => {

  const tokenPayload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };

  const tokenPair = await JwtService.createTokenPair(tokenPayload);

  await RefreshToken.create({ token: tokenPair.refreshToken, userId: user.id });

  return {
    user,
    tokenPair
  }
}