import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_ERROR,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_ERROR
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
    case ADD_FRIEND_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case ADD_FRIEND_ERROR:
      return {
        ...state,
        friends: state.friends,
        isLoading: false,
        error: action.payload
      };
    case DELETE_FRIEND_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isLoading: false,
        error: ''
      };
    case DELETE_FRIEND_ERROR:
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
