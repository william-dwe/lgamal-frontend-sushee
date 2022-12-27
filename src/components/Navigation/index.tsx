import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import './index.scss'

export default function Navigation(): JSX.Element {
    const handleHidingNavOnScroll = (e: any) => {
        console.log('scrollTop: ', e.currentTarget.scrollTop);
        console.log('offsetHeight: ', e.currentTarget.offsetHeight);
  };

    return (
        <div onScroll={handleHidingNavOnScroll}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <nav>
                <p className='logo'>Sushee!</p>
                <div className='navbar'>
                    <span><NavLink to='/'>Home</NavLink></span>
                    <span><NavLink end to='profile'>Profile</NavLink></span>
                    <span><NavLink to='topup'>Topup</NavLink></span>
                    <span><NavLink to='games'>Games</NavLink></span>
                </div>
            </nav>

            <button
                type="button"
                id='goToTop'
                className="btn btn-dark btn-floating"
                onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}
            >
                <p>UP!</p>
            </button>
            <Outlet/>
        </div >
    )
}