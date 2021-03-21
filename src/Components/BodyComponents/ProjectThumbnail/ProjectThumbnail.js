import React from 'react'

import './ProjectThumbnail.css'

export default function ProjectThumbnail( { project }) {

    const { projectName, image } = project

    return (
        <div className="project-thumbnail">
            <h1>{ projectName }</h1>
            <img className='thumbnail-image' src={ image } alt={projectName}></img>
        </div>
    )
}
