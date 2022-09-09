'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('savedrecipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      summary: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      extendedIngredients: {
        type: Sequelize.ARRAY(Sequelize.JSON),
        allowNull: false
      },
      cook_time: {
        type: Sequelize.STRING,
        allowNull: false
      },
      instructions: { type: Sequelize.STRING(2000), allowNull: false },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id'
      },
      apiId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('savedrecipes')
  }
}
