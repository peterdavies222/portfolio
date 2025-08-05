import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/vars.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/contact.css'
import './styles/project.css'

import './styles/projectsview.css'
import './styles/contactview.css'
import './styles/homeview.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
