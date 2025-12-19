import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const user = [
    {
       img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nam veniam beatae. Ratione deserunt corrupti a quis, tenetur saepe consequatur?', 
      tag:'satisfied'
    },
    {
       img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D', 
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nam veniam beatae. Ratione deserunt corrupti a quis, tenetur saepe consequatur?', 
      tag:'Underserved'
    },
    {
       img:'https://images.unsplash.com/photo-1600275668999-f423597ec2a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8', 
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nam veniam beatae. Ratione deserunt corrupti a quis, tenetur saepe consequatur?', 
      tag:'Underbanked'
    },
    {
       img:'https://images.unsplash.com/photo-1600275668999-f423597ec2a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8', 
      intro:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nam veniam beatae. Ratione deserunt corrupti a quis, tenetur saepe consequatur?', 
      tag:'Underbanked'
    }
  ];
  return (
    <div>
      <Section1 user={user}/>
      <Section2 />
    </div>
  )
}

export default App
