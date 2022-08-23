import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/generalScss/index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(<App />);