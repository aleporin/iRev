import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Register = ({
  handleRegisterChange,
  handleRegisterSubmit,
  formRegisterData
}) => {
  return (
    <div>
      <div className="pagewrap">
        <div class="container">
          <h1>Register</h1>
          <form className="col" onSubmit={handleRegisterSubmit}>
            <div className="form-wrap">
              <label htmlFor="username">Username</label>
              <input
                onChange={handleRegisterChange}
                name="username"
                type="text"
                placeholder="username"
                value={formRegisterData.username}
                required
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="email">Email Address</label>
              <input
                onChange={handleRegisterChange}
                name="email"
                type="email"
                placeholder="myemail@email.com"
                value={formRegisterData.email}
                required
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleRegisterChange}
                name="password"
                type="password"
                value={formRegisterData.password}
                required
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={handleRegisterChange}
                name="confirmPassword"
                type="password"
                value={formRegisterData.confirmPassword}
                required
              />
            </div>
            <div className="login-button" onClick={handleRegisterSubmit}>
              <p className="login-button-text">Sign Up</p>
            </div>
            <div className="nevermind-btn">
              <div className="login-button" onClick={handleRegisterSubmit}>
                <Link to="/">
                  <p className="login-button-text">Maybe Next Time!</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register
