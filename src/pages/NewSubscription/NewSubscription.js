import React from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { setCurrentUser } from '../../redux/user/user.actions';

import Header from '../../components/Header/Header';
import NewSubscriptionForm from '../../components/NewSubscriptionForm/NewSubscriptionForm';

import './NewSubscription.scss';
const NewSubscription = ({ currentUser, setCurrentUser }) => {

    const onSubscriptionCreated = () => {
        setCurrentUser(currentUser.email)
    }

    return (
        <div className='logged-in-page'>
            <Header disableButtons={true}/>
            <div className="newsub">
                <div className="newsub-left"></div>
                <div className="newsub-right">
                    <NewSubscriptionForm currentUser={currentUser} onSubscriptionCreated={onSubscriptionCreated}/>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewSubscription);