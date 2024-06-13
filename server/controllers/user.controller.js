const { where } = require("sequelize");
const {
  User,
  Sequelize: { Op },
} = require("../models");
const createHttpError = require("http-errors");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    console.log(user);

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.findUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      }
    });

    res.send({ data: users });
  } catch (error) {
    next(error);
  }
};


module.exports.findUser = async (req, res, next) => {
  try {

    const {params: {userId}} = req;

    const user = await User.findByPk(userId)

    if (!user) {
      return next(createHttpError(404, 'User not found'));
    }

    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

// module.exports.getUser = async (req, res, next) => {
//   try {

//     const {params: {email}} = req;

//     const user = await User.findOne({
//       where: {
//         email: email
//       }
//     })

//     if (!user) {
//       return next(createHttpError(404, 'User not found'));
//     }

//     res.send({ data: user });
//   } catch (error) {
//     next(error);
//   }
// };