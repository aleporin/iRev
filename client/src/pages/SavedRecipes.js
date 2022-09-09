import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import { GetUserBookmarkRecipes } from '../services/BookmarkServices'
import { useState, useEffect } from 'react'

const SavedRecipes = ({ user }) => {
  let { userid } = useParams()
  const [bookmarkedRecipe, setBookmarkedRecipe] = useState([])

  const getBookmark = async (userid) => {
    const response = await GetUserBookmarkRecipes(userid)
    setBookmarkedRecipe(response)
  }

  useEffect(() => {
    getBookmark(userid)
  }, [])

  let navigate = useNavigate()
  return (
    <div>
      <div className="card-wrapper">
        <h3>Bookmarks</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem'
          }}
        >
          {bookmarkedRecipe?.map((recipe) => (
            <SplideSlide>
              {/* <Link to={`user/recipes/details/${recipe.id}`}> */}
              <div
                key={recipe.id}
                className="card-content"
                onClick={() => navigate(`/recipe/details/${recipe.apiId}`)}
              >
                <p>{recipe.title}</p>
                <img src={recipe.image} />
              </div>
              {/* </Link> */}
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default SavedRecipes
