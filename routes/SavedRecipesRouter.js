const router = require('express').Router()
const controller = require('../controllers/SavedRecipesController')
// const middleware = require('../middleware')

router.post('/', controller.BookmarkRecipe)
router.get('/:userId', controller.GetUserSavedRecipes)
router.get('/details/:apiId/:userId', controller.GetRecipeById)
router.delete('/delete/:id', controller.DeleteBookmark)

module.exports = router
