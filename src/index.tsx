import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/LoginPages';
import './utils/App.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<LoginPage />);

