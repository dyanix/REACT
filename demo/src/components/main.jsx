import { useState } from 'react';



import Whiteboard from './whiteboard';
import logo from "../logo.png"
const Main = () => {
  const [brushSize, setBrushSize] = useState(5);
  const [color, setColor] = useState('black');


  return (
    <>
      <div className=" items-center justify-center h-screen grid grid-row-2  bg-white">
        <div className="bg-gray-800 p-2 text-white mb-4 rounded-md ">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-semibold mr-7">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-6 w-6 mr-2" />
                <b>Dendrite</b>
              </div>
            </div>
            <div className="flex space-x-4">
            
              <div className="flex items-center">
              <label htmlFor="brush" className="ml-5 mr-5">
                  Brush
                </label>
                <input
                  type="range"
                  id="brushSize"
                  name="brushSize"
                  min="1"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
                  className="mr-2 bg-gray-700 text-white p-1 rounded"
                />
              
              </div>
              <div className="flex items-center">
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    marginRight: '0.5rem',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    border: '1px solid white',
                    boxShadow: '0 0 0 4px white',
                  }}
                />
                <label htmlFor="color" className="ml-2">
                  Color
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-10   ">
          <Whiteboard brushSize={brushSize} color={color} />
        </div>
      </div>
    </>
  );
};

export default Main;
