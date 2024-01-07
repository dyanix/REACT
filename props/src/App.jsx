import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Footer from './components/footer'
function App() {

  
  let myObject = {
    name:"Dyanesh",
    age:21,
}

  return (
    <>
  
     <h1 className=' bg-white rounded-lg  text-black p-4 mb-3'>
      Tailwind
     </h1>
     <Cards name="Dyanesh" />
     {/* <Cards/> */}
     <Footer name="sjhdcj" someObject={myObject}/>
   

    </>
  )
}

export default App
