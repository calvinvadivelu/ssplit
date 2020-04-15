import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { PayPalButton } from "react-paypal-button-v2";

import { confirmSharer } from '../../api/paypal.api';

import { selectCurrentUser, selectGuestUser } from '../../redux/user/user.selector';
import { selectSubscriptionData } from '../../redux/subscription/sub.selector';
import { setSubscriptionData } from '../../redux/subscription/sub.actions';

import './ConfirmSharer.scss'
const ConfirmSharer = ({ user, history, subscriptionData, setSubscriptionData }) => {
    const { planID } = useParams();
    const [ alreadySubscribed, setAlreadySubscribed ] = useState(false)
    const [ approved, setApproved ] = useState(false)
    useEffect(() => {
        if (subscriptionData === null || planID !== subscriptionData.planId) {                            //re-get the subscription data if they refresh the page
            setSubscriptionData(planID)
        }
    })
    useEffect(() => {
        if (!user) history.push(`/new/${planID}`)
    }, [user, history, planID])

    useEffect(() => {
        if(!subscriptionData || !user) return;
        const currentSharer = subscriptionData.sharers.find(sharer => sharer.email === user.email)
        if (currentSharer && currentSharer.confirmationId !== null) setAlreadySubscribed(true)
    }, [subscriptionData, user, setAlreadySubscribed])

    const onApproval = async (confirmationId) => {
        await confirmSharer(planID, user.email, confirmationId)
        setApproved(true)
    }
    if (subscriptionData !== null) {
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
                {!alreadySubscribed ? 
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
                                onApproval(details.id)
                            });
                        }}
                    />
                    :
                    approved ? 
                        <div className="sharerconfirm-right__approved">
                            You have subscribed to pay your share of the subscription to {ownerInfo.name}
                        </div>
                     :
                    <div className="sharerconfirm-right__alreadysub">You have already subscribed to pay your share of this subscription.</div>
                }
                </section>
            </div>
        );
    } 
    else {
        return (
            <div>loading</div>
        )
    }

};

const mapStateToProps = (state) => {
    const registeredUser = selectCurrentUser(state)
    const guestUser = selectGuestUser(state)
    const user = registeredUser ? registeredUser : guestUser

    return {
        subscriptionData: selectSubscriptionData(state),
        user
    }
}

const mapDispatchToProps = dispatch => ({
    setSubscriptionData: planId => dispatch(setSubscriptionData(planId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSharer);