import './App.css'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { CheckSession } from './services/Auth'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Nav from './components/Nav'
import { Profile } from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './components/Sidebar'

function App() {
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
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
