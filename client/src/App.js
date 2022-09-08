import './App.css'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CreateNewRecipe } from './services/RecipeServices'
import { CheckSession } from './services/Auth'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import MyRecipeDetails from './pages/MyRecipeDetails'
import Nav from './components/Nav'
import { SignUpUser } from './services/Auth'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './components/Sidebar'
import CreateRecipe from './pages/CreateRecipe'
import { useNavigate, useParams } from 'react-router'
import { GetRecipeByUser } from './services/RecipeServices'
import UserRecipe from './pages/UserRecipe'

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

  // register data

  const handleRegisterChange = (error) => {
    setFormRegisterData({
      ...formRegisterData,
      [error.target.name]: error.target.value
    })
  }

  const [formRegisterData, setFormRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleRegisterSubmit = async (error) => {
    error.preventDefault()
    await SignUpUser({
      username: formRegisterData.username,
      email: formRegisterData.email,
      password: formRegisterData.password
    })
    setFormRegisterData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/')
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
  const initialValue = ''

  const [ingredient, setIngredient] = useState(initialValue)

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value)
  }

  const handleRecipeChange = (e) => {
    setRecipeForm({ ...recipeForm, [e.target.name]: e.target.value })
  }

  const handleIngredientAdd = (e) => {
    e.preventDefault()
    let ingredients = recipeForm.ingredients
    ingredients.push(ingredient)
    setRecipeForm({ ...recipeForm, ingredients: ingredients })

    setIngredient(initialValue)
  }

  const handleRecipeSubmit = async (e, userid) => {
    console.log(userid)
    e.preventDefault()
    await CreateNewRecipe(
      {
        recipe_name: recipeForm.recipe_name,
        desc: recipeForm.desc,
        category: recipeForm.category,
        ingredients: recipeForm.ingredients,
        cook_time: recipeForm.cook_time,
        process: recipeForm.process,
        image: recipeForm.image
      },
      userid
    )
    setRecipeForm({
      recipe_name: '',
      desc: '',
      category: '',
      ingredients: [],
      cook_time: '',
      process: '',
      image: ''
    })
    navigate('/')
  }

  // get user recipe
  // const [recipe, setRecipe] = useState([])
  // useEffect(() => {
  //   const showRecipes = async (userid) => {
  //     const data = await GetRecipeByUser(userid)
  //     setRecipe(data)
  //   }
  //   showRecipes()
  // })

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
        <Route path="/" element={<Home />} />
        <Route path="/searched/:results" element={<SearchResults />} />
        <Route path="/recipe/details/:recipeId" element={<RecipeDetails />} />
        <Route
          path="user/recipes/details/:recipeId"
          element={<MyRecipeDetails />}
        />
        <Route path="/recipe/:userid" element={<UserRecipe user={user} />} />
        <Route
          path="/create/:userid"
          element={
            <CreateRecipe
              handleRecipeSubmit={handleRecipeSubmit}
              recipeForm={recipeForm}
              handleRecipeChange={handleRecipeChange}
              handleIngredientAdd={handleIngredientAdd}
              handleIngredientChange={handleIngredientChange}
              ingredient={ingredient}
              user={user}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              handleRegisterChange={handleRegisterChange}
              formRegisterData={formRegisterData}
              handleRegisterSubmit={handleRegisterSubmit}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
