import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '~/providers';

import App from './App.tsx';

const Root = (
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.hydrateRoot(document.getElementById('root')!, Root);
