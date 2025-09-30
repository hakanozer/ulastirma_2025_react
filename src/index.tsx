import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './utils/App.css'
import { ToastContainer } from 'react-toastify';

// import pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import Control from './pages/Control';


const route = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginPage/>} />
    <Route path='/register' element={<RegisterPage/>} />
    <Route path='/dashboard' element={<Control item={<DashboardPage/>} /> } />
  </Routes>
  <ToastContainer/>
</BrowserRouter>

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(route);

