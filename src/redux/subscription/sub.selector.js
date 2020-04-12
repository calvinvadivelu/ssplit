import { createSelector } from 'reselect';

const selectSubscription = state => state.subscription;

export const selectSubscriptionData = createSelector(
    [selectSubscription],
    (subscription) => subscription.subscriptionData
)