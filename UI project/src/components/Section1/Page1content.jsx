import React from 'react'
import Rightcontent from './Rightcontent'
import Leftcontent from './Leftcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 flex items-center gap-10  h-[90vh]'>
        <Leftcontent />
        <Rightcontent user={props.user}/>
        
    </div>
  )
}

export default Page1content