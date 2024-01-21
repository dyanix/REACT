

import React from 'react'
import { useState } from 'react'

import OtpInput from '../components/otpInput'

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

  const onOtpSubmit = () =>{
    alert(`OTP Submitted: ${phoneNumber}`)
  }
  return (
    <div>
      {!showotpinput ? <form onSubmit={handlePhoneSubmit}>
        <input
          type='text'
          value={phoneNumber}
          onChange={handlePhoneNumber}
          placeholder='Enter Phone Number'
          style={{width:"210px" , height:"40px" ,margin:"5px" , textAlign:"center" , borderRadius:"10px" }}

        />
        <button 
        type='submit'
        style={{ width:"110px" , height:"42px" , textAlign:"center" , borderRadius:"10px" ,backgroundColor:"orchid"}}

        >Submit</button>
      </form> : <div>
        <p>Enter OTP sent to {phoneNumber}</p>
       <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>

      </div>}


    </div>
  )
}

export default Phoneotplog