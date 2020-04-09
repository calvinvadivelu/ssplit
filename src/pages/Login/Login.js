import React from 'react';

import Header from '../../components/Header/Header';
import LoginBox from '../../components/LoginBox/LoginBox';
import './Login.scss';

const Login = ({ history }) => {


    return (
        <div className='loginpage'>
            <div className="page">
                <Header/>
                <LoginBox
                history= { history }
                />
            </div>
        </div>
    );
};

export default Login;