const { Cocktail, User } = require('../models')

const GetAllCocktails = async (req, res) => {
  try {
    const cocktail = await Cocktail.findAll({
      include: [
        {
          model: User,
          as: 'author',
          attributes: ['username']
        }
      ]
    })
    res.send(cocktail)
  } catch (e) {
    throw e
  }
}
const GetUserCocktails = async (req, res) => {
  try {
    const cocktail = await Cocktail.findAll({
      where: { userId: req.params.userId },
      include: {
        model: User,
        as: 'author',
        attributes: ['username']
      }
    })
    res.send(cocktail)
  } catch (e) {
    throw e
  }
}
const GetCocktailsById = async (req, res) => {
  try {
    const cocktail = await Cocktail.findAll({
      where: { id: req.params.cocktailId },
      include: {
        model: User,
        as: 'author',
        attributes: ['username']
      }
    })
    res.send(cocktail)
  } catch (e) {
    throw e
  }
}

const CreateCocktail = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const createdCocktail = await Cocktail.create({
      cocktail_name: req.body.cocktail_name,
      desc: req.body.desc,
      ingredients: req.body.ingredients,
      process: req.body.process,
      image: req.body.image,
      userId: userId
    })
    res.send(createdCocktail)
  } catch (e) {
    throw e
  }
}

const UpdateCocktail = async (req, res) => {
  try {
    const cocktailId = parseInt(req.params.cocktailId)
    const updatedCocktail = await Cocktail.update(req.body, {
      where: { id: cocktailId },
      returning: true
    })
    res.send(updatedCocktail)
  } catch (e) {
    throw e
  }
}

const DeleteCocktail = async (req, res) => {
  try {
    await Cocktail.destroy({
      where: { id: req.params.cocktailId }
    })
    res.send({
      msg: 'Cocktail Has Been Deleted!',
      payload: req.params.cocktailId,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateCocktail,
  GetAllCocktails,
  GetUserCocktails,
  GetCocktailsById,
  UpdateCocktail,
  DeleteCocktail
}
