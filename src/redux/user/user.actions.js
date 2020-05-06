import { getUser } from '../../api/user.api';

export const setCurrentUser = user => {
    return (dispatch) => {
        if (user) getUser(user).then(userData => {
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: userData,
            })
        })
        else{
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: user
            })
        }
    }
}

export const setGuestUser = user => ({
    type: 'SET_GUEST_USER',
    payload: user,
})