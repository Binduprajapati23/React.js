import React from 'react'
import card from './component/card.jsx';
import './component/navbar.jsx';
import navbar from './component/navbar.jsx';

const App = () => {
  return (
    <div>
      {navbar()}
      {card()}
       {card()}
      
    </div>
  )
}

export default App