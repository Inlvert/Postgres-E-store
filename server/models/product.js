"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Cart, {
        through: 'prouct_to_carts',
        foreignKey: 'productId'
      });

      Product.hasOne(models.Review, {
        foreignKey: "productId",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: "Lorem ipsum dolor sit amet",
      },
      manufacturer: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.NUMERIC,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.NUMERIC,
        defaultValue: 10,
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
    }
  );
  return Product;
};
