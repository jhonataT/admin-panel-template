import React, { useState } from 'react';
import { createServer } from "miragejs"
import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { AllRoutes } from './routes';
import { theme } from './theme';
import { ThemeContext } from './context';

import USER_DATA from './core/mocks/MOCK_USER_DATA.json';
import PROJECT_DATA from './core/mocks/MOCK_PROJECTS_DATA.json';

createServer({
  routes() {
    this.get("/api/users", () => USER_DATA);
    this.get("/api/projects", () => PROJECT_DATA);
  },
})

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