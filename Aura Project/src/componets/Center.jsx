import React from 'react'

const Center = () => {
      function buttonclick(){

        alert("Shop Now button clicked");

      }

  return (
    <div>
      <div className='w-5xl h-118 mb-11  mt-11 gap-5 mr-30 ml-60 flex items-center bg-[#9f565633]'>
        
        <div>
          <img className='h-110 ml-20' src="center_image.png" alt="image" />
        </div>

        <div className='italic  pl-20 '>
          <h1 className='whitespace-nowrap text-8xl'>One Stop for</h1>
          <h1 className='text-8xl'>Endless</h1>
          <h1 className='text-8xl'>Choice</h1>
          <button onClick={()=>{
            buttonclick();}} 
          className='bg-[#9F5656] h-12 w-40 rounded font-bold ml-20 mt-10'>
          Shop Now
          </button>
        </div>
    
            
       

      </div>
    </div>
  )
}




export default Center