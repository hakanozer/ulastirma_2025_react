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
import ProductDetail from './pages/ProductDetail';
import Likes from './pages/Likes';
import Notfound from './pages/Notfound';
import { Provider } from 'react-redux';
import { store } from './useRedux/store';
import Users from './pages/Users';



const route = 
<Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/dashboard' element={<Control item={<DashboardPage/>} /> } />
      <Route path='/productDetail/:id' element={<Control item={<ProductDetail/>} /> } />
      <Route path='/likes' element={<Control item={<Likes/>} /> } />
      <Route path='/users' element={<Control item={<Users/>} /> } />
      <Route path='*' element={ <Notfound/> } />
    </Routes>
    <ToastContainer/>
  </BrowserRouter>
</Provider>

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(route);