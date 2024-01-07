import { useState, useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [Password, setPassword] = useState()

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallow) {
      str = str + "0123456789"
    }
    if (charallow) {
      str = str + "!#$%&'()*+,-./:;<=>?@"
    }

    for (let i = 1; i <= str.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)



    }

    setPassword(pass)

  }, [length, numallow, charallow, setPassword])

  return (
    <>
      <div className='w-full mx-auto rounded-lg max-w-md px-4 py-3 my-8  text-slate-100 bg-slate-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1> 
       <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
        <input
        type='text'
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly

        />
        <button className=' bg-red-700'>
          Copy
        </button>

       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={30}
          value={length}
          onChange={(e)=>{
            setLength(e.target.value)

          }}
          
          />
          <label>Length:{length}</label>


        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numallow}
          onChange={()=>{
            setNumallow((prev)=>!prev)
          }}
           />
           
         

        </div>
       </div>

      </div>
    </>
  )
}

export default App
