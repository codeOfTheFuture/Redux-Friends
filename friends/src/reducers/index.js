import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { friendsReducer } from './freindsReducer';

export default combineReducers({
  login: loginReducer,
  friends: friendsReducer
});
