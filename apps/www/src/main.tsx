import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryProvider, ThemeProvider } from '~/providers';

import App from './App.tsx';

const Root = (
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.hydrateRoot(document.getElementById('root')!, Root);
