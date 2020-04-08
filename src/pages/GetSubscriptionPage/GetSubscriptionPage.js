import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPlanDetails } from '../../api/paypal.api';


const GetSubscriptionPage = () => {
    let { planID } = useParams();
    const [subscriptionData, setSubscriptionData] = useState({})


    useEffect(() => {
        getPlanDetails(planID).then(response => {
            setSubscriptionData({
                name: response.name,
                description: response.description,
                price: response.billing_cycles[0].pricing_scheme.fixed_price.value
            })
        })
    } , [planID])
    console.log('subscriptionData :', subscriptionData);
    return (
        <div className='logged-in-page'>
            
        </div>
    );
};

export default GetSubscriptionPage;