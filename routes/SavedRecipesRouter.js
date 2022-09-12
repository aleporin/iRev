const router = require('express').Router()
const controller = require('../Controllers/SavedRecipesController')
// const middleware = require('../middleware')

router.post('/', controller.BookmarkRecipe)
router.get('/:userId', controller.GetUserSavedRecipes)
router.get('/details/:apiId/:userId', controller.GetRecipeById)
router.delete('/delete/:apiId', controller.DeleteBookmark)

module.exports = router
