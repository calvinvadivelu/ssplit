import React from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selector';
import NewSubscriptionForm from '../../components/NewSubscriptionForm/NewSubscriptionForm';

import './NewSubscription.scss';
const NewSubscription = ({ currentUser }) => {


    return (
        <div className='logged-in-page newsub'>
            <div className="newsub-left"></div>
            <div className="newsub-right">
                <NewSubscriptionForm currentUser={currentUser} />
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})
export default connect(mapStateToProps, null)(NewSubscription);