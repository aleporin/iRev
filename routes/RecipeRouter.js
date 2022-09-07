const router = require('express').Router()
const controller = require('../Controllers/RecipeController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllRecipes
)
router.get(
  '/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserRecipes
)
router.get(
  '/:recipeId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetRecipesById
)
router.put(
  '/update/:recipeId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateRecipe
)
router.delete(
  '/delete/:recipeId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteRecipe
)
router.post(
  '/create/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateRecipe
)

module.exports = router
