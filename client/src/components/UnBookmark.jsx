import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import RecipeDetails from '../pages/RecipeDetails'
import { NewBookmarkRecipe } from '../services/BookmarkServices'

export const UnBookmark = ({ savedRecipe }) => {
  const [bookmarkRecipe, setBookmarkRecipe] = useState([])

  const saveRecipe = async (recipe) => {
    const response = await NewBookmarkRecipe(recipe)
    setBookmark(true)
  }

  const [bookmark, setBookmark] = useState(false)
  return (
    <div>
      <div onClick={() => saveRecipe(savedRecipe)}>
        {bookmark ? <FaRegBookmark size={30} /> : <FaBookmark size={30} />}
      </div>
    </div>
  )
}
