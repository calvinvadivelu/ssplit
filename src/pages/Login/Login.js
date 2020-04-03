import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import FormInput from '../../components/FormInput/FormInput';

import { auth } from '../../firebase/firebase.utils';

import './Login.scss';

const Login = (props) => {

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
        props.history.push('/')
    }

    const signin = async e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).catch(e => {
            console.log('e.code :', e.code);
            console.log('e.message :', e.message);
        })
        props.history.push('/')
    }

    return (
        <div className='loginpage'>
            <div className="page">
                <Header/>
                <div className="loginpage__box">
                    {loginView ? 
                    <>
                        <div className="loginpage__box-title">LOG IN</div>
                        <form action="submit" onSubmit={signin}>
                            <div className="loginpage__box-email">
                                <FormInput
                                    id='email'
                                    type='email'
                                    label='Email'
                                    value={email}
                                    handleChange={e => setEmail(e.target.value)}
                                    autoComplete="email"
                                />
                            </div>
                            <div className="loginpage__box-password">
                                <FormInput
                                    id='password'
                                    type='password'
                                    label='Password'
                                    value={password}
                                    handleChange={e => setPassword(e.target.value)}
                                    autoComplete="password"
                                />
                            </div>
                            <button className='loginpage__box-btn' type="submit">LOG IN</button>
                        </form>
                    </>
                    :
                    <>
                        <div className="loginpage__box-title">SIGN UP</div>
                        <form action="submit" onSubmit={signup}>
                            <div className="loginpage__box-email">
                                <FormInput
                                    id='email'
                                    type='email'
                                    label='Email'
                                    value={email}
                                    handleChange={e => setEmail(e.target.value)}
                                    autoComplete="email"
                                />
                            </div>
                            <div className="loginpage__box-names">
                                <div className="loginpage__box-names-first">
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
                                <div className="loginpage__box-names-last">
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
                            <div className="loginpage__box-password">
                                <FormInput
                                    id='password'
                                    type='password'
                                    label='Password'
                                    value={password}
                                    handleChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="loginpage__box-confirmpassword">
                                <FormInput
                                    id='confirmPassword'
                                    type='password'
                                    label='Confirm Password'
                                    value={confirmPassword}
                                    handleChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                            <button className='loginpage__box-btn' type="submit">SIGN UP</button>
                        </form>
                    </>
                    }
                    <span className="loginpage__box-btnlabel">{loginView ? "Don't have" : 'Already have'} an account?   </span>
                    <span className="loginpage__box-switch" onClick={() => setLoginView({loginView: !loginView})}>{!loginView ? 'LOG IN' : 'SIGN UP'}</span>
                </div>
            </div>
        </div>
    );
};

export default Login;