import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

   function increse(){
    setnum(num+1)
   }
    function decrese(){
    setnum(num-1)
   }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increse}>increse</button>
      <button onClick={decrese}>decrese</button>
    </div>
  )
}

export default App