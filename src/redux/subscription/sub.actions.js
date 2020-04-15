import { getPlanDetails } from '../../api/paypal.api';

export const setSubscriptionData = (planId) => {
    return(dispatch) => {
        getPlanDetails(planId).then(planDetails => {
            dispatch({
                type: 'SET_SUB_DATA',
                payload: planDetails
            })
        })
    }
}