import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Whiteboard = ({ brushSize, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      // Initialize the canvas
      const canvas = new fabric.Canvas('whiteboard', {
        isDrawingMode: true,
        selection: false,
      });
      canvas.setWidth(600);
      canvas.setHeight(600);
      canvas.setBackgroundColor('#fff', canvas.renderAll.bind(canvas));

      // Save the canvas reference
      canvasRef.current = canvas;
    }

    // Update brush size and color
    if (brushSize !== undefined) {
      canvasRef.current.freeDrawingBrush.width = brushSize;
    }
    if (color !== undefined) {
      canvasRef.current.freeDrawingBrush.color = color;
    }
  }, [brushSize, color]);

  return (
    <canvas
      id="whiteboard"
      width="600"
      height="600"
      className=''
      style={{ border: '2px solid #000', borderRadius: '20px' }}
    ></canvas>
  );
};

export default Whiteboard;
