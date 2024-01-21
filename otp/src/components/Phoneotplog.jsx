

import React from 'react'
import { useState } from 'react'

const Phoneotplog = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showotpinput, setshowotpinput] = useState(false)


  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
    console.log(event.target.value);


  }
  
  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    //validations

    const regex = /[^0-9]/g
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number")
      return;

    }
    setshowotpinput(true)




  }
  return (
    <div>
      {!showotpinput ? <form onSubmit={handlePhoneSubmit}>
        <input
          type='text'
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder='Enter Phone Number'
        />
        <button type='submit'>Submit</button>
      </form> : <div>
        <p>Enter OTP sent to {phoneNumber}</p>

      </div>}


    </div>
  )
}

export default Phoneotplog