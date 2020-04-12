import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import subscriptionReducer from './subscription/sub.reducer';

const persistConfig = {
    key: 'root',
    storage, 
}

const rootReducer = combineReducers({
    user: userReducer,
    subscription: subscriptionReducer
});

export default persistReducer(persistConfig, rootReducer)