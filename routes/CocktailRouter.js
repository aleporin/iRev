const router = require('express').Router()
const controller = require('../Controllers/CocktailController')
// const middleware = require('../middleware')

router.get('/', controller.GetAllCocktails)
router.get('/user/:userId', controller.GetUserCocktails)
// router.get('/:cocktailId', controller.GetCocktailsById)
// router.put('/update/:cocktailId', controller.UpdateCocktail)
// router.delete('/delete/:cocktailId', controller.DeleteCocktail)
router.post('/create/:user_id', controller.CreateCocktail)

module.exports = router
