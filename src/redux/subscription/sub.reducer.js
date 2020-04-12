const INITIAL_STATE = {
    subscriptionData: null
}

const subscriptionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SUB_DATA' :
            return {
                subscriptionData: action.payload
            }
        default:
            return state;
    }
}

export default subscriptionReducer;