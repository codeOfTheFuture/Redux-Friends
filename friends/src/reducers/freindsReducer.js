import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR
} from '../actions';

const initialState = {
  friends: [],
  isLoading: false,
  error: ''
};

export const friendsReducer = (state = initialState, action) => {
  console.log('action.payload = ', action.payload);
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case FETCH_FRIENDS_ERROR:
      return {
        ...state,
        friends: state.friends,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
