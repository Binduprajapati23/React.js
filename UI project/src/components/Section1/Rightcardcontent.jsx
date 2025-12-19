import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='h-full shrink-0 w-80 relative overflow-hidden rounded-4xl'>
        <img className='w-full h-full object-cover rounded-4xl'src={props.img} alt="" />
        <div className=' absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
          <h2 className='bg-white h-12 w-12 rounded-full justify-center text-2xl font-semibold flex items-center'>{props.id+1}</h2>
          <div>
            <p className='text-lg leading-relaxed text-white mb-12'>{props.intro}</p>
            <div className='flex justify-between'>
              <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
              <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Rightcardcontent