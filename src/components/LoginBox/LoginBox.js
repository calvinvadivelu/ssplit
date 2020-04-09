import React, { useState } from 'react';

import { auth } from '../../firebase/firebase.utils';
import FormInput from '../../components/FormInput/FormInput';

import './LoginBox.scss'
const LoginBox = ({ history }) => {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loginView, setLoginView] = useState(false)

    const signup = async e => {
        e.preventDefault();
        await auth.createUserWithEmailAndPassword(email, password).then((userData) => {
            userData.user.updateProfile({
                displayName: `${firstName} ${lastName}`
            })
        })
        .catch(e => {
            console.log('e.code :', e.code); 
            console.log('e.message :', e.message);
        })
        history.push('/')
    }

    const signin = async e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).catch(e => {
            console.log('e.code :', e.code);
            console.log('e.message :', e.message);
        })
        history.push('/')
    }



    return (
        <div className="loginbox">
        {loginView ? 
        <>
            <div className="loginbox-title">LOG IN</div>
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
                <button className='loginbox-btn' type="submit">LOG IN</button>
            </form>
        </>
        :
        <>
            <div className="loginbox-title">SIGN UP</div>
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
                <button className='loginbox-btn' type="submit">SIGN UP</button>
            </form>
        </>
        }
        <span className="loginbox-btnlabel">{loginView ? "Don't have" : 'Already have'} an account?   </span>
        <span className="loginbox-switch" onClick={() => setLoginView({loginView: !loginView})}>{!loginView ? 'LOG IN' : 'SIGN UP'}</span>
    </div>
);
};

export default LoginBox;