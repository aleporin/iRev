'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Recipe, {
        foreignKey: 'categoryId',
        as: 'recipes'
      })
    }
  }
  Category.init(
    {
      appetizer: { type: DataTypes.STRING, allowNull: false },
      main: { type: DataTypes.STRING, allowNull: false },
      dessert: { type: DataTypes.STRING, allowNull: false },
      cocktail: { type: DataTypes.STRING, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories'
    }
  )
  return Category
}
