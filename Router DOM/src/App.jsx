import React from 'react'
import {Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Navbar from './component/Navbar.jsx'

const App = () => {
  return (
       <div>
        <Navbar />
      
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/home' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/profile' element={< Profile />} />
      </Routes>
    </div>
  )
}

export default App