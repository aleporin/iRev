const router = require('express').Router()
const controller = require('../Controllers/RecipeController')
// const middleware = require('../middleware')

router.get('/', controller.GetAllRecipes)
router.get('/user/:userId', controller.GetUserRecipes)
router.get('/:recipeId', controller.GetRecipesById)
router.get('/update/:recipeId', controller.UpdateRecipe)
router.post('/create/:user_id', controller.CreateRecipe)

module.exports = router
