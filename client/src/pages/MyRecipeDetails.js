import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { GetRecipeById } from '../services/RecipeServices'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState([])
  const [active, setActive] = useState('details')

  let { recipeId } = useParams()

  const GetRecipeById = async () => {
    const response = await GetRecipeById()
    setRecipe(response.data)
  }

  useEffect(() => {
    GetRecipeById()
  }, [recipeId])

  return (
    // <div className="recipe-detail">
    <div className="recipe-wrap">
      <div className="title-image">
        <h3>{recipe.title}</h3>
        <img src={recipe.image} />
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
        <ol>
          {recipe.analyzedInstructions[0].steps.map((instruction) => (
            <li>{instruction.step}</li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default RecipeDetails
