import React from 'react'

const Footer = ({name , someObject}) => {
  return (
    <div className=' text-gray-300'>
     <h1>  footer{name}</h1> 
     <h2>
        Object: {someObject.name} {someObject.age}
     </h2>
        </div>
  )
}

export default Footer