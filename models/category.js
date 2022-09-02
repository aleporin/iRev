'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CATEGORY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CATEGORY.init(
    {
      appetizer: DataTypes.STRING,
      main: DataTypes.STRING,
      dessert: DataTypes.STRING,
      cocktail: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'CATEGORY',
      tableName: 'categories'
    }
  )
  return CATEGORY
}
