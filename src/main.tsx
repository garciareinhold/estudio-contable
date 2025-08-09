import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import emailjs from '@emailjs/browser'

emailjs.init('LH-XfnxRwsElOxQZu')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
