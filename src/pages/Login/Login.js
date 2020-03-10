import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import FormInput from '../../components/FormInput/FormInput';

import { auth } from '../../firebase/firebase.utils';

import './Login.scss';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            firstName: '',
            lastName:'',
            password:'',
            confirmPassword:'',
            loginView: false,
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    
    signup = async e => {
        e.preventDefault();
        const { email, password } = this.state

        auth.createUserWithEmailAndPassword(email, password).catch(e => {
            console.log('e.code :', e.code);
            console.log('e.message :', e.message);
        })
        this.props.history.push('/')
    }

    signin = async e => {
        e.preventDefault();
        const { email, password } = this.state

        auth.signInWithEmailAndPassword(email, password).catch(e => {
            console.log('e.code :', e.code);
            console.log('e.message :', e.message);
        })
        this.props.history.push('/')
    }

    render() {
        const { email, firstName, lastName, password, confirmPassword, loginView } = this.state
        return (
            <div className='loginpage'>
                <div className="page">

                    <Header/>
                    <div className="loginpage__box">
                        {loginView ? 
                        <>
                            <div className="loginpage__box-title">LOG IN</div>
                            <form action="submit" onSubmit={this.signin}>
                                <div className="loginpage__box-email">
                                    <FormInput
                                        id='email'
                                        type='email'
                                        label='Email'
                                        value={email}
                                        handleChange={this.handleChange}
                                        autoComplete="email"
                                    />
                                </div>
                                <div className="loginpage__box-password">
                                    <FormInput
                                        id='password'
                                        type='password'
                                        label='Password'
                                        value={password}
                                        handleChange={this.handleChange}
                                        autoComplete="password"
                                    />
                                </div>
                                <button className='loginpage__box-btn' type="submit">LOG IN</button>
                            </form>
                        </>
                        
                        :
                        <>
                            <div className="loginpage__box-title">SIGN UP</div>
                            <form action="submit" onSubmit={this.signup}>
                                <div className="loginpage__box-email">
                                    <FormInput
                                        id='email'
                                        type='email'
                                        label='Email'
                                        value={email}
                                        handleChange={this.handleChange}
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
                                            handleChange={this.handleChange}
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
                                            handleChange={this.handleChange}
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
                                        handleChange={this.handleChange}
                                    />
                                </div>
                                <div className="loginpage__box-confirmpassword">
                                    <FormInput
                                        id='confirmPassword'
                                        type='password'
                                        label='Confirm Password'
                                        value={confirmPassword}
                                        handleChange={this.handleChange}
                                    />
                                </div>
                                <button className='loginpage__box-btn' type="submit">SIGN UP</button>
                            </form>
                        </>
                        }
                        <span className="loginpage__box-btnlabel">{!loginView ? "Don't have" : 'Already have'} an account?</span>
                        <span className="loginpage__box-switch" onClick={() => this.setState({loginView: !loginView})}>{!loginView ? 'LOG IN' : 'SIGN UP'}</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;