import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { PayPalButton } from "react-paypal-button-v2";

import { getPlanDetails, confirmSharer } from '../../api/paypal.api';

import { selectCurrentUser, selectGuestUser } from '../../redux/user/user.selector';
import { selectSubscriptionData } from '../../redux/subscription/sub.selector';
import { setSubscriptionData } from '../../redux/subscription/sub.actions';

import './ConfirmSharer.scss'
const ConfirmSharer = ({ currentUser, guestUser, history, subscriptionData }) => {
    let { planID } = useParams();
    useEffect(() => {
        if (subscriptionData === null) {                            //re-get the subscription data if they refresh the page
            getPlanDetails(planID).then(response => {
                setSubscriptionData(response)
            })
        }
    })
    useEffect(() => {
        if (!currentUser && !guestUser) history.push(`/new/${planID}`)
    }, [currentUser, guestUser, history, planID])
    
    const { name, totalPrice, pricePerPerson, ownerInfo } = subscriptionData
    
    return (
        <div className='logged-in-page sharerconfirm'>
            {/* only show header content if the user is logged in */}
            <header></header>
            <section className='sharerconfirm-left'>
                Subscription Name: {name} 
                <br/>
                Total Subscription Price: {totalPrice}
                <br/>
                Subscription Price per Sharer: {pricePerPerson}
                <br/>
                Subscription Payer: {ownerInfo.name}
                <br/>
            </section>
            <section className='sharerconfirm-right'>
            <PayPalButton
                options={{
                    vault: true,
                }}
                createSubscription={(data, actions) => {
                    return actions.subscription.create({
                        plan_id: planID
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.subscription.get().then((details) => {
                        console.log('details :', details);
                        confirmSharer(planID, guestUser, details.id)
                    });
                }}
            />
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