
import logo from "../logo.png"

import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import 'fabric-history';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('black');
  const [brushSize, setBrushSize] = useState(5);


  useEffect(() => {
    if (!canvasRef.current) {
      // Initialize the canvas
      const canvas = new fabric.Canvas('whiteboard', {
        isDrawingMode: true,
        selection: false,
      });

      // Add undo and redo support
      canvas.historyUndo = [];
      canvas.historyRedo = [];

      // Save the initial state
      saveState(canvas);

      // Save the canvas reference
      canvasRef.current = canvas;
      canvas.setWidth(600);
      canvas.setHeight(600);
      canvas.setBackgroundColor('#fff', canvas.renderAll.bind(canvas));

      // Add event listener for mouse or touch events
      canvasRef.current.on('mouse:down', logCoordinates);
      canvasRef.current.on('mouse:move', logCoordinates);
      canvasRef.current.on('mouse:up', logCoordinates);

      // Event listener for history changes
      canvasRef.current.on('history:append', () => {
        console.log('History appended');
      });
      canvasRef.current.on('history:undo', () => {
        console.log('Undo');
      });
      canvasRef.current.on('history:redo', () => {
        console.log('Redo');
      });
      canvasRef.current.on('history:clear', () => {
        console.log('History cleared');
      });
    }

    // Update brush size and color
    if (brushSize !== undefined) {
      canvasRef.current.freeDrawingBrush.width = brushSize;
    }
    if (color !== undefined) {
      canvasRef.current.freeDrawingBrush.color = color;
    }

    // Cleanup event listeners when component unmounts
    return () => {
      canvasRef.current.off('mouse:down', logCoordinates);
      canvasRef.current.off('mouse:move', logCoordinates);
      canvasRef.current.off('mouse:up', logCoordinates);
    };
  }, [brushSize, color]);

  const logCoordinates = (event) => {
    const pointer = canvasRef.current.getPointer(event.e);
    console.log(`X: ${pointer.x}, Y: ${pointer.y}`);
  };

  const saveState = (canvas) => {
    const jsonData = JSON.stringify(canvas.toDatalessJSON());
    canvas.historyUndo.push(jsonData);
    canvas.historyRedo = [];
  };

  const handleUndo = () => {
    canvasRef.current.undo(() => {
      console.log('Post Undo');
    });
  };

  const handleRedo = () => {
    canvasRef.current.redo(() => {
      console.log('Post Redo');
    });
  };

  const handleClear = () => {
    canvasRef.current.clear();
    saveState(canvasRef.current);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleBrushSize = (e) => {
    setBrushSize(parseInt(e.target.value, 10))
  };


  return (
    <>
      <div className=" items-center justify-center h-screen grid grid-row-2  bg-white">
        <div className="bg-gray-800 p-2 text-white mb-4 rounded-md flex space-x-4">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-6 w-6 mr-2" />
            <b>Draweze</b>
          </div>
          <button
            onClick={handleUndo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Undo
          </button>
          <button
            onClick={handleRedo}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Redo
          </button>
          <button
            onClick={handleClear}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear
          </button>
          <div className="flex items-center">
            <input
              type="color"
              id="color"
              name="color"
              value={color}
              onChange={handleColorChange}
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
              onChange={handleBrushSize}
              className="mr-2 bg-gray-700 text-white p-1 rounded"
            />

          </div>

        </div>


        <canvas
          id="whiteboard"
          width="600"
          height="600"
          className=""
          style={{ border: '2px solid #000', borderRadius: '20px' }}
        ></canvas>
      </div>
    </>
  );
};

export default Whiteboard;

