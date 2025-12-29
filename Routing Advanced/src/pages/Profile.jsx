import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
    <div className='flex justify-center gap-10 py-4'>
      <Link className='text-xl font-semibold' to='/profile/men'>Men</Link>
      <Link className='text-xl font-semibold' to='/profile/women'>Women</Link>
      </div>
      <Outlet />
      </div>
  )
}

export default Profile