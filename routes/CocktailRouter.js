const router = require('express').Router()
const controller = require('../Controllers/CocktailController')
// const middleware = require('../middleware')

router.get('/', controller.GetAllCocktails)
router.get('/user/:userId', controller.GetUserCocktails)
router.get('/:cocktailId', controller.GetCocktailsById)
router.get('/update/:cocktailId', controller.UpdateRecipe)
router.get('/delete/:recipeId', controller.DeleteRecipe)
router.post('/create/:user_id', controller.CreateRecipe)

module.exports = router
