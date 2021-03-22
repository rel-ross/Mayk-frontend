import './App.css';

import Header from './Containers/Header/Header'
import Body from './Containers/Body/Body'
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
      <Body projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
