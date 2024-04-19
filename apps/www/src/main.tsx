import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '~/providers';

import App from './App.tsx';
import { Layout } from './components/index.ts';

const Root = (
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='theme'>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.hydrateRoot(document.getElementById('root')!, Root);
