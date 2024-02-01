import logo from './logo.png';
import './App.css';
import { ArrowRight } from 'lucide-react'
import { useState } from 'react';
import Whiteboard from './components/whiteboard';

function App() {

  // const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <header className="App-header">
        <section>
         
              <Whiteboard  />


          {/* </div> */}
        </section>

      </header>
    </div>
  );
}

export default App;

