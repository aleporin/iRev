import './App.css'

import { useState, useEffect } from 'react'
// import { Route, Routes } from 'react-router-dom'

import { CheckSession } from './services/Auth'

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

  return <div className="app"> Hello</div>
}

export default App
