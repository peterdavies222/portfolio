import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProjectsView from './views/ProjectsView'
import AboutView from './views/AboutView'
import ContactView from './views/ContactView'

import Header from './components/Header'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectsView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </Router>
  )
}

export default App
