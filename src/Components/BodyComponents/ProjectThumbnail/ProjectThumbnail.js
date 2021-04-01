import React, { useState } from 'react'
import Canvas from '../Canvas/Canvas'

import './ProjectThumbnail.css'

export default function ProjectThumbnail( { project }) {

    const { id, projectName, image, lineCoordinates } = project

    const [openCanvas, setOpenCanvas] = useState(false)

    const thumbnailSelected = () => {
        setOpenCanvas(true)
    }

    return (
        <div>
            {openCanvas
                ? <Canvas id={ id } projectName={ projectName } imageProp={ image } lineCoordinates = { lineCoordinates } />
                : <div className="project-thumbnail" onClick={ thumbnailSelected }>
                    <h2 className='project-name'>{ projectName }</h2>
                    <img className='thumbnail-image' src={ image } alt={projectName}></img>
                </div>
            }
            
        </div>
    )
}
