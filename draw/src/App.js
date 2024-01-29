import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import './App.css';

const DrawingApp = () => {
  const canvasRef = useRef(null);
  const [drawingData, setDrawingData] = useState([]);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      isDrawingMode: true,
    });

    // Keep track of paths manually
    let currentPath = null;

    canvas.on('path:created', (event) => {
      currentPath = event.path;
      setDrawingData((prevData) => [...prevData, currentPath.toObject()]);
    });

    canvas.on('mouse:up', () => {
      currentPath = null;
      saveDrawing();
    });

    // Cleanup the Fabric.js canvas on component unmount
    return () => {
      canvas.dispose();
    };
  }, []);

  const saveDrawing = () => {
    // If you want to visualize the drawing data, you can log it to the console
    console.log('Drawing Data:', drawingData);
  };

  return (
    <div>
      <canvas ref={canvasRef} style={{ border: '1px solid #000' }} />
      <br />
      <button onClick={saveDrawing}>Save</button>
    </div>
  );
};

export default DrawingApp;
