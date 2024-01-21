import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({length,onOtpSubmit}) => {
    const [otp,setOtp] = useState(new Array(length).fill(""))
    const inputRefs =  useRef([])

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()

        }
    },[])

    const handleChange = (event, index) => {

    
        const value = event.target.value;
        console.log(value);
    
        if (isNaN(value)) return;
    
        const newOtp = [...otp];
        //one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        const combinedotp = newOtp.join("")
        if(combinedotp.length === length){

            onOtpSubmit(combinedotp)
        }
        

    };
    
    const handleClick = () =>{

    }
    const handleKeyDown = () =>{

    }

   
  return (

    <div >
        {
            otp.map((value,index)=>{
                return (
                    <input
                    ref={(input)=>(inputRefs.current[index]=input)}
                    style={{width:"40px" , height:"40px" ,margin:"5px" , textAlign:"center" , borderRadius:"10px"}}
                    key={index}
                    type='text'
                    value={value}
                    onChange={(event) => handleChange(event, index)}
                    onClick={()=>handleClick(index)}
                    onKeyDown={(e)=>handleKeyDown(index,e)}
                    />
                )
            })
        }
       
    </div>
    

  )
}

export default OtpInput