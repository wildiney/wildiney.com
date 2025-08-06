import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n';
import ReactGA from 'react-ga4';
import './index.css'

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
