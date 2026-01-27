import React from 'react'

const Navbar = () => {
  return (
   <div className=" flex items-center p-5 m-2">
  <img className=" h-20" src="Aura_logo.png" alt="" />

  <div className="ml-auto flex gap-10 text-xl font-bold">
    <h3>HOME</h3>
    <h3>CART</h3>
    <h3>ABOUT US</h3>
    <h3>BLOG</h3>
    <h3>PROFILE</h3>
  </div>
</div>

  )
}

export default Navbar