const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const jwtSign = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

const tokenCongig = {
  access: {
    secret: "sfbdfuiodoklsdv84546dvfv",
    expiresIn: "1min" 
  },
  refresh: {
    secret: "dbkjhklljshdkjsjdlkfjd",
    expiresIn: "5d" 
  }
}

const createToken = (payload, { secret, expiresIn }) => jwtSign(payload, secret, {expiresIn});

const verifyToken = (token, {secret}) => jwtVerify(token, secret);

module.exports.createTokenPair = async (payload) => {
  return {
    accessToken: await createToken(payload, tokenCongig.access),
    refreshToken: await createToken(payload, tokenCongig.refresh)
  }
}

module.exports.verifyAccessToken = token => verifyToken(token, tokenCongig.access);
module.exports.verifyRefreshToken = token => verifyToken(token, tokenCongig.refresh);