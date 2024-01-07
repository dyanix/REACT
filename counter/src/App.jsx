import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
// I've learned this concept before from the React docs and it's called state as a snapshot. 
//  When we write setCounter(counter+1) multiple times it is updated only once because in the 
// onclick handler of that render, even after calling setCounter(counter + 1) multiple times 
// the value of the counter is 15, because after our event handler finishes, then React re-renders
//  the component. 
  
const [counter,setCounter] = useState(0)
  const handleadd = () =>{
   
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    
  
  }
  const handlminus = () =>{
    if(counter <=0){
      return 0;
    }
    setCounter(counter-1)

  }

  return (
    <>
     
      <h1>Counter : {counter}</h1>
      <button onClick={handleadd}>+

      </button>
      <button onClick={handlminus}>-

      </button>

    </>
  )
}

export default App
