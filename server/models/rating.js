"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rating.belongsTo(models.Product, {
        foreignKey: 'reviewId'
      })
    }
  }
  Rating.init(
    {
      reviewId: {
        type: DataTypes.INTEGER,
        field: "review_id",
      },
      rating: {
        type: DataTypes.NUMERIC,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "Rating",
      tableName: "ratings",
      underscored: true,
    }
  );
  return Rating;
};
