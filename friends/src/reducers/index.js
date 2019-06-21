import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { friendsReducer } from './freindsReducer';
import { modalReducer } from './modalReducer';

export default combineReducers({
  login: loginReducer,
  friends: friendsReducer,
  show: modalReducer
});
