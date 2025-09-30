import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './utils/App.css'
import { ToastContainer } from 'react-toastify';

// import pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


const route = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginPage/>} />
    <Route path='/register' element={<RegisterPage/>} />
  </Routes>
  <ToastContainer/>
</BrowserRouter>

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(route);

