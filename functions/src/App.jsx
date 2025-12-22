import React from 'react'

const App = () => {
   function inputchanged(elem){
    console.log(elem);
    
    
    
   }
  return (
    <div>
      <h1>hello Bindu</h1>
      <input onChange={function(elem){
        inputchanged(elem.target.value)
      }} type='text' placeholder='enter user name'></input>
      <button>change user</button>
    </div>
  )
}

export default App