import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { AllRoutes } from './routes';
import { theme } from './theme';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <RouterProvider router={AllRoutes}/>
      </ProSidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
