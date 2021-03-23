import React, { useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

import './Canvas.css'


export default function Canvas({ file, url, handleFileChange, handleUpload }) {


    const [canvasState, setCanvasState] = useState({
        color: "#ffc600",
        width: 800,
        height: 500,
        brushRadius: 5,
        lazyRadius: 0,
      })

      const [imageState, setImageState] = useState({
        imgSrc: "https://i1.wp.com/www.southwestconferenceblog.org/wp-content/uploads/2018/05/this-is-a-test-wp.png?fit=825%2C510"
    })

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
          <div className="canvas-attributes">
                  <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFileChange} />
          <button disabled={!file}>Upload</button>
        </form>
        <img src={url} alt="" />
            <div className="canvas-controls">
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

                <div>
                    <label>Width:</label>
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
        </div>
        
        <CanvasDraw
          ref={canvas}
          brushColor={canvasState.color}
          brushRadius={canvasState.brushRadius}
          lazyRadius={canvasState.lazyRadius}
          canvasWidth={canvasState.width}
          canvasHeight={canvasState.height}
          imgSrc= {url}
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