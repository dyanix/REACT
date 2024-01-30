


import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import 'fabric-history';

const Whiteboard = ({ brushSize, color }) => {
  const canvasRef = useRef(null);

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

  return (
    <>
  <div className="bg-gray-800 p-2 text-white mb-4 rounded-md flex space-x-4">
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
</div>

     
      <canvas
        id="whiteboard"
        width="600"
        height="600"
        className=""
        style={{ border: '2px solid #000', borderRadius: '20px' }}
      ></canvas>
     
    </>
  );
};

export default Whiteboard;

