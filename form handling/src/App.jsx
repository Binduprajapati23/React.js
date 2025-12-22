import React from 'react'

const App = () => {
   
  function handlesubmit(e){
    e.preventDefault()
    console.log("from submited");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handlesubmit(e)
      }}>
        <input type="text" placeholder='enter your name ' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App