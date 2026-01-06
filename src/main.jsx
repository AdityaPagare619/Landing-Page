import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DeviceProvider } from './contexts/DeviceContext'
import './index.css'
import './custom.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DeviceProvider>
      <App />
    </DeviceProvider>
  </StrictMode>,
)
