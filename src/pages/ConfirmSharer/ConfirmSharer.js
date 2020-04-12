import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPlanDetails } from '../../api/paypal.api';

import { selectCurrentUser, selectGuestUser } from '../../redux/user/user.selector';
import { selectSubscriptionData } from '../../redux/subscription/sub.selector';
import { setSubscriptionData } from '../../redux/subscription/sub.actions';
import './ConfirmSharer.scss'
const ConfirmSharer = ({ currentUser, guestUser, history, subscriptionData }) => {
    let { planID } = useParams();
    useEffect(() => {
        if (subscriptionData === null) { //re-get the subscription data if they refresh the page
            getPlanDetails(planID).then(response => {
                console.log('response plan details:', response);
                setSubscriptionData(response)
            })
        }
    })
    
    useEffect(() => {
        if (!currentUser && !guestUser) history.push(`/new/${planID}`)
    }, [currentUser, guestUser, history, planID])
    
    const { name, price, sharers, ownerInfo } = subscriptionData
    
    return (
        <div className='logged-in-page sharerconfirm'>
            {/* only show header content if the user is logged in */}
            <header></header>
            <section className='sharerconfirm-left'>
                Subscription Name: {name} 
                <br/>
                Total Subscription Price: {price}
                <br/>
                Subscription Price per Sharer: {price/(sharers.length + 1)}
                <br/>
                Subscription Payer: {ownerInfo.name}
                <br/>
            </section>
            <section className='sharerconfirm-right'>
                
            </section>
        </div>
    );
};

const mapStateToProps = (state) => ({
    subscriptionData: selectSubscriptionData(state),
    currentUser: selectCurrentUser(state),
    guestUser: selectGuestUser(state)
})

const mapDispatchToProps = dispatch => ({
    setSubscriptionData: subscriptionData => dispatch(setSubscriptionData(subscriptionData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSharer);