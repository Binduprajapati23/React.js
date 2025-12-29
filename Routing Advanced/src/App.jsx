import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import { Route,Routes } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetails from './pages/CourseDetails.jsx'


const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetails />} />
        <Route path='/profile' element={<Profile />}>
        <Route path='/profile/men' element={<Men />} />
        <Route path='/profile/women' element={<Women />} />
        </Route>
       
        

      </Routes>
      <Footer />
    </div>
  )
}

export default App