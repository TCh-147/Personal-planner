import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1 className='py-10 text-4xl tracking-wide font-semibold text-center bg-gray-100'>Planner</h1>
    <App />
  </React.StrictMode>
);