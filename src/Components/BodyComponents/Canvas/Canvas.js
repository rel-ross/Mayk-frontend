import React, { useRef, useEffect, useState } from 'react'

import './Canvas.css'

export default function Canvas() {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.width = window.innerWidth * 0.75
        canvas.height = window.innerHeight * 0.75
        // canvas.style.width = '100%';
        // canvas.style.height = '100%';

        const context = canvas.getContext("2d")
        context.scale(1,1)
        context.lineCap = "round"
        context.strokeStyle = "black"
        context.lineWidth = 5
        contextRef.current = context
    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const {offsetX, offsetY} = nativeEvent
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const draw = ({ nativeEvent }) => {
        if(!isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)

    }

    return (
        <div>
            <canvas className="canvas"
                onMouseDown = {startDrawing}
                onMouseUp = {finishDrawing}
                onMouseMove = { draw }
                ref = { canvasRef }
            />
            
        </div>
    )
}
