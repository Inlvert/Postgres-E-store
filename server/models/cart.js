"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: "userId",
      });

      Cart.hasMany(models.Product_to_cart, {
        foreignKey: "cartId",
      });

      Cart.belongsToMany(models.Product, {
        through: "product_to_cart",
        foreignKey: "cartId",
      });
    }
  }
  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
      },
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
      underscored: true,
    }
  );
  return Cart;
};
