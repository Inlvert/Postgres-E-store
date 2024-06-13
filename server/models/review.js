"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'userId'
      })

      Review.belongsTo(models.Product, {
        foreignKey: 'productId'
      })
      
      Review.hasOne(models.Rating, {
        foreignKey: 'reviewId'
      })
    }
  }
  Review.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        field: "product_id",
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
      },
      ratingId: {
        type: DataTypes.INTEGER,
        field: "rating_id",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
      underscored: true,
    }
  );
  return Review;
};
