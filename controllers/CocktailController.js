const { Cocktail, User } = require('../models')

const CreateCocktail = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const createdCocktail = await Cocktail.create({
      cocktail_name: req.body.cocktail_name,
      desc: req.body.desc,
      ingredients: req.body.ingredients,
      category: req.body.category,
      cook_time: req.body.cook_time,
      process: req.body.process,
      image: req.body.image,
      userId: userId
    })
    res.send(createdCocktail)
  } catch (e) {
    throw e
  }
}

module.exports = {
  CreateCocktail
  // GetAllRecipes,
  // GetUserRecipes,
  // GetRecipesById,
  // UpdateRecipe,
  // DeleteRecipe
}
