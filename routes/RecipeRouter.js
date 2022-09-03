const router = require('express').Router()
const controller = require('../Controllers/RecipeController')
// const middleware = require('../middleware')

router.get('/', controller.GetAllRecipes)
router.post('/create/:user_id', controller.CreateRecipe)

module.exports = router
