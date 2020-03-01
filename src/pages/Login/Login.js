import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import PageTemplate from '../PageTemplate/PageTemplate';
import FormInput from '../../components/FormInput/FormInput';
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

    render() {
        const { email, firstName, lastName, password, confirmPassword, loginView } = this.state
        return (
            <div className='loginpage'>
                <PageTemplate>
                    <Header/>
                    <div className="loginpage__box">
                        {loginView ? 
                        <>
                            <div className="loginpage__box-title">LOG IN</div>
                            <form action="submit">
                                <div className="loginpage__box-email">
                                    <FormInput
                                        id='email'
                                        type='email'
                                        label='Email'
                                        value={email}
                                        handleChange={this.handleChange}
                                    />
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
                            </form>
                        </>
                        
                        :
                        <>
                            <div className="loginpage__box-title">SIGN UP</div>
                            <form action="submit">
                                <div className="loginpage__box-email">
                                    <FormInput
                                        id='email'
                                        type='email'
                                        label='Email'
                                        value={email}
                                        handleChange={this.handleChange}
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
                                        />
                                    </div>
                                    <div className="loginpage__box-names-last">
                                        <FormInput
                                            id='lastName'
                                            type='text'
                                            label='Last Name'
                                            value={lastName}
                                            multi={true}
                                            style={{margin: '0'}}
                                            handleChange={this.handleChange}
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
                            </form>
                        </>
                        }
                    <div className="loginpage__box-switch" onClick={() => this.setState({loginView: !loginView})}>{!loginView ? 'LOG IN' : 'SIGN UP'}</div>
                    </div>
                </PageTemplate>
            </div>
        );
    }
}

export default Login;