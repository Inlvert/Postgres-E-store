"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product_to_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product_to_cart.belongsTo(models.Cart, {
        foreignKey: "cartId",
      });
      Product_to_cart.belongsTo(models.Product, {
        foreignKey: "productId",
      });
    }
  }
  Product_to_cart.init(
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
      modelName: "Product_to_cart",
      tableName: "product_to_cart",
      underscored: true,
    }
  );
  return Product_to_cart;
};
