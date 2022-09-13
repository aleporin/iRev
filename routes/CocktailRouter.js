const router = require('express').Router()
const controller = require('../controllers/CocktailController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllCocktails
)
router.get(
  '/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserCocktails
)
router.get(
  '/:cocktailId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetCocktailsById
)
router.put(
  '/update/:cocktailId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCocktail
)
router.delete(
  '/delete/:cocktailId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCocktail
)
router.post(
  '/create/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCocktail
)

module.exports = router
