import Pasta from '../components/Pasta'
import Trending from '../components/Trending'
import RecipeDetails from './RecipeDetails'
import SearchResults from './SearchResults'

const Home = () => {
  return (
    <div>
      <Pasta />
      <Trending />
      <RecipeDetails />
    </div>
  )
}

export default Home
