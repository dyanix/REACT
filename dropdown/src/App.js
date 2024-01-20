import logo from './logo.svg';
import './App.css';
import { useState } from "react"
function App() {
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: [
        "Delhi",
        "Mumbai"
      ]
    },
    {
      name: "Pakistan",
      value: "PK",
      cities: [
        "Lahore",
        "Karachi"
      ]
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: [
        "Dhaka",
        "Chittagong"
      ]
    },

  ]

  const [country, setCountry] = useState(0)
  const [city,setCity] = useState("")
  return (
    <div className="App">
      <select value={country}
        onChange={(e) => {
          const selectedIndex = parseInt(e.target.value, 10);
          
     
          setCountry(selectedIndex)
        }}>
        {
          countries.map((country,index) => {
            return (
              <option value={index}>
                {country.name}
              </option>)
          })
        }
      </select>
      <select value={city}
        onChange={(e) => {
          console.log(e.target.value);
          setCity(e.target.value)
        }}>
      {
        countries[country].cities.map((city,index)=>{
          return(
            <option key={index} value={city}>
              {city}
            </option>
          )
        })
      }
     </select>


    </div>
  );
}

export default App;
