'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cocktail.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      // Cocktail.belongsToMany(models.User, {
      //   as: 'saved_Cocktails',
      //   through: models.SavedCocktail,
      //   onDelete: 'CASCADE',
      //   foreignKey: 'CocktailId'
      // })
    }
  }
  Cocktail.init(
    {
      image: { type: DataTypes.STRING, allowNull: false },
      cocktail_name: { type: DataTypes.STRING, allowNull: false },
      desc: { type: DataTypes.STRING, allowNull: false },
      ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
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
      modelName: 'Cocktail',
      tableName: 'cocktails'
    }
  )
  return Cocktail
}
