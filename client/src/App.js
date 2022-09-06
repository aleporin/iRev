import './App.css'
import Search from './components/Search'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { CheckSession } from './services/Auth'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'

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
      <Search />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:results" element={<SearchResults />} />
      </Routes>
    </div>
  )
}

export default App
