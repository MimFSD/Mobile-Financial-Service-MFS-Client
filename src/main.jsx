import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='max-w-screen-xl mx-auto open-sans-font'>

      <RouterProvider router={Router} />

    </div>
    
  </React.StrictMode>,
)
