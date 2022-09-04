const { Recipe, User, SavedRecipe } = require('../models')

const SaveRecipe = async (req, res) => {
  try {
    const savedRecipe = {
      userId: req.params.userId,
      recipeId: req.params.recipeId
    }
    await SavedRecipe.create(savedRecipe)
    res.send(savedRecipe)
  } catch (e) {
    throw e
  }
}

module.exports = {
  SaveRecipe
}
