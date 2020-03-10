import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './Header.scss';
const Header = ({currentUser}) => {
    return (
        <div className="header">
            <div className="header__company">
                <Link className="header__company-logo" to='/'></Link>
                <Link className="header__company-name" to='/'>ssplit</Link>
            </div>
            <div className="header__btns">
                <Link className="header__btns-info" to='/info'>how it works?</Link>
                {currentUser ? 
                    <Link className="header__btns-signup" to='/' onClick={() => auth.signOut()}>sign out</Link>
                    :
                    <Link className="header__btns-signup" to='/signup'>sign up</Link>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
  
export default connect(mapStateToProps, null)(Header);