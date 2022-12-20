import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './index.scss'

export default function Navigation(): JSX.Element {
    return (
        <>
            <nav>
                <p className='logo'>DigiWallet</p>
                <ul className='navbar'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink end to='transfer'>Transfer</NavLink></li>
                    <li><NavLink to='topup'>Topup</NavLink></li>
                    <li><NavLink to='games'>Games</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}