import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState([])
  let { recipeId } = useParams()

  const getRecipe = async (recipeId) => {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    )
    setRecipe(response.data.results)
  }

  useEffect(() => {
    getRecipe()
  }, [recipeId])

  return (
    <div>
      <h3>{recipe.title}</h3>
      <img src={recipe.image} />
    </div>
  )
}

export default RecipeDetails
