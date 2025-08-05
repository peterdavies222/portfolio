import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomeView from './views/HomeView'
import ProjectsView from './views/ProjectsView'
import ContactView from './views/ContactView'

const Home= () => <HomeView />
const Projects = () => <ProjectsView />
const Contact = () => <ContactView />

import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
