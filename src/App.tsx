import React from 'react';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Profile from './pages/Auth/Profile';
import ProtectedPage from './components/ProtectedPage';
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router'
import NotFound from './pages/NotFound';


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route element={<ProtectedPage/>}>
          <Route path='/' element={<Navigation/>}>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
