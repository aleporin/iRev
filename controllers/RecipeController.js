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
const GetRecipesById = async (req, res) => {
  try {
    const recipe = await Recipe.findAll({
      where: { id: req.params.recipeId },
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

const UpdateRecipe = async (req, res) => {
  try {
    const recipeId = parseInt(req.params.recipeId)
    const updatedRecipe = await Recipe.update(req.body, {
      where: { id: recipeId },
      returning: true
    })
    res.send(updatedRecipe)
  } catch (e) {
    throw e
  }
}

module.exports = {
  GetAllRecipes,
  CreateRecipe,
  GetUserRecipes,
  GetRecipesById,
  UpdateRecipe
}
