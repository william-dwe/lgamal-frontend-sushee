import React from 'react';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Auth/Profile';
import ShouldAuthUser from './components/AuthOutlets/ShouldAuthUser';
import ShouldNotAuth from './components/AuthOutlets/ShouldNotAuth';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router'
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "bootstrap/dist/js/bootstrap.min.js";
import Menu from './pages/Menu';
import CartOffCanvas from './components/Cart/CartOffcanvas';
import NeedAuth from './components/AuthOutlets/NeedAuth';
import ShouldAuthAdmin from './components/AuthOutlets/ShouldAuthAdmin';
import Order from './pages/Order';
import Loader from './components/Loader';


function App(): JSX.Element {
  return (
    <div className="App">
      <ToastContainer/>
        <Routes>
          <Route element={<ShouldNotAuth/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
          <Route element={<CartOffCanvas/>}>
            <Route element={<Navigation/>}>
              <Route element={<NeedAuth/>}>
                <Route path ='/' element={<Menu/>}/>
              </Route>
              <Route element={<ShouldAuthUser/>}>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/orders' element={<Order/>}/>
              </Route>
              <Route element={<ShouldAuthAdmin/>}>
                <Route path='/admin' element={<h1>admin page</h1>}/>
                <Route path='/loader' element={<Loader/>}/>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
