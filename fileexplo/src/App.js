
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/theme-context';

function App() {

  const data = {
    Name: "Dyanesh",
    Age: 22
  }

  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />} ></Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
