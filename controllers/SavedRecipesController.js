const { Recipe, User, Savedrecipe } = require('../models')

const BookmarkRecipe = async (req, res) => {
  try {
    const bookmarkedRecipe = await Savedrecipe.create({
      title: req.body.title,
      summary: req.body.summary,
      extendedIngredients: req.body.extendedIngredients,
      cook_time: req.body.cook_time,
      instructions: req.body.instructions,
      image: req.body.image,
      apiId: req.body.apiId,
      userId: req.body.userId
    })
    res.send(bookmarkedRecipe)
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

module.exports = {
  BookmarkRecipe,
  GetUserSavedRecipes
}
