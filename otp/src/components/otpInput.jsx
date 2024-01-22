import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ length, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const inputRefs = useRef([])

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()

        }
    }, [])

    const handleChange = (event, index) => {


        const value = event.target.value;
        console.log(value);

        if (isNaN(value)) return;

        const newOtp = [...otp];
        //one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus()

        }
        const combinedotp = newOtp.join("")
        if (combinedotp.length === length) {

            onOtpSubmit(combinedotp)
        }

        //move next




    };

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1)

        //optional feature

        if(index>0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus()

        }

    }
    const handleKeyDown = (index,e) => {
        if(e.key ==="Backspace" && !otp[index] && index>0 && inputRefs.current[index - 1]){
            //backspace
            inputRefs.current[index - 1].focus()


        }

    }


    return (

        <div >
            {
                otp.map((value, index) => {
                    return (
                        <input
                            ref={(input) => (inputRefs.current[index] = input)}
                            style={{ width: "40px", height: "40px", margin: "5px", textAlign: "center", borderRadius: "10px" }}
                            key={index}
                            type='text'
                            value={value}
                            onChange={(event) => handleChange(event, index)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    )
                })
            }

        </div>


    )
}

export default OtpInput