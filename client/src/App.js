import './App.css'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { CheckSession } from './services/Auth'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Nav from './components/Nav'

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

  return (
    <div className="app">
      <Nav />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:results" element={<SearchResults />} />
        <Route path="/recipe/details/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  )
}

export default App
