import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [data,setData] = useState([])


const fetchdata = async() =>{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  setData(data)



}

// useEffect(()=>{
//  fetchdata()

// },[])

  return (
    <div className="App">
       <button onClick={fetchdata}>Getdata</button>
      <ul style={{backgroundColor:"grey", cursor:'pointer'}}>{data.map((data)=>{
        return <li style={{borderColor:'black', border:"solid"}}>{data.title}</li>

      })}</ul>
     
     
    </div>
  );
}

export default App;
