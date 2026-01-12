import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContaxt'

const Nav2 = () => {

 const data= useContext(ThemeDataContext)

  return (
    <div className='nav'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>profile</h4>
        <h4>{data}</h4>
        
    </div>
  )
}

export default Nav2