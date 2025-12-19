import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcontent = (props) => {
  console.log(props);
  
  return (
    <div id='right' className='h-full flex overflow-auto flex-nowrap gap-10 w-2/3 p- rounded-4xl'>
    {props.user.map(function(elem,idx){
      return <Rightcardcontent key={idx} id={idx}img={elem.img} intro={elem.intro} tag={elem.tag}/>
      

    })}
     

    </div>
  )
}

export default Rightcontent