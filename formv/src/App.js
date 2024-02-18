import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault()


  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })

  }

  return (
    <div className="App">



      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            placeholder='Your name here...'
            name='Name'
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            placeholder='Your email address here...'
            name='Email'
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div>


          <label>Password:</label>

          <input
            type={ "password" }
            placeholder='Your password here...'
            name='Password'
            value={formData.Password}
            onChange={handleChange}

          />
        
    
        </div>
        <div>
        <button>
          Submit
        </button>
        </div>
      </form>
     



    </div>

  );
}

export default App;
