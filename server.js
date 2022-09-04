const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = express()
const UserRouter = require('./routes/UserRouter')
const RecipeRouter = require('./routes/RecipeRouter')
const SavedRecipes = require('./routes/SavedRecipesRouter')
const CocktailRouter = require('./routes/CocktailRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/api/user', UserRouter)
app.use('/api/recipe', RecipeRouter)
app.use('/api/cocktail', CocktailRouter)
app.use('/api/savedrecipes', SavedRecipes)

app.use('/uploads', express.static('./uploads'))

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
