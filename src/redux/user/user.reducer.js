const INITIAL_STATE = {
    currentUser : null,  
    /* {
        id,
        name,
        email
    } */
    
    guestUser: null,
    /* {
        email
    } */
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER' :
            return {
                ...state,
                currentUser: action.payload
            }
        case 'SET_GUEST_USER' :
            return {
                ...state,
                guestUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;