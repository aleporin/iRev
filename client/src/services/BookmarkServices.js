import Client from './api'

export const NewBookmarkRecipe = async (data) => {
  try {
    const res = await Client.post(`/savedrecipes`, data)
    return res.data
  } catch (e) {
    throw e
  }
}
