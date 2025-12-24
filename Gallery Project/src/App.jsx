import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userdata, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(function(){
    getdata()
  },[index])
  
  const getdata = async() => {
    const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }
  let printUserData = <h3 className='text-xl text-gray-300 absolute top-1/2 left-1/2 trasnlate-x-1/2 translate-y-1/2 font-semibold'>Loading...</h3>
   if(userdata.length>0){
    printUserData = userdata.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-44 bg-white overflow-hidden'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h3 className='font-bold text-lg'>{elem.author}</h3>
        </a>
      </div>
    })
   }

  return (
    <div className='bg-black h-screen overflow-auto p-4 text-amber-50'>
      <div className='flex h-[82%] flex-wrap gap-4 p-4'>
      {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
        style={{opacity: index == 1 ? 0.6 : 1}}
        className='bg-yellow-400 text-sm cursor-pointer active:scale-95 rounded px-6 py-2 font-semibold'
        onClick={() =>{
          if(index>1){
            setIndex(index - 1)
            setUserData([])
          }
        }}
        >
        Prev
        </button>
        <h4>Page {index}</h4>
        <button 
        className='bg-yellow-400 text-sm cursor-pointer active:scale-95 rounded px-6 py-2 font-semibold'
        onClick={() =>{
          setIndex(index+1)
           setUserData([])
        }}
        >
        Next
        </button>
      </div>
    </div>
  )
}

export default App