import './App.css'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CreateNewRecipe } from './services/RecipeServices'
import { CheckSession } from './services/Auth'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Nav from './components/Nav'
import { Profile } from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './components/Sidebar'
import CreateRecipe from './pages/CreateRecipe'
import { useNavigate } from 'react-router'

function App() {
  let navigate = useNavigate()

  // user auth
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const logOut = () => {
    setUser(null)
    setAuthenticated(false)
    localStorage.clear()
  }

  const checkStatus = async () => {
    const user = await CheckSession()
    setUser(user)
    setAuthenticated(true)
  }

  useEffect(() => {
    const status = localStorage.getItem('token')
    if (status) {
      checkStatus()
    }
  }, [])

  const logout = () => {
    setUser(null)
    localStorage.clear()
  }

  // recipe form
  const [recipeForm, setRecipeForm] = useState({
    recipe_name: '',
    desc: '',
    category: '',
    ingredients: [],
    cook_time: '',
    process: '',
    image: ''
  })

  const [ingredient, setIngredient] = useState('')

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value)
  }

  const handleRecipeChange = (e) => {
    setRecipeForm({ ...recipeForm, [e.target.name]: e.target.value })
  }

  const handleIngredientAdd = (e) => {
    let ingredients = recipeForm.ingredients
    ingredients.push(e.target.value)
    setRecipeForm({ ...recipeForm, ingredients: ingredients })
    setIngredient('')
  }

  const handleRecipeSubmit = async (error) => {
    error.preventDefault()
    await CreateNewRecipe({
      recipe_name: recipeForm.recipe_name,
      desc: recipeForm.desc,
      category: recipeForm.category,
      ingredients: recipeForm.ingredients,
      cook_time: recipeForm.cook_time,
      process: recipeForm.process,
      image: recipeForm.image
    })
    setRecipeForm({
      recipe_name: '',
      desc: '',
      category: '',
      ingredients: [],
      cook_time: '',
      process: '',
      image: ''
    })
    navigate('/ingredients')
  }

  return (
    <div className="app">
      <Sidebar logOut={logOut} authenticated={authenticated} user={user} />
      {/* <Nav authenticated={authenticated} user={user} logOut={logOut} /> */}
      <Routes>
        <Route
          path="/login"
          element={
            <Login setAuthenticated={setAuthenticated} setUser={setUser} />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/searched/:results" element={<SearchResults />} />
        <Route path="/recipe/details/:recipeId" element={<RecipeDetails />} />
        <Route
          element={
            <CreateRecipe
              path="/createrecipe"
              handleRecipeSubmit={handleRecipeSubmit}
              recipeForm={recipeForm}
              handleRecipeChange={handleRecipeChange}
            />
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
