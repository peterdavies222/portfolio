import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/master.scss'
import App from './App.jsx'

const splashScreen = document.getElementById('splash')
window.onload = function() {
  splashScreen.classList.add('hidden')
  setTimeout(() => {
    splashScreen.remove()
  }, 1500)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
