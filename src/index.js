import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct
import './styles/index.css'; // Ensure the file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
