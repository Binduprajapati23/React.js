import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div className='nav'>
          <h3>Aura</h3>
          <div>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/profile'>Profile</Link>
          </div>
        </div>
  )
}

export default Navbar