import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './Body.css'

import ProjectShowContainer from '../ProjectShowContainer/ProjectShowContainer'
import AllProjectsShowContainer from '../AllProjectsShowContainer/AllProjectsShowContainer'


export default function Body({projects}) {
    return (
        <div className="body-container">
             <Switch>
                 <Route exact path="/NewProject" render={ (routerProps) => <ProjectShowContainer projects={projects}/>} />
                 <Route exact path="/Projects" render={ (routerProps) => <AllProjectsShowContainer projects={projects}/>} />
             </Switch>
        </div>
    )
}
