'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Savedrecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Savedrecipe.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id'
      },
      recipeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'recipes',
          key: 'id'
        },
        field: 'recipe_id'
      }
    },
    {
      sequelize,
      modelName: 'Savedrecipe',
      tableName: 'savedrecipes'
    }
  )
  return Savedrecipe
}
