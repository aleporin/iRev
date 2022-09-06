import React from 'react'
import Search from './Search'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Nav = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'Profile'
    },
    {
      id: 2,
      link: 'News'
    },
    {
      id: 3,
      link: 'Weekly Recap'
    },
    {
      id: 4,
      link: 'Weekly Awards'
    },
    {
      id: 5,
      link: 'Gambling'
    },
    {
      id: 6,
      link: 'Power Rankings'
    }
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 ">
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 xl:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={link} smooth duration={300}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Nav
