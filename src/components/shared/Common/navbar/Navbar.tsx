// src/Navbar.js
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">Your Logo</div>
        <div className="lg:hidden">
          <button className="text-white text-2xl" onClick={toggleNavbar}>
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
        <ul className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <li className="mr-4">
            <a className="text-white hover:text-blue-300" href="#home">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a className="text-white hover:text-blue-300" href="#about">
              About
            </a>
          </li>
          <li className="mr-4">
            <a className="text-white hover:text-blue-300" href="#services">
              Services
            </a>
          </li>
          <li className="mr-4">
            <a className="text-white hover:text-blue-300" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
