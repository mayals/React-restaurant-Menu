import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// https://react-bootstrap.github.io/getting-started/introduction/#css
import 'bootstrap/dist/css/bootstrap.min.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);