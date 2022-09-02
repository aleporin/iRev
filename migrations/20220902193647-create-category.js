'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appetizer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      main: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dessert: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cocktail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories')
  }
}
