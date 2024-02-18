import React from 'react'

const Form = () => {
    return (
        <div className='form'>


            <form>
                <label>Name</label>
                <br />
                <input type="text" name="name" /><br />
                <label>Email</label>
                <br />
                <input type="email" name="email" /><br />
                <button onClick={(e) => alert('Your message has been sent!')}>Submit</button>

            </form>


        </div>
    )
}

export default Form