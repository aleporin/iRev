import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import RecipeDetails from '../pages/RecipeDetails'
import { NewBookmarkRecipe } from '../services/BookmarkServices'

export const Bookmark = ({ recipe, user }) => {
  const [bookmarkRecipe, setBookmarkRecipe] = useState()

  const savedRecipe = {
    title: recipe.title,
    summary: recipe.summary,
    extendedIngredients: recipe.extendedIngredients,
    cook_time: recipe.readyInMinutes,
    instructions: recipe.instructions,
    image: recipe.image,
    apiId: recipe.id,
    userId: user.id
  }

  const saveRecipe = async (savedRecipe) => {
    const response = await NewBookmarkRecipe(savedRecipe)
    setBookmark(true)
  }

  const [bookmark, setBookmark] = useState(false)
  return (
    <div>
      <div onClick={() => saveRecipe(savedRecipe)}>
        {bookmark ? <FaBookmark size={30} /> : <FaRegBookmark size={30} />}
      </div>
    </div>
  )
}
