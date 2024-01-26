import React from 'react'
import Child from './Child'
const Parent = ({data}) => {
  return (
    <>
     <div>Name : {data.name}</div>
    <Child data ={data}/>
    </>
   
  )
}

export default Parent