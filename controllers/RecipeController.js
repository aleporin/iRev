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

module.exports = {
  GetAllRecipes
}
