const { parse } = require('dotenv')
const { Recipe, Savedrecipe, User } = require('../models')

const GetAllRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['username']
        }
      ]
    })
    res.send(recipe)
  } catch (e) {
    throw e
  }
}
const GetUserRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: { userId: req.params.userId },
      include: {
        model: User,
        as: 'author',
        attributes: ['username']
      }
    })
    res.send(recipe)
  } catch (e) {
    throw e
  }
}

const CreateRecipe = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const createdRecipe = await Recipe.create({
      recipe_name: req.body.recipe_name,
      desc: req.body.desc,
      ingredients: req.body.ingredients,
      category: req.body.category,
      cook_time: req.body.cook_time,
      process: req.body.process,
      image: req.body.image,
      userId: userId
    })
    res.send(createdRecipe)
  } catch (e) {
    throw e
  }
}

module.exports = {
  GetAllRecipes,
  CreateRecipe,
  GetUserRecipes
}
