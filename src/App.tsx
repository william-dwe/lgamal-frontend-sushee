import React from 'react';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Auth/Profile';
import ShouldAuth from './components/AuthOutlets/ShouldAuth';
import ShouldNotAuth from './components/AuthOutlets/ShouldNotAuth';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router'
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menu from './pages/Menu';


function App(): JSX.Element {
  return (
    <div className="App">
      <ToastContainer/>
        <Routes>
          <Route element={<ShouldNotAuth/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
          <Route element={<ShouldAuth/>}>
            <Route path='/' element={<Navigation/>}>
              <Route path ='/' element={<Menu/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
