import { animationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY

const Pasta = () => {
  const [pasta, setPasta] = useState([])

  useEffect(() => {
    const getPasta = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=pasta`
      )
      setPasta(response.data.recipes)
    }
    getPasta()
  }, [])

  return (
    <div>
      <div className="card-wrapper">
        <h3>Pasta Recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem'
          }}
        >
          {pasta.map((recipe) => (
            <SplideSlide>
              <Link to={`/recipe/details/${recipe.id}`}>
                <div key={recipe.title} className="card-content">
                  <p>{recipe.title}</p>
                  <img src={recipe.image} />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Pasta
