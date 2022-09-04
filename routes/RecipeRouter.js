const router = require('express').Router()
const controller = require('../Controllers/RecipeController')
// const middleware = require('../middleware')

router.get('/', controller.GetAllRecipes)
router.get('/user/:userId', controller.GetUserRecipes)
router.get('/:recipeId', controller.GetRecipesById)
router.put('/update/:recipeId', controller.UpdateRecipe)
router.delete('/delete/:recipeId', controller.DeleteRecipe)
router.post('/create/:user_id', controller.CreateRecipe)

module.exports = router
