import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions';

const initialState = {
  error: '',
  loggingIn: false
};

export const loginReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
