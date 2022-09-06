import React from 'react'
import Search from './Search'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {
  const [nav, setNav] = useState(false)

  const styles = {
    className:
      'text-gray-600 block px-2 py-1 hover:underline hover:text-gray-900',
    activeclassname: 'underline text-gray-900'
  }

  const links = [
    {
      className: styles.className,
      activeclassname: styles.activeclassname,
      to: '/',
      name: 'Home'
    },
    {
      className: styles.className,
      activeclassname: styles.activeclassname,
      to: '/profile',
      name: 'Profile'
    }
  ]

  return (
    <div className="nav-wrap">
      <Search />
      <div onClick={() => setNav(!nav)} className="menu-wrap">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div>
          <ul className="nav-link-wrap">
            {links.map((link) => (
              <Link
                className={link.className}
                activeclassname={link.activeclassname}
                to={link.to}
              >
                {link.name}
              </Link>
            ))}
            {/* {links.map(({ to, link }) => (
              <li key={link.id} className>
                <Link to={link} smooth duration={300}>
                  {to}
                </Link>
              </li> */}
            {/* ))} */}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav
