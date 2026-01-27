import React from 'react'
import Navbar from './componets/Navbar.jsx'
import Search from './componets/Search.jsx'
import Center from './componets/Center.jsx'
import Homepage from './componets/Homepage.jsx'
import Homepagetext from './componets/Homepagetext.jsx'
import Footer from './componets/Footer.jsx'


const App = () => {

  const cards = [
  {
    id: 1,
    img: "https://i.pinimg.com/736x/f3/2c/c8/f32cc8a73faefd94b09192d55a51e918.jpg",
    text: "Elegant black outfit for modern style."
  },
  {
    id: 2,
    img: "https://i.pinimg.com/736x/8e/55/4e/8e554eba17f684e16521beb0a2546870.jpg",
    text: "Casual denim look for everyday wear."
  },
  {
    id: 3,
    img: "https://i.pinimg.com/736x/52/4f/6a/524f6a543f01ec557e7c7e1f82c14218.jpg",
    text: "Minimal white fashion for a classy vibe."
  },
  {
    id: 4,
    img: "https://i.pinimg.com/736x/32/01/0c/32010cff8c038ea5b7bd5bde4b2e8fee.jpg",
    text: "Trendy street-style clothing collection."
  },
  {
    id: 5,
    img: "https://i.pinimg.com/1200x/ca/88/d6/ca88d6db03d493bd2b8df7eb0b6e34e7.jpg",
    text: "Winter fashion outfit with premium feel."
  },
    {
    id: 6,
    img: "https://i.pinimg.com/736x/0f/2b/73/0f2b733ff4af87d7899bc89ff60012fa.jpg",
    text: "Classic outfit with a modern touch."
  },
  {
    id: 7,
    img: "https://i.pinimg.com/736x/75/41/bc/7541bcd91dbd69d63c151bab413126b8.jpg",
    text: "Comfortable everyday fashion wear."
  },
  {
    id: 8,
    img: "https://i.pinimg.com/736x/d8/3e/17/d83e17d66fae1d5ac6e63affd678d4e8.jpg",
    text: "Stylish summer outfit collection."
  },
  {
    id: 9,
    img: "https://i.pinimg.com/1200x/f5/4d/f4/f54df41db2cf33c10a69dda074c7c049.jpg",
    text: "Premium fashion look for special days."
  },
  {
    id: 10,
    img: "https://i.pinimg.com/736x/2c/a9/7d/2ca97d0b9b5feda9f21d0b4bb98319c5.jpg",
    text: "Stylish summer outfit collection."
  },
  {
    id: 11,
    img: "https://i.pinimg.com/736x/37/06/5c/37065c3aaea95e59ffb35d9a101995b3.jpg",
    text: "Soft pastel outfit for elegant styling."
  },
  {
    id: 12,
    img: "https://i.pinimg.com/736x/61/44/86/61448636a921219880f38b87900d86a7.jpg",
    text: "Streetwear style with modern attitude."
  },
  {
    id: 13,
    img: "https://i.pinimg.com/736x/c7/c4/e0/c7c4e0ddd52cb225916c5095a970dee7.jpg",
    text: "Denim-on-denim fashion trend."
  },
  {
    id: 14,
    img: "https://i.pinimg.com/736x/76/cc/d4/76ccd4d0f0c84315d481225b93ffb84c.jpg",
    text: "Formal wear with a stylish twist."
  },
  {
    id: 15,
    img: "https://i.pinimg.com/736x/81/1c/93/811c937ef3e4835e5dbd59e38e2730eb.jpg",
    text: "Classic outfit for timeless fashion."
  },
  {
    id: 16,
    img: "https://i.pinimg.com/736x/a3/1f/28/a31f28878594a4f33cf16de5becd6ae2.jpg",
    text: "Everyday wear with modern simplicity."
  },
  {
    id: 17,
    img: "https://i.pinimg.com/736x/75/41/bc/7541bcd91dbd69d63c151bab413126b8.jpg",
    text: "Trendy look inspired by street fashion."
  },
  {
    id: 18,
    img: "https://i.pinimg.com/736x/8c/f0/15/8cf015d355b2027596939f67d8c2e531.jpg",
    text: "Bold fashion choice for confident style."
  },
  {
    id: 19,
    img: "https://i.pinimg.com/1200x/77/ee/1a/77ee1a5fb44e563b882da42794d46142.jpg",
    text: "Comfortable outfit with clean design."
  },
  {
    id: 20,
    img: "https://i.pinimg.com/736x/44/40/66/444066eaa3bfa37516b56175bf35c329.jpg",
    text: "Luxury fashion look with premium feel."
  }
]

  return (
    <div>
      <Navbar />
      <Search />
      <Center />
      <Homepagetext/>
      <Homepage cards={cards} />
      <Footer />
    
    </div>
  )
}

export default App
