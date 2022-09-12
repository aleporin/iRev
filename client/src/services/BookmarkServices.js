import Client from './api'

export const NewBookmarkRecipe = async (data) => {
  try {
    const res = await Client.post(`/savedrecipes`, data)
    return res.data
  } catch (e) {
    throw e
  }
}

export const GetUserBookmarkRecipes = async (userid) => {
  try {
    const res = await Client.get(`/savedrecipes/${userid}`)
    return res.data
  } catch (e) {
    throw e
  }
}

export const GetApiSavedRecipe = async (userid, apiId) => {
  try {
    const res = await Client.get(`/savedrecipes/details/${apiId}/${userid}`)
    return res.data
  } catch (e) {
    throw e
  }
}
