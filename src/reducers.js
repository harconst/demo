import { combineReducers } from 'redux';

import userReducer from './reducers/user.reducer';
import postsReducer from './reducers/posts.reducer';

// Combine with other reducers we may add in the future
const tipsterApp = combineReducers({
  userState: userReducer,
  postsState: postsReducer
});

export default tipsterApp;
