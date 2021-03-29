import React, { useState } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import {storage} from "../../firebase/firebase"

import './Body.css'

import NewProjectContainer from '../NewProjectContainer/NewProjectContainer'
import AllProjectsShowContainer from '../AllProjectsShowContainer/AllProjectsShowContainer'
import LoginPage from '../LoginPage/LoginPage'

export default function Body({projects}) {

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    
  
    function handleFileChange(e) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0])
    }
  
    function handleUpload(e) {
      e.preventDefault();
      const uploadTask = storage.ref(`/${file.name}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("/")
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
                 <Route exact path="/" render={ (routerProps) => <LoginPage />} />
                 <Route exact path="/NewProject" render={ (routerProps) => <NewProjectContainer 
                    projects={projects} url={url} file={ file }  handleUpload={ handleUpload } 
                    handleFileChange={ handleFileChange }
                />} />
                 <Route exact path="/Projects" render={ (routerProps) => <AllProjectsShowContainer projects={projects}/>} />
             </Switch>
        </div>
    )
}
