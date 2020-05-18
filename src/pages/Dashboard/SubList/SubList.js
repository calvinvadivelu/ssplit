import React from 'react';

import SUB_DATA from '../../../constants/SUB_DATA';

import './SubList.scss';

const SubList = ({ subscriptions, setActivePlan }) => {
    return (
        <div className='sublist'>
            {subscriptions.map((subscriptionPlanData, index) => {
                const subscriptionData = SUB_DATA[subscriptionPlanData.dataIndex]
                console.log('subscriptionPlanData.sharers :>> ', subscriptionPlanData.sharers);
                return (
                    <button key={index} id={`sub-${index}`} className="sublist__sub-btncontainer" onClick={() => setActivePlan(index)}>
                        <div className="sublist__sub">
                            <div className="sublist__sub-image" style={{backgroundColor: subscriptionData.colourCode}}>
                                <img src={subscriptionData.picture} alt=""/>
                            </div>
                            <label htmlFor={`sub-${index}`} className='sublist__sub-name'>{subscriptionPlanData.name}</label>
                            <div className='sublist__sub-total' ><b>${subscriptionPlanData.totalPrice}</b>/month</div>
                            <div className="sublist__sub-sharers">
                                {subscriptionPlanData.sharers.reduce((paidSharers, sharer) => sharer.paid ? ++paidSharers : paidSharers, 0)}/{subscriptionPlanData.sharers.length} Paid
                            </div>
                        </div>
                    </button>
            )})}
        </div>
    );
};

export default SubList;