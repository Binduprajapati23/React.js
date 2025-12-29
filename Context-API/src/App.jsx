import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')

  return (
    <div>
    <Navbar theme={theme}>
      <h2>this is Navbar</h2>
      <h3>Navbar </h3>
    </Navbar>
    </div>
  )
}

export default App