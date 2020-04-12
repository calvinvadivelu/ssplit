export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user,
})

export const setGuestUser = user => ({
    type: 'SET_GUEST_USER',
    payload: user,
})