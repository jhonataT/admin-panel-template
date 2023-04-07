import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { AllRoutes } from './routes';
import { theme } from './theme';
import { ThemeContext } from './context';
import { useState } from 'react';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  return <main className={`${currentTheme}-theme`}>
    <React.StrictMode>
      <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
            <RouterProvider router={AllRoutes} />
          </ProSidebarProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  </main>
}