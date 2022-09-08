import Client from './api'

export const GetRecipes = async () => {
  try {
    const res = await Client.get('/recipe')
    return res.data
  } catch (e) {
    throw e
  }
}

export const GetRecipeById = async (recipeId) => {
  try {
    const res = await Client.get(`/recipe/${recipeId}`)
    return res.data
  } catch (e) {
    throw e
  }
}

export const GetRecipeByUser = async (userId) => {
  try {
    const res = await Client.get(`/recipe/${userId}`)
    return res.data
  } catch (e) {
    throw e
  }
}

export const CreateNewRecipe = async (data, userId) => {
  try {
    console.log(userId)
    const res = await Client.post(`/recipe/create/${userId}`, data)
    return res.data
  } catch (e) {
    throw e
  }
}
