import React, { useState } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import {storage} from "../../firebase/firebase"

import './Body.css'

import ProjectShowContainer from '../ProjectShowContainer/ProjectShowContainer'
import AllProjectsShowContainer from '../AllProjectsShowContainer/AllProjectsShowContainer'


export default function Body({projects}) {

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    
  
    function handleFileChange(e) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0])
    }
  
    function handleUpload(e) {
      e.preventDefault();
      const uploadTask = storage.ref(`/images/${file.name}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setURL(url);
          });
      });
    }



    return (
        <div className="body-container">
             <Switch>
                 <Route exact path="/NewProject" render={ (routerProps) => <ProjectShowContainer 
                    projects={projects} url={url} file={ file }  handleUpload={ handleUpload } 
                    handleFileChange={ handleFileChange }
                />} />
                 <Route exact path="/Projects" render={ (routerProps) => <AllProjectsShowContainer projects={projects}/>} />
             </Switch>
        </div>
    )
}
