require("dotenv").config();

const {
  ACCES_TOKEN_SECRET,
  ACCES_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN,
  PORT
} = process.env;

const CONSTANTS = {
  PORT: process.env.PORT || 5000,
  ACCES_TOKEN_SECRET,
  ACCES_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN,
};

module.exports = CONSTANTS;
