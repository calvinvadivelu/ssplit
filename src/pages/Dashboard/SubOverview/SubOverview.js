import React from 'react';

import NUM_SOUNDS from '../../../constants/NUM_SOUNDS';

import userIcons from '../../../images/userIcons';
import paid from '../../../images/circle-check.svg'
import unpaid from '../../../images/circle.svg'
import './SubOverview.scss';
const SubOverview = ({ activeSubscription }) => {
    console.log('activeSubscription :>> ', activeSubscription);
    const { payoutDate } = activeSubscription
    if (activeSubscription) console.log('no subscription clicked');

    let payoutMessage
    if (payoutDate > 28) payoutMessage = <p>You will get an email about the PayPal deposit on the {payoutDate}<sup>{NUM_SOUNDS[payoutDate]}</sup> or the last day of the month`</p>
    else if (payoutDate === 1) payoutMessage = <p>You will get an email about the PayPal deposit on the first of every month</p>
    else payoutMessage = <p>You will get an email about the PayPal deposit on the {payoutDate}<sup>{NUM_SOUNDS[payoutDate-1]}</sup> of every month</p>

    return (
        <div className='suboverview'>
            <div className="suboverview__header">
                <div className="suboverview__header-title">
                    <h3>{activeSubscription.name}</h3>
                </div>
                <div className="suboverview__header-price">
                    <p><span>${activeSubscription.totalPrice}</span> per month</p>
                </div>
            </div>
            <div className="suboverview__body">
                <div className="suboverview__body-description">
                    <p>{activeSubscription.description}</p>
                </div>
            </div>
            <div className="suboverview__sharers">
                <h5 className='suboverview__sharers-title'>Sharers' Confirmation Status</h5>
                {activeSubscription.sharers.map((sharer, index) => (
                    <div className="suboverview__sharers-sharer" key={index} style={!sharer.paid ? {} : {backgroundColor: 'rgba(130, 231, 109, 0.55)'}}>
                        <div className="suboverview__sharers-sharer__img" style={{backgroundImage: `url(${userIcons[index]})`}}/>
                        <p className="suboverview__sharers-sharer__name">
                            {sharer.name.substring(0,40)}
                        </p>
                        <div className="suboverview__sharers-sharer__paid">
                            {sharer.confirmed ? 
                            <>
                            <img src={paid} alt="Subscription Confirmed Indicator"/>
                            <div className="suboverview__sharers-sharer__paid-label">Confirmed</div>
                            </>
                            :
                            <>
                            <img src={unpaid} alt="Subscription Not Confirmed Indicator"/>
                            <div className="suboverview__sharers-sharer__paid-label">Not Confirmed</div>
                            </>
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className="suboverview__payoutdate">
                <h5 className="suboverview__payoutdate-title">Payout Date</h5>
                <p className="suboverview__payoutdate-date">{payoutMessage}</p>
            </div>
            <div className="suboverview__footer">
                <div className="suboverview__footer-cancel">
                    <button>cancel subscription</button>
                </div>
            </div>
        </div>
    );
};

export default SubOverview;