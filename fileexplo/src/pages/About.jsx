import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const About = () => {
  const [data, setData] = useState([])

  const handledata = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data);
    setData(data)

  }

  useEffect(() => {
    handledata();
  }, [])

  return (
    <div>
      {/* <button onClick={handledata}>Posts</button> */}
      <h1>
        Title
      </h1>
      {data.map((data) => {
        return (<div>
          {data.title}
        </div>
        )

      })}


    </div>
  )
}

export default About