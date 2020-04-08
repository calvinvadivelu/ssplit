import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPlanDetails } from '../../api/paypal.api';


const GetSubscriptionPage = () => {
    let { planID } = useParams();
    

    useEffect(() => {
        getPlanDetails(planID).then(response => {
            console.log('response :', response)
        })
    } , [planID])

    return (
        <div className='logged-in-page'>
            
        </div>
    );
};

export default GetSubscriptionPage;