import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <nav className=''>
            {/* <NavLink to="/">Shop</NavLink>        */}
                {user.email && <span style={{ color: 'red' }}>Hello: {user.displayName} </span>}
                {user.email ? <button onClick={logout}>Logout</button>
                    : <NavLink to="/">Log in</NavLink>}
        </nav>
    );
};

export default Header;