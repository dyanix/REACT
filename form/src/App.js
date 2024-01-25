
import './App.css';
import { useState } from 'react';

function App() {
  const [formData,setFormData] =useState({
    username:"",
    email:""

  })
const handleInput =(e)=>{
const name = e.target.name
const value = e.target.value
setFormData((prev)=>{
  return({...prev,[name]:value})

})  



}
const handleSubmit = (e) =>{
  e.preventDefault();
  

}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Form</h1>
        <div >
         
          <form className='container' >
            <label className='l'>Name:</label>
            <input
            className='I'
              type='text'
              placeholder='Enter you Name'
              name='username'
              value={formData.username}
              onChange={handleInput}
            />
            <label className='l'>Email:</label>
            <input
              className='I'
              type='email'
              name='email'
              placeholder='Enter you Email'
              value={formData.email}
              onChange={handleInput}
            />
            <button type='submit' onClick={handleSubmit}>Submit</button>



          </form>
          
        </div>
        <p>{`your name is ${formData.username} and email is ${formData.email}`}</p>

      </header>
    </div>
  );
}

export default App;

