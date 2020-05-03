import React, { useState } from 'react';

import { auth } from '../../firebase/firebase.utils';
import { createUser } from '../../api/user.api';
import FormInput from '../../components/FormInput/FormInput';


import './LoginBox.scss'
const LoginBox = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loginView, setLoginView] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const signup = async e => {
        e.preventDefault();
        let error = false
        await auth.createUserWithEmailAndPassword(email, password)
        .catch(e => {
            setErrorMessage(e.message);
            error = true
            console.log('e.code :', e.code); 
        })
        if (error) return;
        await createUser(`${firstName} ${lastName}`, email)
        
        onLogin();
    }

    const signin = async e => {
        e.preventDefault();
        let error = false
        await auth.signInWithEmailAndPassword(email, password)
        .catch(e => {
            setErrorMessage(e.message)
            error = true
            console.log('e.code :', e.code);
        })
        if (error) return;
        onLogin();
    }

    const changeView = () => {
        setLoginView(!loginView)
        setErrorMessage('')
    }

    return (
        <div className="loginbox">
        {loginView ? 
        <>
            <form id='login' action="submit" onSubmit={signin}>
                <div className="loginbox-email">
                    <FormInput
                        id='email'
                        type='email'
                        label='Email'
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="loginbox-password">
                    <FormInput
                        id='password'
                        type='password'
                        label='Password'
                        value={password}
                        handleChange={e => setPassword(e.target.value)}
                        autoComplete="password"
                    />
                </div>
            </form>
        </>
        :
        <>
            <form id='signup' action="submit" onSubmit={signup}>
                <div className="loginbox-email">
                    <FormInput
                        id='email'
                        type='email'
                        label='Email'
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>
                <div className="loginbox-names">
                    <div className="loginbox-names-first">
                        <FormInput
                            id='firstName'
                            type='text'
                            label='First Name'
                            value={firstName}
                            style={{margin: '0'}}
                            handleChange={e => setFirstName(e.target.value)}
                            autoComplete="first name"
                        />
                    </div>
                    <div className="loginbox-names-last">
                        <FormInput
                            id='lastName'
                            type='text'
                            label='Last Name'
                            value={lastName}
                            style={{margin: '0'}}
                            handleChange={e => setLastName(e.target.value)}
                            autoComplete="last name"
                        />
                    </div>
                </div>
                <div className="loginbox-password">
                    <FormInput
                        id='password'
                        type='password'
                        label='Password'
                        value={password}
                        handleChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="loginbox-confirmpassword">
                    <FormInput
                        id='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
            </form>
        </>
        }
        {errorMessage && <div className="loginbox-error">{errorMessage}</div>}
        <div className="loginbox-footer">
            <div className="loginbox-footer__switchview">
                <span className="loginbox-footer__switchview-label">{loginView ? "don't have" : 'already have'} an account?   </span>
                <span className="loginbox-footer__switchview-btn" onClick={changeView} >{!loginView ? 'log in' : 'sign up'}</span>
            </div>
            <button className='loginbox-footer__btn' form={loginView ? 'login' : 'signup'} type="submit">{loginView ? 'log in' : 'sign up'}</button>
        </div>
    </div>
    );
};

export default LoginBox;