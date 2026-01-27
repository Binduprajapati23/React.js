import React from 'react'

const Homepage = ({ cards }) => {
  return (
    <div id='right' className="mt-15 ml-23 mr-10 flex overflow-x-auto scrollbar-hide gap-8">

      {cards.map((item) => (
        <div
          key={item.id}
          className="h-80 w-80 border shrink-0 border-black rounded-2xl"
        >
          <img
         className="rounded-t-2xl object-cover w-80 h-60 bg-gray-100"
         src={item.img}
         alt="cloth"
        />
          <h3 className="ml-4 mr-4 mt-2">
            {item.text}
          </h3>
        </div>
      ))}

    </div>
  )
}

export default Homepage
