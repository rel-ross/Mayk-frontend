import './App.css';

import Header from './Containers/Header/Header'
import ProjectShowContainer from './Containers/ProjectShowContainer/ProjectShowContainer'
import AllProjectsShowContainer from './Containers/AllProjectsShowContainer/AllProjectsShowContainer'
import Footer from './Containers/Footer/Footer'

import { useState, useEffect } from 'react'

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/drawings')
      .then(response => response.json())
      .then(result => {
        setProjects(result)
      })
  })

  return (
    <div className="App">
      <Header />
      <ProjectShowContainer projects={projects}/>
      <AllProjectsShowContainer projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
