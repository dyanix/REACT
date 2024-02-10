import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [password, setPassword] = useState(false)
  

  const handleshow = () => {
    setPassword(!password)
   
  }
  return (
    <div className="App">
      <header className="App-header">
        <input type={!password ? "text" : "password"} ></input>
        <button onClick={handleshow}>{!password ?"Dontshow" :"showme"}</button>
      </header>
    </div>
  );
}

export default App;
