import React, { useState } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './Body.css'

import NewProjectContainer from '../NewProjectContainer/NewProjectContainer'
import AllProjectsShowContainer from '../AllProjectsShowContainer/AllProjectsShowContainer'
import LoginPage from '../LoginPage/LoginPage'
import Canvas from '../../Components/BodyComponents/Canvas/Canvas'

export default function Body({projects}) {



    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    return (
        <div className="body-container">
             <Switch>
                 <Route exact path="/" render={ (routerProps) => <LoginPage />} />
                 <Route exact path="/NewProject" render={ (routerProps) => <NewProjectContainer 
                    projects={projects} url={url} file={ file }  
                />} />
                 <Route exact path="/Projects" render={ (routerProps) => <AllProjectsShowContainer projects={projects}/>} />
             </Switch>
        </div>
    )
}
