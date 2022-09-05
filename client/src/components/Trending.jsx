import { animationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Trending = () => {
  const [trending, setTrending] = useState([])

  useEffect(() => {
    const getTrending = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`
      )
      setTrending(response.data.recipes)
    }
    getTrending()
  }, [])

  return (
    <div>
      <div className="card-wrapper">
        <h3>Trending Recipes</h3>
        {trending.map((recipe) => (
          <div key={recipe.id} className="card-content">
            <p>{recipe.title}</p>
            <img src={recipe.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending