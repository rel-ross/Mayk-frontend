import React, { useRef, useEffect, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

import './Canvas.css'

import SampleImage from './empty_trailer.jpg'

export default function Canvas() {


    const [state, setState] = useState({
        color: "#ffc600",
        width: 800,
        height: 500,
        brushRadius: 5,
        lazyRadius: 0
      })

      const canvas = useRef();

    return (
        <div>
          <div className="canvas-attributes">
            <button
                onClick={() => {
                localStorage.setItem(
                    "savedDrawing",
                    canvas.current.getSaveData()
                );
                }}
            >
                Save
            </button>

            <button
                onClick={() => {
                canvas.current.clear();
                }}
            >
                Clear
            </button>

            <button
                onClick={() => {
                canvas.current.undo();
                }}
            >
                Undo
            </button>

            <div>
                <label>Width:</label>
                <input
                type="number"
                value={state.width}
                onChange={e =>
                    setState({ width: parseInt(e.target.value, 10) })
                }
                />
            </div>
            <div>
                <label>Height:</label>
                <input
                type="number"
                value={state.height}
                onChange={e =>
                    setState({ height: parseInt(e.target.value, 10) })
                }
                />
            </div>
            <div>
                <label>Brush-size:</label>
                <input
                type="number"
                value={state.brushRadius}
                onChange={e =>
                    setState({ brushRadius: parseInt(e.target.value, 10) })
                }
                />
            </div>
        </div>
        
        <CanvasDraw
          ref={canvas}
          brushColor={state.color}
          brushRadius={state.brushRadius}
          lazyRadius={state.lazyRadius}
          canvasWidth={state.width}
          canvasHeight={state.height}
          imgSrc= {"https://images.unsplash.com/flagged/photo-1556438758-872c68902f60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=753&q=80"}
        />
            
        </div>
    )
}
