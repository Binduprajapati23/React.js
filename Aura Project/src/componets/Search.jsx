import React, { useState } from 'react'

const Search = () => {

  const [search, setSearch] = useState("")

  function onChange(){

  alert("You searched for  " + search);
     
  }
  return (
    <div className="flex justify-center items-center ">
      
      <div className="w-200 h-12 bg-[#D9D9D9] rounded-2xl px-4 flex items-center">
        <input 
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-black placeholder-gray-600"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='bg-[#9F5656] rounded-r-2xl w-15 h-12 flex justify-center items-center -mr-3.75 '>
        <img 
        onClick={onChange} 
        className='w-6 h-6  cursor-pointer flex' src="search_icon.png " alt="" />
         <i class="ri-search-line"></i>
        
      </div>
      </div>

    </div>
  )
}

export default Search
