
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  const handlered = () => {
    setColor("red")

  }
  const handleyellow = () => {
    setColor("yellow")

  }

  return (
    <>
      <div className="w-full h-screen"
        style={{ backgroundColor: color }}>
        <div className='flex justify-center  bg-white rounded-md fixed flex-wrap px-3 py-2 bottom-12 inset-x-10 '>
          <button onClick={handlered} className=" bg-red-500 rounded-md px-5 mr-3 ml-2">Red</button>
          <button onClick={handleyellow} className=" bg-yellow-500 rounded-md px-5 mr-3 ml-2">Yellow</button>
          <button onClick={() => setColor("green")} className=" bg-green-500 rounded-md px-5 mr-3 ml-2">Green</button>
          <button onClick={() => setColor("black")} className=" bg-black text-white rounded-md px-5 mr-3 ml-2">Black</button>

        </div>
      </div>




    </>
  )
}


export default App
