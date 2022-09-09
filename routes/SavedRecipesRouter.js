const router = require('express').Router()
const controller = require('../Controllers/SavedRecipesController')
// const middleware = require('../middleware')

router.post('/', controller.BookmarkRecipe)

module.exports = router
