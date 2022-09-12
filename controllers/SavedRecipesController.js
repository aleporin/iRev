const { Recipe, User, Savedrecipe } = require('../models')

const { Op } = require('sequelize')

const BookmarkRecipe = async (req, res) => {
  try {
    const bookmarkedRecipe = await Savedrecipe.findOne({
      where: {
        [Op.and]: [{ userId: req.body.userId }, { apiId: req.body.apiId }]
      }
    })
    if (bookmarkedRecipe) {
      ;({ msg: `${req.body.title} is already bookmarked!` })
    } else {
      const newBookmark = await Savedrecipe.create({
        title: req.body.title,
        summary: req.body.summary,
        extendedIngredients: req.body.extendedIngredients,
        cook_time: req.body.cook_time,
        instructions: req.body.instructions,
        image: req.body.image,
        apiId: req.body.apiId,
        userId: req.body.userId
      })
      res.send(newBookmark)
    }
  } catch (e) {
    throw e
  }
}

const GetUserSavedRecipes = async (req, res) => {
  try {
    const recipe = await Savedrecipe.findAll({
      where: { userId: req.params.userId },
      include: {
        model: User,
        as: 'api_recipe',
        attributes: ['username']
      }
    })
    res.send(recipe)
  } catch (e) {
    throw e
  }
}
const GetRecipeById = async (req, res) => {
  try {
    const recipe = await Savedrecipe.findOne({
      where: {
        [Op.and]: [{ userId: req.params.userId }, { apiId: req.params.apiId }]
      },
      include: {
        model: User,
        as: 'api_recipe',
        attributes: ['username']
      }
    })
    res.send(recipe)
  } catch (e) {
    throw e
  }
}

module.exports = {
  BookmarkRecipe,
  GetUserSavedRecipes,
  GetRecipeById
}
