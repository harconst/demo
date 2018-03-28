import { combineReducers } from 'redux';

import userReducer from './reducers/user.reducer';

// Combine with other reducers we may add in the future
const tipsterApp = combineReducers({
  userState: userReducer
});

export default tipsterApp;
