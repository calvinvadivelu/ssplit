import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPlanDetails } from '../../api/paypal.api';

import { setGuestUser } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { setSubscriptionData } from '../../redux/subscription/sub.actions';
import { selectSubscriptionData } from '../../redux/subscription/sub.selector';
import LoginBox from '../../components/LoginBox/LoginBox';

import './GetSubscriptionPage.scss'
const GetSubscriptionPage = ({ history, currentUser, setGuestUser, subscriptionData, setSubscriptionData }) => {
    let { planID } = useParams();
    const [ isLoaded, Loaded ] = useState(false)

    const [ guestEmail, setGuestEmail ] = useState('')

    const onLogin = useCallback(() => history.push(`/join/${planID}`), [history, planID])

    useEffect(() => {
        getPlanDetails(planID).then(response => {
            console.log('response plan details:', response);
            setSubscriptionData(response)
        })
    } , [planID, setSubscriptionData])

    useEffect(() => {
        if (subscriptionData) Loaded(true)
    }, [subscriptionData])

    useEffect(() => {
        console.log('currentUser :', currentUser);
        if (currentUser) {
            onLogin();
        }
    }, [currentUser, onLogin])

    const onGuestLogin = () => {
        setGuestUser(guestEmail)
        onLogin();
    }
    

    return (
        <div className='logged-in-page getsub'>
            <section className="getsub__left">
                {isLoaded &&
                <>
                    <div className="getsub-intro">{subscriptionData.ownerInfo.name.split(' ')[0]} has invited you to share a subscription for {subscriptionData.name} with him</div>
                    <div className="getsub-intro">If this was meant for you and you haven't used ssplit before, create an account on the right and we can show you how easy this is!</div>
                    <div className="getsub-intro">If you don't want to create an account, you can continue as a guest with just your email address and we won't harvest your data.</div>
                    <label htmlFor="email">Guest Email</label>
                    <input type="email" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)}/>
                    <button onClick={onGuestLogin}>Continue</button>
                </>
                }
            </section>

            <section className='getsub__right'>
                <LoginBox
                onLogin = { onLogin }//need to attach user to subscription confirmed sharers array
                />
            </section>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    subscriptionData: selectSubscriptionData(state)
})

const mapDispatchToProps = dispatch => ({
    setGuestUser: user => dispatch(setGuestUser(user)),
    setSubscriptionData: subscriptionData => dispatch(setSubscriptionData(subscriptionData))
})

export default connect(mapStateToProps, mapDispatchToProps)(GetSubscriptionPage);