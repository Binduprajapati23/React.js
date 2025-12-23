import React from 'react'

const App = () => {
  /*
  const user={
    user:'Bindu',
    age:20,
    city:'Unjha'
  }
  
  localStorage.setItem('user',JSON.stringify(user))
  const user = localStorage.getItem(user)
  console.log(user);
  */

  const user= JSON.parse(localStorage.getItem('users'))
  console.log(user);
  
  
/*

  localStorage.setItem('user','Bindu') 
  localStorage.setItem('age','20')
  localStorage.removeItem('user')

  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age')
  console.log(user,age);
  */
  return (
    <div>App</div>
  )
}

export default App