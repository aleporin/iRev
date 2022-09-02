'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recipe_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ingredients: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cook_time: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      process: {
        type: Sequelize.STRING,
        allowNull: false
      },
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
    await queryInterface.dropTable('recipes')
  }
}
