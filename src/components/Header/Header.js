import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
const Header = () => {
    return (
        <div className="header">
            <div className="header__company">
                <Link className="header__company-logo" to='/'></Link>
                <Link className="header__company-name" to='/'>ssplit</Link>
            </div>
            <div className="header__btns">
                <Link className="header__btns-info" to='/info'>how it works?</Link>
                <Link className="header__btns-signup" to='/signup'>sign up</Link>
            </div>
        </div>
    );
};

export default Header;