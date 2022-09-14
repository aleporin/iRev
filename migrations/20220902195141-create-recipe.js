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
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      recipe_name: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      desc: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      ingredients: {
        type: Sequelize.ARRAY(Sequelize.STRING(2000)),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      cook_time: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      process: {
        type: Sequelize.STRING(2000),
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
