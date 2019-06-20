import axios from 'axios';

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
  axios
    .get('http://localhost:5000/api/friends')
    .then(res => {
      console.log('Get Friends...', res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.friends });
    })
    .catch(err => {
      console.log('Get Friends Err...', err);
      dispatch({ type: FETCH_FRIENDS_ERROR, payload: err });
    });
};
