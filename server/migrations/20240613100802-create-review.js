'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      body: {
        type: Sequelize.TEXT
      },
      // ratingId: {
      //   type: Sequelize.INTEGER,
      //   field: 'rating_id',
      //   allowNull:false,
      //   references: {
      //     model: "ratings",
      //     key: "id",
      //   },
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE",
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};