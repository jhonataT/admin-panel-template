import ReactDOM from 'react-dom/client';
import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { RouterProvider } from 'react-router-dom';
import { AllRoutes } from './routes';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={AllRoutes} />
    </ProSidebarProvider>
  </React.StrictMode>
);
