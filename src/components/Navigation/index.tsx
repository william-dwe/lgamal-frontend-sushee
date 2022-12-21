import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './index.scss'

export default function Navigation(): JSX.Element {
    return (
        <>
            <nav>
                <p className='logo'>Resto</p>
                <ul className='navbar'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink end to='profile'>Profile</NavLink></li>
                    <li><NavLink to='topup'>Topup</NavLink></li>
                    <li><NavLink to='games'>Games</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}