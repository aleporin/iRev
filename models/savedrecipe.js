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
      Savedrecipe.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'api_recipe'
      })
    }
  }
  Savedrecipe.init(
    {
      image: { type: DataTypes.STRING(1000), allowNull: false },
      title: { type: DataTypes.STRING(2000), allowNull: false },
      summary: { type: DataTypes.STRING(2000), allowNull: false },
      extendedIngredients: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
      },
      cook_time: { type: DataTypes.INTEGER, allowNull: false },
      instructions: { type: DataTypes.STRING(2000), allowNull: false },
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
      apiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE'
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
