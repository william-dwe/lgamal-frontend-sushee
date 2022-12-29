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
import CartOffCanvas from './components/Cart/CartOffcanvas';


function App(): JSX.Element {
  return (
    <div className="App">
      <ToastContainer/>
        <Routes>
          <Route element={<ShouldNotAuth/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            {/* todo: 
            1. bikin navigation khusus non-auth
            2. bikin routing menu untuk non-auth
            <testing>
            3. hook/middleware/ anything utk tendang ke login when click cart di card menu/promo (?) tbd */}
          </Route>
          <Route element={<ShouldAuth/>}>
            <Route element={<CartOffCanvas/>}>
              <Route element={<Navigation/>}>
                {/* todo:
                1. bikin card cart [done] 
                1.b. fetch carts
                2. bikin mekanisme add cart
                3. ketika "add" diclick:
                  > change tombol add cart jadi jumlah item --> lsg fire submit cart
                    > extra: kalau rubah jumlah ke 0 --> change back to add cart, delete cart
                    > ketika jumlah berubah, fire update cart
                    > if ada custom, extend option ke bawah footer card --> radio button, default value (?)
                      > update value when clicked
                 */}
                <Route path ='/' element={<Menu/>}/>
              </Route>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
