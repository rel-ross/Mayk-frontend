import React from 'react'
import ProjectThumbnail from '../../Components/BodyComponents/ProjectThumbnail/ProjectThumbnail'

import './AllProjectsShowContainer.css'

export default function AllProjectsShowContainer({ projects }) {
    
    const displayProjects = () => {
        return projects.map(project => {
            return <ProjectThumbnail project={ project } key={ project.id } />
        })
    }
    
    return (
        <div className="all-projects">
        
            {displayProjects()}
        </div>
    )
}
