import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './index.scss'
import Cart from '../Cart';
import {BiUpArrow} from 'react-icons/bi'

export default function Navigation(): JSX.Element {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <nav>
                <p className='logo'>Sushee!</p>
                <div className='navbar'>
                    <span><NavLink to='/'>Home</NavLink></span>
                    <span><NavLink end to='profile'>Profile</NavLink></span>
                    <span><NavLink to='games'>Games</NavLink></span>
                    <Cart/>
                    {/* todo: add cart button here, with fetch cart endpoint [done]. If data exist --> set notif icon */}
                </div>
            </nav>

            <button
                type="button"
                id='goToTop'
                className="btn btn-dark btn-floating"
                onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
            >
                <span><BiUpArrow/></span>
            </button>
            <Outlet/>
        </div >
    )
}