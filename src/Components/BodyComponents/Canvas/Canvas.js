import React, { useRef, useState, useEffect } from 'react'
import CanvasDraw from "react-canvas-draw";

import './Canvas.css'


export default function Canvas({ file, url, handleFileChange, handleUpload }) {


    const [state, setState] = useState({
        color: "#ffc600",
        width: 800,
        height: 500,
        brushRadius: 5,
        lazyRadius: 0,
        hideGrid: true,
      })

    //   const [imageState, setImageState] = useState({
    //     imgSrc: url
    // })
      const canvas = useRef();
      const testImage = "https://i1.wp.com/www.southwestconferenceblog.org/wp-content/uploads/2018/05/this-is-a-test-wp.png?fit=825%2C510"

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
                <button
                    onClick={() => {
                        localStorage.setItem(
                            "savedDrawing",
                            canvas.current.getSaveData()
                        )
                        saveDrawingToDatabase("TEST project", localStorage.getItem("savedDrawing"), testImage)
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

                <form>
                    <label>Width:</label>
                    <input
                    type="number"
                    value={state.width}
                    onChange={e =>
                        setState({ width: parseInt(e.target.value, 10) })
                    }
                    />

                    <label>Height:</label>
                    <input
                    type="number"
                    value={state.height}
                    onChange={e =>
                        setState({ height: parseInt(e.target.value, 10) })
                    }
                    />

                    <label>Brush-size:</label>
                    <input
                    type="number"
                    value={state.brushRadius}
                    onChange={e =>
                        setState({ brushRadius: parseInt(e.target.value, 10) })
                    }
                    />
                </form>
        
        <CanvasDraw
          ref={canvas}
          brushColor={state.color}
          brushRadius={state.brushRadius}
          lazyRadius={state.lazyRadius}
          canvasWidth={state.width}
          canvasHeight={state.height}
          imgSrc= "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bedroom_Mitcham.jpg"
          hideGrid={state.hideGrid}
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