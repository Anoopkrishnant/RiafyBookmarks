import React from 'react'
import './navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {
  return (
    <div className='NavBar'>
        <div className="Data">
            <img className='logo' src={logo} alt="logo" />
            <span className='text'>Bookmarks</span>
        </div>
    </div>
  )
}

export default Navbar
