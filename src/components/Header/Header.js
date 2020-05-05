import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selector';

import logoutLogo from '../../images/logout.svg'
import './Header.scss';
const Header = ({currentUser, disableButtons}) => {
    return (
        <div className="header">
            <div className="header__company">
                <Link className="header__company-supername" to='/'>ssplit</Link>
            </div>
            <div className="header__btns">
                {currentUser ? 
                    !disableButtons && 
                    <>
                    <Link className="header__btns-new" to='/new'>ssplit a subscription</Link>
                    <Link className="header__btns-signup" to='/' onClick={() => auth.signOut()}><label>sign out</label> <img src={logoutLogo} alt='Sign Out'></img></Link>
                    </>
                    :
                    <>
                    <Link className="header__btns-info" to='/info'>how it works?</Link>
                    <Link className="header__btns-signup" to='/signup'>sign up</Link>
                    </>
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
  
export default connect(mapStateToProps, null)(Header);