import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='SearchContainer'>
          <div className='InputContainer'>
            <input
              className='Input'
              type='text'
              placeholder='Search for a movie or TV show'
            />
            <span className='Search'>Search</span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
