import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

let Navigate=useNavigate()

  return (
    <div>
      <button 
      onClick={()=>{
       Navigate('/')
      }} 
      className='font-medium bg-emerald-950 rounded px-5 py-2 m-2 active:scale-95 cursor-pointer'>
        Back Home page
        </button>
         <button 
      onClick={()=>{
       Navigate(-1)
      }} 
      className='font-medium bg-emerald-950 rounded px-5 py-2 m-2 active:scale-95 cursor-pointer'>
        Back 
        </button>
      <h1>About</h1></div>
  )
}

export default About