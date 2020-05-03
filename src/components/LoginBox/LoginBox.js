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

    const signup = async e => {
        e.preventDefault();
        await auth.createUserWithEmailAndPassword(email, password)
        .catch(e => {
            console.log('e.code :', e.code); 
            console.log('e.message :', e.message);
        })
        await createUser(`${firstName} ${lastName}`, email)

        onLogin();
    }

    const signin = async e => {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(email, password)
        .catch(e => {
            console.log('e.code :', e.code);
            console.log('e.message :', e.message);
        })
        
        onLogin();
    }



    return (
        <div className="loginbox">
        {loginView ? 
        <>
            <form action="submit" onSubmit={signin}>
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
                <div className="loginbox-container">
                    <button className='loginbox-btn' type="submit">log in</button>
                </div>
            </form>
        </>
        :
        <>
            <form action="submit" onSubmit={signup}>
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
                <div className="loginbox-container">
                    <button className='loginbox-btn' type="submit">sign up</button>
                </div>
            </form>
        </>
        }
        <div className="loginbox-switch">
            <span className="loginbox-switch__label">{loginView ? "don't have" : 'already have'} an account?   </span>
            <span className="loginbox-switch__btn" onClick={() => setLoginView(!loginView)}>{!loginView ? 'log in' : 'sign up'}</span>
        </div>
    </div>
);
};

export default LoginBox;