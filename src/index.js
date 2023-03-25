import ReactDOM from 'react-dom/client';
import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { RouterProvider } from 'react-router-dom';
import { AllRoutes } from './routes';
import './global.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <RouterProvider router={AllRoutes} />
      </ProSidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
