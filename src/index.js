import React from 'react';
import ReactDOM from 'react-dom/client';
import { AllRoutes } from './routes';
import { RouterProvider } from 'react-router-dom';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={AllRoutes} />
  </React.StrictMode>
);
