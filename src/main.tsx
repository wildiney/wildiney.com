import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ReactGA from 'react-ga4';
import './index.css'

const TRACKING_ID = "G-JQ94SFZ1KH"
ReactGA.initialize(TRACKING_ID)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
