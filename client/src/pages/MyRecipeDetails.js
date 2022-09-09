import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaSearch, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { GetRecipeById } from '../services/RecipeServices'

const MyRecipeDetails = ({ deleteUserRecipe }) => {
  const [recipe, setRecipe] = useState([])
  const [active, setActive] = useState('details')

  let { recipeId } = useParams()

  const getRecipes = async () => {
    const response = await GetRecipeById(recipeId)
    setRecipe(response)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    // <div className="recipe-detail">
    <div className="recipe-wrap">
      {recipe.length > 0 ? (
        <div>
          <div className="title-image">
            <h3>{recipe[0].recipe_name}</h3>
            <img src={recipe[0].image} />
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
              <p> {recipe[0].desc}</p>
            </div>
          )}
          {active === 'ingredients' && (
            <ul>
              {recipe.ingrendients.map((ingrendient) => (
                <li>{ingrendient}</li>
              ))}
            </ul>
          )}
          {active === 'recipe' && <div>{recipe[0].process}</div>}
          <button onClick={() => deleteUserRecipe(recipeId)}>X</button>
        </div>
      ) : null}
    </div>
  )
}

export default MyRecipeDetails
