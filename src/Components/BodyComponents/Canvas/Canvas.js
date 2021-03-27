import React, { useRef, useState, useEffect } from 'react'
import CanvasDraw from "react-canvas-draw";
import UndoIcon from '@material-ui/icons/Undo';
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

import './Canvas.css'


export default function Canvas({ file, image, handleFileChange, handleUpload, displayedProject, projectName }) {

    const { lineCoordinates } = displayedProject
    const [canvasState, setCanvasState] = useState({
        color: "#000000",
        width: 800,
        height: 500,
        brushRadius: 5,
        lazyRadius: 0,
        hideGrid: true
      })

      const canvas = useRef();


      const saveDrawingToDatabase = (projectName, lineCoordinates, image) => {
        fetch('http://localhost:4000/drawings', {
            method: "POST",
            headers: {
                "Content-type": "application/json" 
            },
            body: JSON.stringify(
                { projectName, lineCoordinates, image }
            )
        })
      }
      

    return (
        <div>
        <h1>{ projectName }</h1>
            <div className="canvas-toolbar">
                <button
                    onClick={() => {
                        localStorage.setItem(
                            "savedDrawing",
                            canvas.current.getSaveData()
                        )
                        saveDrawingToDatabase("TEST project", localStorage.getItem("savedDrawing"), image)
                    }}
                >
                 <SaveIcon style={{fill: "orange"}}/>
                </button>

                <button
                    onClick={() => {
                    canvas.current.clear();
                    }}
                >
                    <ClearIcon style={{fill: "orange"}}/>
                </button>

                <button
                    onClick={() => {
                    canvas.current.undo();
                    }}
                >
                    <UndoIcon style={{fill: "orange"}}/>
                </button>

                <div>
                    <label>Width</label>
                    <input
                    type="number"
                    value={canvasState.width}
                    onChange={e =>
                        setCanvasState({ width: parseInt(e.target.value, 10) })
                    }
                    />
                </div>

                <div>
                    <label>Height:</label>
                    <input
                    type="number"
                    value={canvasState.height}
                    onChange={e =>
                        setCanvasState({ height: parseInt(e.target.value, 10) })
                    }
                    />
                </div>

                <div>
                    <label>Brush-size:</label>
                    <input
                    type="number"
                    value={canvasState.brushRadius}
                    onChange={e =>
                        setCanvasState({ brushRadius: parseInt(e.target.value, 10) })
                    }
                    />
                </div>
             </div>      
        <CanvasDraw
          ref={canvas}
          brushColor={canvasState.color}
          brushRadius={canvasState.brushRadius}
          lazyRadius={canvasState.lazyRadius}
          canvasWidth={canvasState.width}
          canvasHeight={canvasState.height}
          imgSrc= "https://i.imgur.com/dQtQ95m.jpg"
          hideGrid={canvasState.hideGrid}
          loadTimeOffset = {0}
        />
            
        <button
          onClick={() => {
            canvas.current.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Loads previous drawing
        </button>
    </div>
    )
}