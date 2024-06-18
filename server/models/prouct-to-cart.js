"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prouct_to_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prouct_to_cart.belongsTo(models.Cart, {
        foreignKey: "cartId",
      })
    }
  }
  Prouct_to_cart.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
        allowNull: false,
      },
      cartId: {
        type: DataTypes.INTEGER,
        field: "cart_id",
        allowNull: false,
      },
      quantity: {
        type: DataTypes.NUMERIC,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Prouct_to_cart",
      tableName: "prouct_to_carts",
      underscored: true,
    }
  );
  return Prouct_to_cart;
};
