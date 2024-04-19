import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const Root = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.hydrateRoot(document.getElementById('root')!, Root);
