import React from 'react'

import { useContext } from 'react'
import { AppContext } from './usecontext/userContext'

const Child = () => {
    const data = useContext(AppContext)
  return (
    <div>Age: {data.age}</div>
  )
}

export default Child