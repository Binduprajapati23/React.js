import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  const getdata = async () => {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/todos')
    setData(response.data);

  }
  /*
 async function getdata(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  console.log(response);
  
 }
  */
  return (
    <div>
     {
        data.map(function(elem){
          return <h3>{elem.title}</h3>
        })
      }
    </div>
  )
}

export default App