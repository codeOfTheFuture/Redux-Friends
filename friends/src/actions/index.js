import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
      console.log('login res...', res);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err });
    });
};

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log('Get Friends response', res);
      dispatch({
        type: FETCH_FRIENDS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log('Get Friends Err...', err);
      dispatch({ type: FETCH_FRIENDS_ERROR, payload: err });
    });
};

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR';

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axiosWithAuth()
    .post('/friends', friend)
    .then(res => {
      console.log('Add Friend res: ', res);
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Add Friend err: ', err);
      dispatch({ type: ADD_FRIEND_ERROR, payload: err });
    });
};

export const MODAL_SHOW = 'MODAL_SHOW';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const handleModalShow = () => {
  return {
    type: MODAL_SHOW
  };
};

export const handleModalClose = () => {
  return {
    type: MODAL_CLOSE
  };
};
