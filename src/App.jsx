import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ProjectsView from './views/ProjectsView'
import AboutView from './views/AboutView'
import ContactView from './views/ContactView'

import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectsView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </Router>
  )
}

export default App
