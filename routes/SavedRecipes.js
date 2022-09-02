const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const RecipeRouter = require('./RecipeRouter')
const CategoryRouter = require('./CategoryRouter')
const SavedRecipe = require('./SavedRecipe')

Router.use('/users', UserRouter)
Router.use('/album', RecipeRouter)
Router.use('/photo', CategoryRouter)
Router.use('/photo', SavedRecipe)

module.exports = Router
