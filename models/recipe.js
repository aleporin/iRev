'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipe.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'author'
      })

      // Recipe.belongsToMany(models.User, {
      //   as: 'saved_recipes',
      //   through: models.Savedrecipe,
      //   onDelete: 'CASCADE',
      //   foreignKey: 'recipeId'
      // })
    }
  }
  Recipe.init(
    {
      image: { type: DataTypes.STRING, allowNull: false },
      recipe_name: { type: DataTypes.STRING, allowNull: false },
      desc: { type: DataTypes.STRING, allowNull: false },
      ingredients: { type: DataTypes.STRING, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false },
      cook_time: { type: DataTypes.INTEGER, allowNull: false },
      process: { type: DataTypes.STRING, allowNull: false },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        field: 'user_id'
      }
    },
    {
      sequelize,
      modelName: 'Recipe',
      tableName: 'recipes'
    }
  )
  return Recipe
}
