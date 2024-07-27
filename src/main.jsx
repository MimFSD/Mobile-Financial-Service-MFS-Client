import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router'; // Ensure this exports a valid router object
import AuthProvider from './Components/Authentication/AuthProvider/AuthProvider'; // Ensure this path is correct
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto open-sans-font'>
          <RouterProvider router={Router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
);
