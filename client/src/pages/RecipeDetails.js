import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { Bookmark } from '../components/Bookmark'

const API_KEY = process.env.REACT_APP_API_KEY

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState([])
  const [active, setActive] = useState('details')

  let { recipeId } = useParams()

  const getRecipe = async () => {
    console.log(recipeId)
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    )
    setRecipe(response.data)
  }

  useEffect(() => {
    getRecipe()
  }, [recipeId])

  return (
    // <div className="recipe-detail">
    <div className="recipe-wrap">
      <div className="title-image">
        <h3>{recipe.title}</h3>
        <img src={recipe.image} />
        <Bookmark />
      </div>

      <div className="button-wrap">
        <button
          className={active === 'details' ? 'active' : ''}
          id="details-button"
          onClick={() => setActive('details')}
        >
          Details
        </button>
        <button
          id="details-button"
          className={active === 'ingredients' ? 'active' : ''}
          onClick={() => setActive('ingredients')}
        >
          Ingredients
        </button>
        <button
          id="details-button"
          className={!active === 'recipe' ? 'active' : ''}
          onClick={() => setActive('recipe')}
        >
          Recipe
        </button>
      </div>
      {active === 'details' && (
        <div className="summary-wrap">
          <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
        </div>
      )}
      {active === 'ingredients' && (
        <ul>
          {recipe.extendedIngredients.map((ingrendient) => (
            <li>{ingrendient.original}</li>
          ))}
        </ul>
      )}
      {active === 'recipe' && (
        <ul>
          {recipe.analyzedInstructions.map((instruction) => (
            <li>{instruction.steps.step}</li>
          ))}
        </ul>
      )}
      {/* <p>{recipe.instructions}</p> */}
    </div>
  )
}

export default RecipeDetails
