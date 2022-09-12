import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import RecipeDetails from '../pages/RecipeDetails'
import { NewBookmarkRecipe } from '../services/BookmarkServices'

export const UnBookmark = ({ deleteUserBookmarkedRecipe, unBookmarked }) => {
  const [bookmarkRecipe, setBookmarkRecipe] = useState([])

  const [bookmark, setBookmark] = useState(false)
  return (
    <div>
      <div onClick={() => deleteUserBookmarkedRecipe(unBookmarked.id)}>
        {bookmark ? <FaRegBookmark size={30} /> : <FaBookmark size={30} />}
      </div>
    </div>
  )
}
