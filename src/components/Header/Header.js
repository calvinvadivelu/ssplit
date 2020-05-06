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
                    <>
                    <Link id='new subscription' className={`header__btns-new ${disableButtons ? 'disabled' : ''}`} to='/new'><label htmlFor='new subscription'>ssplit a subscription</label></Link>
                    <Link id='signout' className={`header__btns-signup ${disableButtons ? 'disabled' : ''}`} to='/' onClick={() => auth.signOut()}><label htmlFor='signout'>sign out</label> <img src={logoutLogo} alt='Sign Out'></img></Link>
                    </>
                    :
                    <>
                    <Link id='moreinfo' className="header__btns-info" to='/info'><label htmlFor="moreinfo">how it works?</label></Link>
                    <Link id='signup' className="header__btns-signup" to='/signup'><label htmlFor="signup">sign up</label></Link>
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